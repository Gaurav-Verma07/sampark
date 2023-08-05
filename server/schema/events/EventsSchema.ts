import { Schema, model } from 'mongoose';

const EventSchema = new Schema(
  {
    eventName: {
      type: String,
      required: true,
    },
    eventType: {
      type: String,
      required: true,
    },
    eventDate: {
      type: Date,
      required: true,
    },
    eventLocation: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    organizingOrganization: {
      type: String,
      required: true,
    },
    targetAudience: {
      type: String,
      required: true,
    },
    activities: {
      type: [{ name: String, description: String }],
      required: true,
    },
    volunteering: {
      type: { isVolunteer: Boolean, contact: String },
      required: false,
    },
    donations: {
      type: { isDonations: Boolean, contact: String },
      required: false,
    },
    logo: {
      type: String,
      required: true,
    },
    contactInformation: {
      type: [{ name: String, link: String }],
      required: true,
    },
    socialMediaLinks: {
      type: { twitter: String, linkedIn: String },
      required: false,
    },
    registrationLink: {
      type: { isregistration: Boolean, link: String },
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const EventModel = model('events', EventSchema);
