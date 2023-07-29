import { UserModel } from '../../schema/user/UserSchema.js';
import { UserType } from './user.interface';
import bcrypt from 'bcryptjs';

const register = async (userInfo: UserType) => {
  try {
    const user = await UserModel.findOne({ email: { $eq: userInfo.email } });
    if (user) {
      return { status: 409, message: 'User already exists' };
    }
    const hashedPassword = await bcrypt.hash(userInfo.password, 10);
    userInfo.password = hashedPassword;
    const newUser = new UserModel(userInfo);
    await newUser.save();
    return {
      status: 200,
      id: newUser._id,
      messsage: 'registration successful',
    };
  } catch (error) {
    throw new Error(error as string);
  }
};

const login = async (userInfo: UserType) => {
  try {
    const user = await UserModel.findOne({ email: { $eq: userInfo.email } });
    console.log(user);
    if (!user) {
      return { status: 404, message: 'User not found' };
    }
    //  if (!user.password) {
    //    return { status: 500, message: 'Internal server error' };
    //  }
    if (user.password) {
      const validPassword = await bcrypt.compare(
        userInfo.password,
        user.password,
      );
      if (!validPassword) {
        return { status: 401, message: 'Invalid Credentials' };
      }

      return { status: 200, id: user._id, message: 'login successful' };
    } else {
      return { status: 500, message: 'Internal server error' };
    }
  } catch (error) {
    throw new Error(error as string);
  }
};

const updateUser = async (_id: string, userInfo: UserType) => {
  try {
    const user = await UserModel.findOneAndUpdate(
      { _id: _id },
      { $set: userInfo },
      { returnOriginal: false },
    );
    return user;
  } catch (error) {
    throw new Error(error as string);
  }
};

const getUser = async (_id: string) => {
  try {
    const user = await UserModel.findOne({ _id });
    return user;
  } catch (error) {
    throw new Error(error as string);
  }
};

export const UserService = {
  register,
  login,
  updateUser,
  getUser,
};
