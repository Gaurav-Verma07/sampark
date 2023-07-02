import express, { Request, Response } from 'express';
import { OrphanageService } from './orphanage.service';
import { OrphanageType } from './orphanage.interface';
import { authenticateToken } from '../middleware/auth.middleware';

export const orphanageRouter = express.Router();

interface RequestParams {
  id: string;
  slug: string;
}

interface RequestBody {
  // id: string;
  orphanageInfo: OrphanageType;
}


orphanageRouter.get('/', async (_, res: Response) => {
  try {
    const orphanage = await OrphanageService.getAllOrphanages();
    res.status(200).send({ success: true, orphanage: orphanage });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

orphanageRouter.get(
  '/id/:id',
  async (req: Request<RequestParams>, res: Response) => {
    try {
      const { id } = req.params;
      const orphanage = await OrphanageService.getOrphanageById(id);
      res.status(200).send({ success: true, orphanage: orphanage });
    } catch (error) {
      res
        .status(500)
        .json({ success: false, message: 'Internal server error' });
    }
  },
);

orphanageRouter.get(
  '/slug/:slug',
  async (req: Request<RequestParams>, res: Response) => {
    try {
      const { slug } = req.params;
      const orphanage = await OrphanageService.getOrphanageBySlug(slug);
      res.status(200).send({ success: true, orphanage: orphanage });
    } catch (error) {
      res
        .status(500)
        .json({ success: false, message: 'Internal server error' });
    }
  },
);

orphanageRouter.post(
  '/create',
  authenticateToken,
  async (req: Request, res: Response) => {
    try {
      const { orphangeInfo } = req.body;
      const orphanage = await OrphanageService.createOrphanage(orphangeInfo);
      res.status(200).send({ success: true, orphanage: orphanage });
    } catch (error) {
      res
        .status(500)
        .json({ success: false, message: 'Internal server error' });
    }
  },
);

orphanageRouter.post(
  '/update/:id',
  authenticateToken,
  async (req: Request, res: Response) => {
    try {
      const { orphanageInfo } = req.body;
      const { id } = req.params;
      const orphanage = await OrphanageService.updateOrphanage(
        id,
        orphanageInfo,
      );
      res.status(200).send({ success: true, orphanage: orphanage });
    } catch (error) {
      res
        .status(500)
        .json({ success: false, message: 'Internal server error' });
    }
  },
);

orphanageRouter.post(
  '/delete',
  authenticateToken,
  async (req: Request, res: Response) => {
    try {
      const { id } = req.body;
      const orphanage = await OrphanageService.deleteOrphanage(id);
      res.status(200).send({ success: true, orphanage: orphanage });
    } catch (error) {
      res
        .status(500)
        .json({ success: false, message: 'Internal server error' });
    }
  },
);
