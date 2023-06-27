import { Schema, model } from 'mongoose'


const OrphanageSchema = new Schema(
  {
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
      require: true,
    },
    description: {
      type: String,
      require: false,
    },
    image: {
      type: Buffer,
      require: false,
    },
  },
  {
    timestamps: true,
  },
);

export const OrphanageModel = model('orphanages', OrphanageSchema);
