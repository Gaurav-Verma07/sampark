import * as express from 'express';
import { Request, Response } from 'express';
import { UserService } from './user.service';
import { UserType } from './user.interface';
import { validationResult, checkSchema } from 'express-validator';
import { userValidationSchema } from '../../validationSchema/userValidationSchema';
import { checkAuth } from '../middleware/auth.middleware';

export const userRouter = express.Router();

interface RequestParams {
  id: string;
}

interface RequestBody {
  id: string;
  userInfo: UserType;
}

//get user by id

userRouter.get('/:id', async (req: Request<RequestParams>, res: Response) => {
  try {
    const { id } = req.params;
    const user = await UserService.getUser(id);
    res.status(200).send({ success: true, user: user });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

//create user

userRouter.post(
  '/register',
  checkSchema(userValidationSchema.createUserSchema),
  async (req: Request<RequestBody>, res: Response) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(422).json({
          errors: errors.array(),
        });
      }
      console.log('body:', req.body);
      const userInfo = req.body;

      const user = await UserService.register(userInfo);
      if (user.status === 409) {
        res.status(200).json({ message: 'User already exists' });
      }
      if (user.status === 200) {
        res.cookie('token', user.id, { signed: true, httpOnly: true });
        res.status(200).send({ success: true, message: user.message });
      }
    } catch (error) {
      res
        .status(500)
        .json({ success: false, message: 'Internal server error' });
    }
  },
);

//login user

userRouter.post(
  '/login',
  checkSchema(userValidationSchema.loginUserSchema),
  async (req: Request<RequestBody>, res: Response) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(422).json({
          errors: errors.array(),
        });
      }
      const userInfo = req.body;
      console.log('userInfo: ', userInfo);
      const user = await UserService.login(userInfo);

      if (user.status === 404) {
        res.status(404).json({ success: false, message: user.message });
      }
      if (user.status === 401) {
        res.status(401).json({ success: false, message: user.message });
      }
      if (user.status === 200) {
        res.cookie('token', user.id, { signed: true, httpOnly: true });
        res.status(200).send({ success: true, message: user.message });
      }
    } catch (error) {
      // console.log(error);
      res
        .status(500)
        .json({ success: false, message: 'Internal server error' });
    }
  },
);

//update user

userRouter.post(
  '/update/:id',
  checkAuth,
  checkSchema(userValidationSchema.createUserSchema),
  async (req: Request, res: Response) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(422).json({
          errors: errors.array(),
        });
      }
      const { id } = req.params;
      const { userInfo } = req.body;

      const user = await UserService.updateUser(id, userInfo);
      res.status(200).send({ success: true, user: user });
    } catch (error) {
      res
        .status(500)
        .json({ success: false, message: 'Internal server error' });
    }
  },
);
