import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

export const checkAuth = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const authorization = req.headers['authorization'];
  const token = authorization && authorization.split(' ')[1];

  if (token == null)
    return res
      .status(401)
      .json({ success: false, message: 'No authentication' });

  jwt.verify(
    token,
    process.env.TOKEN_SECRET as string,
    (err: jwt.VerifyErrors | null, user: any) => {
      console.log(err);

      if (err)
        return res
          .status(403)
          .json({ success: false, message: 'Internal server error' });

      console.log(user);

      next();
    },
  );
};
