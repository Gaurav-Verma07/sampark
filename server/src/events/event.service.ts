import { EventModel } from '../../schema/events/EventsSchema';
import { EventType } from './event.interface';

const getFirstEvent = async () => {
  try {
    const eventData = await EventModel.findOne();
    return eventData;
  } catch (error) {
    throw new Error(error as string);
  }
};

const getAllEvents = async () => {
  try {
    const eventData = await EventModel.find({});
    return eventData;
  } catch (error) {
    throw new Error(error as string);
  }
};

const getEventById = async (_id: string) => {
  try {
    const eventData = await EventModel.findOne({ _id });
    return eventData;
  } catch (error) {
    throw new Error(error as string);
  }
};

const getEventBySlug = async (slug: string) => {
  try {
    const eventData = await EventModel.findOne({ slug });
    return eventData;
  } catch (error) {
    throw new Error(error as string);
  }
};

const getEventByLocation = async (location: string) => {
  try {
    const eventData = await EventModel.findOne({ location });
    return eventData;
  } catch (error) {
    throw new Error(error as string);
  }
};

const createEvent = async (eventInfo: EventType) => {
  try {
    const eventData = new EventModel(eventInfo);
    await eventData?.save();
    return eventData;
  } catch (error) {
    throw new Error(error as string);
  }
};

const updateEvent = async (_id: string, eventInfo: EventType) => {
  try {
    const eventData = await EventModel.findOneAndUpdate(
      { _id },
      { setValue: eventInfo },
      { returnNewDocument: true },
    );

    return eventData;
  } catch (error) {
    throw new Error(error as string);
  }
};

const deleteEvent = async (_id: string) => {
  try {
    const eventData = await EventModel.deleteOne({ _id });
    return eventData;
  } catch (error) {
    throw new Error(error as string);
  }
};
export const EventService = {
  getFirstEvent,
  getAllEvents,
  getEventById,
  getEventBySlug,
  getEventByLocation,
  createEvent,
  updateEvent,
  deleteEvent,
};
