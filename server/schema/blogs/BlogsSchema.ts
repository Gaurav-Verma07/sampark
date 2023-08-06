import { Schema, model } from 'mongoose';

const BlogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    tags: {
      type: [String],
      required: true,
    },
    publishedDate: {
      type: Date,
      required: true,
    },
    featuredImage: {
      type: String,
      required: true,
    },
    comments: {
      type: [
        {
          name: String,
          email: String,
          comment: String,
          date: { type: Date, default: Date.now },
        },
      ],
      required: false,
    },
    likes: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  },
);

export const BlogModel = model('blogs', BlogSchema);