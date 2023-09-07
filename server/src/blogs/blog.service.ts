import { BlogModel } from '../../schema/blogs/BlogsSchema';
import { BlogType } from './blog.interface';

const getFirstBlog = async () => {
  try {
    const blogData = await BlogModel.findOne();
    return blogData;
  } catch (error) {
    throw new Error(error as string);
  }
};

const getAllBlogs = async () => {
  try {
    const blogData = await BlogModel.find({});

    return blogData;
  } catch (error) {
    throw new Error(error as string);
  }
};

const getBlogById = async (_id: string) => {
  try {
    const blogData = await BlogModel.findOne({ _id });

    return blogData;
  } catch (error) {
    throw new Error(error as string);
  }
};

const getBlogBySlug = async (slug: string) => {
  try {
    const blogData = await BlogModel.findOne({ slug });

    return blogData;
  } catch (error) {
    throw new Error(error as string);
  }
};

const getBlogByAuthor = async (author: string) => {
  try {
    const blogData = await BlogModel.findOne({ author });

    return blogData;
  } catch (error) {
    throw new Error(error as string);
  }
};

const createBlog = async (blogInfo: BlogType) => {
  try {
    const blogData = new BlogModel(blogInfo);
    await blogData?.save();

    return blogData;
  } catch (error) {
    throw new Error(error as string);
  }
};

const updateBlog = async (_id: string, blogInfo: BlogType) => {
  try {
    const blogData = await BlogModel.findOneAndUpdate(
      { _id },
      { setValue: blogInfo },
      { returnNewDocument: true },
    );

    return blogData;
  } catch (error) {
    throw new Error(error as string);
  }
};

const deleteBlog = async (_id: string) => {
  try {
    // const blogData = await BlogModel.deleteOne({ _id: _id });
    // return blogData;
    return true;
  } catch (error) {
    throw new Error(error as string);
  }
};
export const BlogService = {
  getFirstBlog,
  getAllBlogs,
  getBlogById,
  getBlogBySlug,
  getBlogByAuthor,
  createBlog,
  updateBlog,
  deleteBlog,
};
