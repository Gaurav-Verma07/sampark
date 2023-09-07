import { Schema, model } from 'mongoose';

const ImpactSchema = new Schema(
  {
    domain: {
      type: String,
      require: true,
    },
    title: {
      type: String,
      require: true,
    },
    name: {
      type: String,
      require: true,
    },
    slug: {
      type: String,
      require: true,
    },
    address: {
      type: String,
      required: true,
    },
    testimonial: {
      type: String,
      require: true,
    },
    image: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  },
);

export const ImpactModel = model('impacts', ImpactSchema);
