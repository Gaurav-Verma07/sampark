import * as express from 'express';
import { Request, Response } from 'express';
import { EventService } from './event.service';
import { validationResult, checkSchema } from 'express-validator';
import { eventValidationSchema } from '../../validationSchema/eventValidationSchema';
import { checkAuth } from '../middleware/auth.middleware';

export const eventRouter = express.Router();

interface RequestParams {
  id: string;
  slug: string;
}

eventRouter.get('/first', async (_, res: Response) => {
  try {
    const event = await EventService.getFirstEvent();
    res.status(200).send({ success: true, event: event });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

eventRouter.get('/', async (_, res: Response) => {
  try {
    const event = await EventService.getAllEvents();
    res.status(200).send({ success: true, event: event });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

eventRouter.get(
  '/id/:id',
  async (req: Request<RequestParams>, res: Response) => {
    try {
      const { id } = req.params;
      const event = await EventService.getEventById(id);
      res.status(200).send({ success: true, event: event });
    } catch (error) {
      res
        .status(500)
        .json({ success: false, message: 'Internal server error' });
    }
  },
);

eventRouter.get(
  '/slug/:slug',
  async (req: Request<RequestParams>, res: Response) => {
    try {
      const { slug } = req.params;
      const event = await EventService.getEventBySlug(slug);
      res.status(200).send({ success: true, event: event });
    } catch (error) {
      res
        .status(500)
        .json({ success: false, message: 'Internal server error' });
    }
  },
);

eventRouter.post(
  '/create',
  // checkAuth,
  checkSchema(eventValidationSchema.createEventSchema),
  async (req: Request, res: Response) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(422).json({
          errors: errors.array(),
        });
      }
      console.log(JSON.parse(req.body.eventType));

      // const eventInfo = req.body;
      const eventInfo = {
        eventName: req.body.eventName,
        eventType: req.body.eventType,
        eventDate: new Date(req.body.eventDate),
        eventLocation: req.body.eventLocation,
        description: req.body.description,
        organizingOrganization: req.body.organizingOrganization,
        targetAudience: req.body.targetAudience,
        activities: JSON.parse(req.body.activities), // name, description
        volunteering: JSON.parse(req.body.volunteering), // isVolunteer: Boolean, contact: String
        donations: JSON.parse(req.body.donations), // isDonations: Boolean, contact: String
        logo: req.body.logo,
        contactInformation: JSON.parse(req.body.contactInformation), // phone, website, email
        socialMediaLinks: JSON.parse(req.body.socialMediaLinks), // twitter, linkedIn
        registrationLink: JSON.parse(req.body.registrationLink), // isregistration: Boolean, link: String
      };
      const event = await EventService.createEvent(eventInfo);
      res.status(200).send({ success: true, event: event });
    } catch (error) {
      console.log('error: ', error);
      res
        .status(500)
        .json({ success: false, message: 'Internal server error' });
    }
  },
);

eventRouter.post(
  '/update/:id',
  checkAuth,
  checkSchema(eventValidationSchema.createEventSchema),
  async (req: Request, res: Response) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(422).json({
          errors: errors.array(),
        });
      }
      const eventInfo = req.body;
      const { id } = req.params;
      const event = await EventService.updateEvent(id, eventInfo);
      res.status(200).send({ success: true, event: event });
    } catch (error) {
      res
        .status(500)
        .json({ success: false, message: 'Internal server error' });
    }
  },
);

eventRouter.post(
  '/delete',
  checkAuth,
  checkSchema(eventValidationSchema.deleteSchema),
  async (req: Request, res: Response) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(422).json({
          errors: errors.array(),
        });
      }
      const { id } = req.body;
      const event = await EventService.deleteEvent(id);
      res.status(200).send({ success: true, event: event });
    } catch (error) {
      res
        .status(500)
        .json({ success: false, message: 'Internal server error' });
    }
  },
);
