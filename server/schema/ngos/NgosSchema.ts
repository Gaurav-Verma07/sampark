import { Schema, model } from 'mongoose';

const NgoSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    contactInformation: {
      type: { phone: String, website: String, email: String },
      required: true,
    },
    vision: {
      type: String,
      required: true,
    },
    focusAreas: {
      type: [String],
      required: true,
    },
    projects: {
      type: [{ name: String, description: String }],
      required: true,
    },
    teamMembers: {
      type: [{ name: String, designation: String }],
      required: true,
    },
    donations: {
      type: { isDonations: Boolean, contact: String },
      required: false,
    },
    volunteering: {
      type: { isVolunteer: Boolean, contact: String },
      required: false,
    },
    logo: {
      type: String,
      required: true,
    },
    testimonials: {
      type: [{ name: String, testimony: String }],
      required: false,
    },
    socialMediaLinks: {
      type: { twitter: String, linkedIn: String },
      required: false,
    },
    license: {
      type: String,
    },
    funding: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

export const NgoModel = model('ngos', NgoSchema);
