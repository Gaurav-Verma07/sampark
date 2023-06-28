import { NgoModel } from '../../schema/ngos/NgosSchema';
import { NgoType } from './ngo.interface';

const getAllNgos = async () => {
  try {
    const ngoData = await NgoModel.find({});

    return ngoData;
  } catch (error) {
    throw new Error(error as string);
  }
};

const getNgoById = async (_id: string) => {
  try {
    const ngoData = await NgoModel.findOne({ _id });

    return ngoData;
  } catch (error) {
    throw new Error(error as string);
  }
};

const getNgoBySlug = async (slug: string) => {
  try {
    const ngoData = await NgoModel.findOne({ slug });

    return ngoData;
  } catch (error) {
    throw new Error(error as string);
  }
};

const getNgoByLocation = async (location: string) => {
  try {
    const ngoData = await NgoModel.findOne({ location });

    return ngoData;
  } catch (error) {
    throw new Error(error as string);
  }
};

const createNgo = async (eventInfo: NgoType) => {
  try {
    const ngoData = new NgoModel(eventInfo);
    await ngoData?.save();

    return ngoData;
  } catch (error) {
    throw new Error(error as string);
  }
};

const updateNgo = async (_id: string, eventInfo: NgoType) => {
  try {
    const ngoData = await NgoModel.findOneAndUpdate(
      { _id },
      { setValue: eventInfo },
      { returnNewDocument: true },
    );

    return ngoData;
  } catch (error) {
    throw new Error(error as string);
  }
};

const deleteNgo = async (_id: string) => {
  try {
    const ngoData = await NgoModel.deleteOne({ _id });
    return ngoData;
  } catch (error) {
    throw new Error(error as string);
  }
};

export const NgoService = {
  getAllNgos,
  getNgoById,
  getNgoBySlug,
  getNgoByLocation,
  createNgo,
  updateNgo,
  deleteNgo,
};
