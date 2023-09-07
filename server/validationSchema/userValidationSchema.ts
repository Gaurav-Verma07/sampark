import { Schema } from 'express-validator';

const createUserSchema: Schema = {
  name: {
    in: ['body'],
    isLength: {
      options: { min: 3 },
      errorMessage: 'Name must be at least 3 characters long',
    },
    notEmpty: {
      errorMessage: 'Name cannot be empty',
    },
  },

  email: {
    in: ['body'],
    custom: {
      options: (value: string) => {
        if (!/@.*\.com$/.test(value)) {
          throw new Error('Invalid email format');
        }
        return true;
      },
    },
    notEmpty: {
      errorMessage: 'Email cannot be empty',
    },
  },
  password: {
    in: ['body'],
    custom: {
      options: (value: string) => {
        if (!/(?=.*[a-zA-Z])(?=.*\d)(?=.*[^a-zA-Z0-9]).{6,}/.test(value)) {
          throw new Error(
            'Password must contain at least one alphabet, one number, one special character, and be minimum 6 characters long',
          );
        }
        return true;
      },
    },
    notEmpty: {
      errorMessage: 'password cannot be empty',
    },
  },
  currentCity: {
    in: ['body'],
    isString: true,
    notEmpty: {
      errorMessage: 'Current city cannot be empty',
    },
  },
  address: {
    in: ['body'],
    isString: true,
    notEmpty: {
      errorMessage: 'Address cannot be empty',
    },
  },
  whatsappNumber: {
    in: ['body'],
    isMobilePhone: true,
    notEmpty: {
      errorMessage: 'Whatsapp number cannot be empty',
    },
  },
  collegeName: {
    in: ['body'],
    isString: true,
    notEmpty: {
      errorMessage: 'College name cannot be empty',
    },
  },
  inspiration: {
    in: ['body'],
    isString: true,
    optional: true,
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
    optional: true,
  },
  bio: {
    in: ['body'],
    isString: {
      errorMessage: 'Invalid bio',
    },
    optional: true,
  },
};

const loginUserSchema: Schema = {
  email: {
    in: ['body'],
    custom: {
      options: (value: string) => {
        if (!/@.*\.com$/.test(value)) {
          throw new Error('Invalid email');
        }
        return true;
      },
    },
    notEmpty: {
      errorMessage: 'Email cannot be empty',
    },
  },
  password: {
    in: ['body'],
    custom: {
      options: (value: string) => {
        if (!/(?=.*[a-zA-Z])(?=.*\d)(?=.*[^a-zA-Z0-9]).{6,}/.test(value)) {
          throw new Error(
            'Password must contain at least one alphabet, one number, one special character, and be minimum 6 characters long',
          );
        }
        return true;
      },
    },
    notEmpty: {
      errorMessage: 'password cannot be empty',
    },
  },
};

export const userValidationSchema = {
  createUserSchema,
  loginUserSchema,
};