import * as express from 'express';
import { Request, Response } from 'express';
import { BlogService } from './blog.service';
import { validationResult, checkSchema } from 'express-validator';
import { blogValidationSchema } from '../../validationSchema/blogValidationSchema';
import { checkAuth } from '../middleware/auth.middleware';

export const blogRouter = express.Router();

interface RequestParams {
  id: string;
  slug: string;
}

blogRouter.get('/first-blog', async (_, res: Response) => {
  try {
    const blog = await BlogService.getFirstBlog();
    res.status(200).send({ success: true, blog: blog });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

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
      res
        .status(500)
        .json({ success: false, message: 'Internal server error' });
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
      res
        .status(500)
        .json({ success: false, message: 'Internal server error' });
    }
  },
);

blogRouter.post(
  '/create',
  // checkAuth,
  // checkSchema(blogValidationSchema.createBlogSchema),
  async (req: Request, res: Response) => {
    try {
      // const errors = validationResult(req);

      // if (!errors.isEmpty()) {
      //   return res.status(422).json({
      //     errors: errors.array(),
      //   });
      // }
      const blogInfo = req.body;
      const blog = await BlogService.createBlog(blogInfo);
      res.status(200).send({ success: true, blog: blog });
    } catch (error) {
      res
        .status(500)
        .json({ success: false, message: 'Internal server error' });
    }
  },
);

blogRouter.post(
  '/update/:id',
  checkAuth,
  checkSchema(blogValidationSchema.createBlogSchema),
  async (req: Request, res: Response) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(422).json({
          errors: errors.array(),
        });
      }
      const blogInfo = req.body;
      const { id } = req.params;
      const blog = await BlogService.updateBlog(id, blogInfo);
      res.status(200).send({ success: true, blog: blog });
    } catch (error) {
      res
        .status(500)
        .json({ success: false, message: 'Internal server error' });
    }
  },
);

blogRouter.post(
  '/delete',
  checkAuth,
  checkSchema(blogValidationSchema.deleteSchema),
  async (req: Request, res: Response) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(422).json({
          errors: errors.array(),
        });
      }
      const { id } = req.body;
      const blog = await BlogService.deleteBlog(id);
      res.status(200).send({ success: true, blog: blog });
    } catch (error) {
      res
        .status(500)
        .json({ success: false, message: 'Internal server error' });
    }
  },
);
