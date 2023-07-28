import { Schema, model } from 'mongoose'


const NgoSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
    slug: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    address: {
      type: String,
      require: false,
    },
    image: {
      type: String,
      require: false,
    },
  },
  {
    timestamps: true,
  },
);

export const NgoModel = model('ngos', NgoSchema);
