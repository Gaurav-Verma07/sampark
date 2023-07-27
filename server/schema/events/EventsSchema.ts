import { Schema, model } from 'mongoose';

const EventSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
    slug: {
      type: String,
      require: true,
    },
    organizer: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    address: {
      type: String,
      require: true,
    },
    date: {
      type: String,
      require: true,
    },
    image: {
      type: String,
      require: false,
    },
    duration: {
      type: Number,
      require: false,
    },
  },
  {
    timestamps: true,
  },
);

export const EventModel = model('events', EventSchema);
