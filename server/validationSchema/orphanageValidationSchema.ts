import { Schema } from 'express-validator';

const createOrphanageSchema: Schema = {
  name: {
    in: ['body'],
    isLength: {
      options: { min: 2 },
      errorMessage: 'Name must be at least 2 characters long',
    },
    notEmpty: {
      errorMessage: 'Name cannot be empty',
    },
  },
  location: {
    in: ['body'],
    isString: true,
    notEmpty: true,
  },
  contactInformation: {
    in: ['body'],
    isString: true,
    notEmpty: true,
  },
  vision: {
    in: ['body'],
    isString: true,
    notEmpty: true,
  },
  description: {
    in: ['body'],
    isString: true,
    notEmpty: true,
  },
  capacity: {
    in: ['body'],
    isNumeric: true,
    notEmpty: true,
  },
  servicesProvided: {
    in: ['body'],
    custom: {
      options: (value) => {
        if (!Array.isArray(value)) {
          throw new Error('Services provided must be an array');
        }
        if (value.length < 1) {
          throw new Error(
            'Services provided array must contain at least one item',
          );
        }
        return true;
      },
    },
    notEmpty: true,
  },
  startAge: {
    in: ['body'],
    isNumeric: true,
    notEmpty: true,
  },
  endAge: {
    in: ['body'],
    isNumeric: true,
    notEmpty: true,
  },
  photos: {
    in: ['body'],
    isString: true,
    notEmpty: true,
  },
  operatingHours: {
    in: ['body'],
    isString: true,
    notEmpty: true,
  },
  license: {
    in: ['body'],
    isString: true,
    notEmpty: true,
  },
  staffInformation: {
    in: ['body'],
    custom: {
      options: (value) => {
        if (!Array.isArray(value)) {
          throw new Error('Staff information must be an array');
        }
        if (value.length < 1) {
          throw new Error(
            'Staff information array must contain at least one item',
          );
        }
        value.forEach((staff) => {
          if (!staff.name || !staff.qualification) {
            throw new Error('Each staff must have a name and qualification');
          }
        });
        return true;
      },
    },
    notEmpty: true,
  },
  donationInformation: {
    in: ['body'],
    custom: {
      options: (value) => {
        if (
          typeof JSON.parse(value) !== 'object' ||
          Array.isArray(JSON.parse(value))
        ) {
          throw new Error('Donation information must be an object');
        }
        if (
          JSON.parse(value).isDonations === false &&
          JSON.parse(value).contact.length === 0
        ) {
          throw new Error(
            'If donation is taken, a contact information must be there',
          );
        }
        return true;
      },
    },
    notEmpty: {
      errorMessage: 'Donation information cannot be empty',
    },
  },
  testimonials: {
    in: ['body'],
    custom: {
      options: (value) => {
        if (!Array.isArray(JSON.parse(value))) {
          throw new Error('Testimonial must be an array');
        }
        JSON.parse(value).forEach((data: any) => {
          if (!data.name || !data.testimony) {
            throw new Error('Each testimony must have a name, testimony value');
          }
        });
        return true;
      },
    },
    optional: true,
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

export const orphanageValidationSchema = {
  createOrphanageSchema,
  deleteSchema,
};
