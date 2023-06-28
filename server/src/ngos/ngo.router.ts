import express, { Request, Response } from 'express';
import { NgoService } from './ngo.service';
import { NgoType } from './ngo.interface';

export const ngoRouter = express.Router();
interface RequestParams {
  id: string;
  slug: string;
}

interface RequestBody {
  ngoInfo: NgoType;
}

ngoRouter.get('/', async (_, res: Response) => {
  try {
    const ngo = await NgoService.getAllNgos();
    res.status(200).send({ success: true, ngo: ngo });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

ngoRouter.get(
  '/id/:id',
  async (req: Request<RequestParams, RequestBody>, res: Response) => {
    try {
      const { id } = req.params;
      const ngo = await NgoService.getNgoById(id);
      res.status(200).send({ success: true, ngo: ngo });
    } catch (error) {
      res
        .status(500)
        .json({ success: false, message: 'Internal server error' });
    }
  },
);

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

ngoRouter.post('/create', async (req: Request<RequestBody>, res: Response) => {
  try {
    const { ngoInfo } = req.body;
    const ngo = await NgoService.createNgo(ngoInfo);
    res.status(200).send({ success: true, ngo: ngo });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

ngoRouter.post(
  '/update/:id',
  async (req: Request<RequestParams, RequestBody>, res: Response) => {
    try {
      const { ngoInfo } = req.body;
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

ngoRouter.post('/delete', async (req: Request<RequestBody>, res: Response) => {
  try {
    const { id } = req.body;
    const ngo = await NgoService.deleteNgo(id);
    res.status(200).send({ success: true, ngo: ngo });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});
