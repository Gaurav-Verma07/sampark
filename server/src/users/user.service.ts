import { UserModel } from '../../schema/user/UserSchema.js';
import { UserType } from './user.interface';

const register = async (userInfo: UserType) => {
  try {
    //  const { email, ...data } = userInfo;

    const newUser = new UserModel(userInfo);
    await newUser.save();
    return newUser;
  } catch (error) {
    throw new Error(error as string);
  }
};

const login = async (userInfo: UserType) => {
  try {
    //  const { email:string, password } = userInfo;
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
