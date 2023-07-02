import express, { Request, Response } from 'express';
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
      const userInfo = req.body;

      await UserService.register(userInfo);
      // if (user === 'user exists') {
      //   res.status(200).json({ message: 'User already exists' });
      // }
      res.status(200).send({ success: true, user: 'registration successful' });
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
      const { userInfo } = req.body;
      await UserService.login(userInfo);
      // if (user === 404) {
      //   res.status(404).json({ message: 'User not found' });
      // }
      // if (user === 401) {
      //   res.status(401).json({ message: 'Invalid Credentials' });
      // }
      res.status(200).send({ success: true, user: 'login successful' });
    } catch (error) {
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
