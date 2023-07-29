import express, { Request, Response } from 'express';
import { ImpactService } from './impact.service';
import { validationResult, checkSchema } from 'express-validator';
import { impactValidationSchema } from '../../validationSchema/impactValidationSchema';
import { checkAuth } from '../middleware/auth.middleware';

export const impactRouter = express.Router();

interface RequestParams {
  id: string;
  slug: string;
}

impactRouter.get('/', async (_, res: Response) => {
  try {
    const impact = await ImpactService.getAllImpacts();
    res.status(200).send({ success: true, impact: impact });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

impactRouter.get(
  '/id/:id',
  async (req: Request<RequestParams>, res: Response) => {
    try {
      const { id } = req.params;
      const impact = await ImpactService.getImpactById(id);
      res.status(200).send({ success: true, impact: impact });
    } catch (error) {
      res
        .status(500)
        .json({ success: false, message: 'Internal server error' });
    }
  },
);

impactRouter.get(
  '/slug/:slug',
  async (req: Request<RequestParams>, res: Response) => {
    try {
      const { slug } = req.params;
      const impact = await ImpactService.getImpactBySlug(slug);
      res.status(200).send({ success: true, impact: impact });
    } catch (error) {
      res
        .status(500)
        .json({ success: false, message: 'Internal server error' });
    }
  },
);

impactRouter.post(
  '/create',
  checkAuth,
  checkSchema(impactValidationSchema.createImpactSchema),
  async (req: Request, res: Response) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(422).json({
          errors: errors.array(),
        });
      }
      const impactInfo = req.body;
      const impact = await ImpactService.createImpact(impactInfo);
      res.status(200).send({ success: true, impact: impact });
    } catch (error) {
      res
        .status(500)
        .json({ success: false, message: 'Internal server error' });
    }
  },
);

impactRouter.post(
  '/update/:id',
  checkAuth,
  checkSchema(impactValidationSchema.createImpactSchema),
  async (req: Request, res: Response) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(422).json({
          errors: errors.array(),
        });
      }
      const impactInfo = req.body;
      const { id } = req.params;
      const impact = await ImpactService.updateImpact(id, impactInfo);
      res.status(200).send({ success: true, impact: impact });
    } catch (error) {
      res
        .status(500)
        .json({ success: false, message: 'Internal server error' });
    }
  },
);

impactRouter.post(
  '/delete',
  checkAuth,
  checkSchema(impactValidationSchema.deleteSchema),
  async (req: Request, res: Response) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(422).json({
          errors: errors.array(),
        });
      }
      const { id } = req.body;
      const impact = await ImpactService.deleteImpact(id);
      res.status(200).send({ success: true, impact: impact });
    } catch (error) {
      res
        .status(500)
        .json({ success: false, message: 'Internal server error' });
    }
  },
);
