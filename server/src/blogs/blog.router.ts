import express, { Request, Response } from 'express';
import { BlogService } from './blog.service';
import { BlogType } from './blog.interface';

export const blogRouter = express.Router();

interface RequestParams {
  id: string;
  slug: string;
}

interface RequestBody {
  id: string;
  blogInfo: BlogType;
}

blogRouter.get('/', async (_, res: Response) => {
  try {
    const blog = await BlogService.getAllBlogs();
    res.status(200).send({ success: true, blog: blog });
  } catch (error) {
        res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

blogRouter.get(
  '/id/:id',
  async (req: Request<RequestParams>, res: Response) => {
    try {
      const { id } = req.params;
      const blog = await BlogService.getBlogById(id);
      res.status(200).send({ success: true, blog: blog });
    } catch (error) {
         res.status(500).json({ success: false, message: 'Internal server error' });
    }
  },
);

blogRouter.get(
  '/slug/:slug',
  async (req: Request<RequestParams>, res: Response) => {
    try {
      const { slug } = req.params;
      const blog = await BlogService.getBlogBySlug(slug);
      res.status(200).send({ success: true, blog: blog });
    } catch (error) {
          res.status(500).json({ success: false, message: 'Internal server error' });
    }
  },
);

blogRouter.post('/create', async (req: Request<RequestBody>, res: Response) => {
  try {
    const {blogInfo} = req.body;
    const blog = await BlogService.createBlog(blogInfo);
    res.status(200).send({ success: true, blog: blog });
  } catch (error) {
        res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

blogRouter.post(
  '/update/:id',
  async (req: Request<RequestParams, RequestBody>, res: Response) => {
    try {
      const {blogInfo} = req.body;
      const {id} = req.params;
      const blog = await BlogService.updateBlog(id, blogInfo);
      res.status(200).send({ success: true, blog: blog });
    } catch (error) {
          res.status(500).json({ success: false, message: 'Internal server error' });
    }
  },
);

blogRouter.post('/delete', async (req: Request<RequestBody>, res: Response) => {
  try {
    const { id } = req.body;
    const blog = await BlogService.deleteBlog(id);
    res.status(200).send({ success: true, blog: blog });
  } catch (error) {
        res.status(500).json({ success: false, message: 'Internal server error' });
  }
});
