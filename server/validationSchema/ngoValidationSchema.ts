import { Schema } from 'express-validator';

const createNgoSchema: Schema = {
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
    custom: {
      options: (value) => {
        // if (!Array.isArray(value)) {
        //   throw new Error('Contact information must be an array');
        // }
        // value.forEach((contact: { name: string; link: string }) => {
        //   if (!contact.name || !contact.link) {
        //     throw new Error('Each contact must have a name and link');
        //   }
        // });
        return true;
      },
    },
    notEmpty: true,
  },
  vision: {
    in: ['body'],
    isString: true,
    notEmpty: true,
  },
  focusAreas: {
    in: ['body'],
    custom: {
      options: (value) => {
        if (!Array.isArray(value)) {
          throw new Error('Focus areas must be an array');
        }
        if (value.length < 1) {
          throw new Error('Focus areas array must contain at least one item');
        }
        return true;
      },
    },
    notEmpty: true,
  },
  projects: {
    in: ['body'],
    custom: {
      options: (value) => {
        if (!Array.isArray(value)) {
          throw new Error('Projects must be an array');
        }
        value.forEach((project: { name: string; description: string }) => {
          if (!project.name || !project.description) {
            throw new Error('Each project must have a name and description');
          }
        });
        return true;
      },
    },
    notEmpty: true,
  },
  teamMembers: {
    in: ['body'],
    custom: {
      options: (value) => {
        if (!Array.isArray(value)) {
          throw new Error('Team members must be an array');
        }
        value.forEach((member: { name: string; designation: string }) => {
          if (!member.name || !member.designation) {
            throw new Error(
              'Each team member must have a name and designation',
            );
          }
        });
        return true;
      },
    },
    notEmpty: true,
  },
  donations: {
    in: ['body'],
    custom: {
      options: (value) => {
        if (typeof value !== 'object') {
          throw new Error('Donations must be an object');
        }
        if (value.isDonations === false && value.contact.length === 0) {
          throw new Error(
            'If donations are accepted, a contact information must be provided',
          );
        }
        return true;
      },
    },
    notEmpty: true,
  },
  volunteering: {
    in: ['body'],
    custom: {
      options: (value) => {
        if (typeof value !== 'object') {
          throw new Error('Volunteering must be an object');
        }
        if (value.isVolunteer === false && value.contact.length === 0) {
          throw new Error(
            'If volunteering is accepted, a contact information must be provided',
          );
        }
        return true;
      },
    },
    notEmpty: true,
  },
  logo: {
    in: ['body'],
    isString: true,
    notEmpty: true,
  },
  testimonials: {
    in: ['body'],
    optional: true,
    custom: {
      options: (value) => {
        if (!Array.isArray(value)) {
          throw new Error('Testimonials must be an array');
        }
        value.forEach((testimonial: { name: string; testimony: string }) => {
          if (!testimonial.name || !testimonial.testimony) {
            throw new Error('Each testimonial must have a name and testimony');
          }
        });
        return true;
      },
    },
  },
  socialMediaLinks: {
    in: ['body'],
    custom: {
      options: (value) => {
        if (typeof value !== 'object') {
          throw new Error('Social media links must be an object');
        }
        return true;
      },
    },
    optional: true,
  },
  license: {
    in: ['body'],
    isString: true,
    optional: true,
  },
  funding: {
    in: ['body'],
    isString: true,
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

export const ngoValidationSchema = {
  createNgoSchema,
  deleteSchema,
};
