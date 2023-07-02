import { Schema } from 'express-validator';

const createEventSchema: Schema = {
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
  organizer: {
    in: ['body'],
    isLength: {
      options: { min: 5 },
      errorMessage: 'Name must be at least 5 characters long',
    },
    notEmpty: {
      errorMessage: 'organizer cannot be empty',
    },
  },
  description: {
    in: ['body'],
    isLength: {
      options: { min: 15 },
      errorMessage: 'Name must be at least 15 characters long',
    },
    notEmpty: {
      errorMessage: 'description cannot be empty',
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
  date: {
    in: ['body'],
    isDate: {
      errorMessage: 'Invalid date value',
    },
    notEmpty: {
      errorMessage: 'date cannot be empty',
    },
  },
  duration: {
    in: ['body'],
    isNumeric: {
      errorMessage: 'Invalid duration value',
    },
    notEmpty: {
      errorMessage: 'duration cannot be empty',
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

export const eventValidationSchema = {
  createEventSchema,
  deleteSchema,
};
