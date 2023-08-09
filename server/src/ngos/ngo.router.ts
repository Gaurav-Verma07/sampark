import * as express from 'express';
import { Request, Response } from 'express';
import { NgoService } from './ngo.service';
import { validationResult, checkSchema } from 'express-validator';
import { ngoValidationSchema } from '../../validationSchema/ngoValidationSchema';
import { checkAuth } from '../middleware/auth.middleware';

export const ngoRouter = express.Router();
interface RequestParams {
  id: string;
  slug: string;
}

ngoRouter.get('/first', async (_, res: Response) => {
  try {
    const ngo = await NgoService.getFirstNgo();
    res.status(200).send({ success: true, ngo: ngo });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

ngoRouter.get('/', async (_, res: Response) => {
  try {
    const ngo = await NgoService.getAllNgos();
    res.status(200).send({ success: true, ngo: ngo });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

ngoRouter.get('/id/:id', async (req: Request<RequestParams>, res: Response) => {
  try {
    const { id } = req.params;
    const ngo = await NgoService.getNgoById(id);
    res.status(200).send({ success: true, ngo: ngo });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

ngoRouter.get(
  '/slug/:slug',
  async (req: Request<RequestParams>, res: Response) => {
    try {
      const { slug } = req.params;
      const ngo = await NgoService.getNgoBySlug(slug);
      res.status(200).send({ success: true, ngo: ngo });
    } catch (error) {
      res
        .status(500)
        .json({ success: false, message: 'Internal server error' });
    }
  },
);

ngoRouter.post(
  '/create',
  // checkAuth,
  checkSchema(ngoValidationSchema.createNgoSchema),
  async (req: Request, res: Response) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(422).json({
          errors: errors.array(),
        });
      }
      const ngoInfo = req.body;
      const ngo = await NgoService.createNgo(ngoInfo);
      res.status(200).send({ success: true, ngo: ngo });
    } catch (error) {
      res
        .status(500)
        .json({ success: false, message: 'Internal server error' });
    }
  },
);

ngoRouter.post(
  '/update/:id',
  checkAuth,
  checkSchema(ngoValidationSchema.createNgoSchema),
  async (req: Request, res: Response) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(422).json({
          errors: errors.array(),
        });
      }
      const ngoInfo: NgoType = {
        name: req.body.name,
        location: req.body.location,
        contactInformation: req.body.contactInformation,
        vision: req.body.vision,
        focusAreas: req.body.focusAreas,
        projects: req.body.projects,
        teamMembers: req.body.teamMembers,
        donations: req.body.donations,
        volunteering: req.body.volunteering,
        logo: req.body.logo,
        testimonials: req.body.testimonials,
        socialMediaLinks: req.body.socialMediaLinks,
        license: req.body.license,
        funding: req.body.funding,
      };
      const { id } = req.params;
      const ngo = await NgoService.updateNgo(id, ngoInfo);
      res.status(200).send({ success: true, ngo: ngo });
    } catch (error) {
      res
        .status(500)
        .json({ success: false, message: 'Internal server error' });
    }
  },
);

ngoRouter.post(
  '/delete',
  checkAuth,
  checkSchema(ngoValidationSchema.deleteSchema),
  async (req: Request, res: Response) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(422).json({
          errors: errors.array(),
        });
      }
      const { id } = req.body;
      const ngo = await NgoService.deleteNgo(id);
      res.status(200).send({ success: true, ngo: ngo });
    } catch (error) {
      res
        .status(500)
        .json({ success: false, message: 'Internal server error' });
    }
  },
);
