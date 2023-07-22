import { OrphanageModel } from '../../schema/orphanage/OrphanagesSchema';
import { OrphanageType } from './orphanage.interface';

const getFirstOrphanage = async () => {
  try {
    const orphanage = await OrphanageModel.findOne();
    return orphanage;
  } catch (error) {
    throw new Error(error as string);
  }
};

const getAllOrphanages = async () => {
  try {
    const orphanage = await OrphanageModel.find({});

    return orphanage;
  } catch (error) {
    throw new Error(error as string);
  }
};

const getOrphanageById = async (_id: string) => {
  try {
    const orphanage = await OrphanageModel.findOne({ _id });

    return orphanage;
  } catch (error) {
    throw new Error(error as string);
  }
};

const getOrphanageBySlug = async (slug: string) => {
  try {
    const orphanage = await OrphanageModel.findOne({ slug });

    return orphanage;
  } catch (error) {
    throw new Error(error as string);
  }
};

const getOrphanageByLocation = async (location: string) => {
  try {
    const orphanage = await OrphanageModel.findOne({ location });

    return orphanage;
  } catch (error) {
    throw new Error(error as string);
  }
};

const createOrphanage = async (eventInfo: OrphanageType) => {
  try {
    const orphanage = new OrphanageModel(eventInfo);
    await orphanage?.save();

    return orphanage;
  } catch (error) {
    throw new Error(error as string);
  }
};

const updateOrphanage = async (_id: string, eventInfo: OrphanageType) => {
  try {
    const orphanage = await OrphanageModel.findOneAndUpdate(
      { _id },
      { setValue: eventInfo },
      { returnNewDocument: true },
    );

    return orphanage;
  } catch (error) {
    throw new Error(error as string);
  }
};

const deleteOrphanage = async (_id: string) => {
  try {
    const orphanage = await OrphanageModel.deleteOne({ _id });
    return orphanage;
  } catch (error) {
    throw new Error(error as string);
  }
};

export const OrphanageService = {
  getFirstOrphanage,
  getAllOrphanages,
  getOrphanageById,
  getOrphanageBySlug,
  getOrphanageByLocation,
  createOrphanage,
  updateOrphanage,
  deleteOrphanage,
};
