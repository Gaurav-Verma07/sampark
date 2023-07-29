
import { ImpactModel } from '../../schema/impacts/ImpactsSchema';
import { ImpactType } from './impact.interface';

const getFirstImpact = async () => {
  try {
    const impactData = await ImpactModel.findOne();
    return impactData;
  } catch (error) {
    throw new Error(error as string);
  }
};

const getAllImpacts = async () => {
  try {
    const impactData = await ImpactModel.find({});
    return impactData;
  } catch (error) {
    throw new Error(error as string);
  }
};

const getImpactById = async (_id: string) => {
  try {
    const impactData = await ImpactModel.findOne({ _id });
    return impactData;
  } catch (error) {
    throw new Error(error as string);
  }
};

const getImpactBySlug = async (slug: string) => {
  try {
    const impactData = await ImpactModel.findOne({ slug });
    return impactData;
  } catch (error) {
    throw new Error(error as string);
  }
};

const getImpactByLocation = async (location: string) => {
  try {
    const impactData = await ImpactModel.findOne({ location });
    return impactData;
  } catch (error) {
    throw new Error(error as string);
  }
};

const createImpact = async (impactInfo: ImpactType) => {
  try {
    const impactData = new ImpactModel(impactInfo);
    await impactData?.save();
    return impactData;
  } catch (error) {
    throw new Error(error as string);
  }
};

const updateImpact = async (_id: string, impactInfo: ImpactType) => {
  try {
    const impactData = await ImpactModel.findOneAndUpdate(
      { _id },
      { setValue: impactInfo },
      { returnNewDocument: true },
    );

    return impactData;
  } catch (error) {
    throw new Error(error as string);
  }
};

const deleteImpact = async (_id: string) => {
  try {
    const impactData = await ImpactModel.deleteOne({ _id });
    return impactData;
  } catch (error) {
    throw new Error(error as string);
  }
};
export const ImpactService = {
  getFirstImpact,
  getAllImpacts,
  getImpactById,
  getImpactBySlug,
  getImpactByLocation,
  createImpact,
  updateImpact,
  deleteImpact,
};
