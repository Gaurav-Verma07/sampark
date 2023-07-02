import { Schema } from 'express-validator';

const createBlogSchema: Schema = {
  name: {
    in: ['body'],
    isLength: {
      options: { min: 5 },
      errorMessage: 'Name must be at least 5 characters long',
    },
    notEmpty: {
      errorMessage: 'Name cannot be empty',
    },
  },
  slug: {
    in: ['body'],
    isString: {
      errorMessage: 'Invalid slug value',
    },
    notEmpty: {
      errorMessage: 'slug cannot be empty',
    },
  },
  content: {
    in: ['body'],
    isLength: {
      options: { min: 50 },
      errorMessage: 'Name must be at least 50 characters long',
    },
    notEmpty: {
      errorMessage: 'content cannot be empty',
    },
  },
  author: {
    in: ['body'],
    isLength: {
      options: { min: 3 },
      errorMessage: 'Name must be at least 3 characters long',
    },
    notEmpty: {
      errorMessage: 'author cannot be empty',
    },
  },

  image: {
    in: ['body'],
    custom: {
      options: (value: string) => {
        if (!/\.(png|jpg|jpeg)$/.test(value)) {
          throw new Error('Image must have a valid extension png, jpg, jpeg');
        }
        return true;
      },
    },
    notEmpty: {
      errorMessage: 'image cannot be empty',
    },
  },
};

const deleteSchema: Schema = {
  id: {
    in: ['body'],
    isString: {
      errorMessage: 'Invalid id value',
    },
    notEmpty: {
      errorMessage: 'id cannot be empty',
    },
  },
};

export const blogValidationSchema = {
  createBlogSchema,
  deleteSchema,
};
