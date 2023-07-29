import { Schema } from 'express-validator';

const createImpactSchema: Schema = {
  domain: {
    in: ['body'],
    isString: {
      errorMessage: 'Invalid domain value',
    },
    notEmpty: {
      errorMessage: 'domain cannot be empty',
    },
  },
  title: {
    in: ['body'],
    isString: {
      errorMessage: 'Invalid title value',
    },
    notEmpty: {
      errorMessage: 'title cannot be empty',
    },
  },
  name: {
    in: ['body'],
    isString: {
      errorMessage: 'Invalid name value',
    },
    notEmpty: {
      errorMessage: 'name cannot be empty',
    },
  },
  testimonial: {
    in: ['body'],
    isString: {
      errorMessage: 'Invalid testimonial value',
    },
    notEmpty: {
      errorMessage: 'testimonial cannot be empty',
    },
  },

  address: {
    in: ['body'],
    isString: {
      errorMessage: 'Invalid address value',
    },
    notEmpty: {
      errorMessage: 'address cannot be empty',
    },
  },
  image: {
    in: ['body'],
    isString: {
      errorMessage: 'Invalid image value',
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

export const impactValidationSchema = {
  createImpactSchema,
  deleteSchema,
};
