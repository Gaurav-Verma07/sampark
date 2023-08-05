import { Schema, model } from 'mongoose';

const OrphanageSchema = new Schema(
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
      type: String,
      required: true,
    },
    vision: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    capacity: {
      type: Number,
      required: true,
    },
    servicesProvided: {
      type: [String],
      required: true,
    },
    startAge: {
      type: Number,
      required: true,
    },
    endAge: {
      type: Number,
      required: true,
    },
    logo: {
      type: String,
      required: true,
    },
    operatingHours: {
      type: Number,
      required: true,
    },
    license: {
      type: String,
      required: true,
    },
    staffInformation: {
      type: [{ name: String, qualification: String }],
      required: true,
    },
    donationInformation: {
      type: { isDonations: Boolean, contact: String },
      required: true,
    },
    testimonials: {
      type: [{ name: String, testimony: String }],
      required: false,
    },
  },
  {
    timestamps: true,
  },
);

export const OrphanageModel = model('orphanages', OrphanageSchema);
