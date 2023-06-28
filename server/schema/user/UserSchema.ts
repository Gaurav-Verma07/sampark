import { Schema, model } from 'mongoose'


const UserSchema = new Schema({
 name:{
  type:String,
  require: true,
 },
  email:{
  type:String,
  require: true,
 },
  password:{
  type:String,
  require: true,
 },
  image:{
  type:Buffer,
  require: false,
 },
  bio:{
  type:String,
  require: false,
 },

},
{
    timestamps: true,
  });

export const UserModel = model("user", UserSchema);
