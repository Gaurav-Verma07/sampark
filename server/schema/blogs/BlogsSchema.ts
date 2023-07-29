import { Schema, model } from 'mongoose';

const BlogSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
    slug: {
      type: String,
      require: true,
    },
    content: {
      type: String,
      require: true,
    },
    author: {
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

export const BlogModel = model('blogs', BlogSchema);
