import { Schema } from 'express-validator';

const createBlogSchema: Schema = {
  title: {
    in: ['body'],
    isString: true,
    notEmpty: true,
  },
  author: {
    in: ['body'],
    isString: true,
    notEmpty: true,
  },
  content: {
    in: ['body'],
    isString: true,
    notEmpty: true,
  },
  tags: {
    in: ['body'],
    custom: {
      options: (value) => {
        if (!Array.isArray(JSON.parse(value))) {
          throw new Error('Tags must be an array');
        }
        return true;
      },
    },
    notEmpty: true,
  },
  publishedDate: {
    in: ['body'],
    isDate: true,
    notEmpty: true,
  },
  featuredImage: {
    in: ['body'],
    isString: true,
    notEmpty: true,
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
