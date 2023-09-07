'use client';
import { Button, Container, createStyles, SimpleGrid } from '@mantine/core';
import { useRouter } from 'next/navigation';
import HomeHeader from '../../src/components/HomeHeader/HomeHeader';
import './blogs.css';
import { BlogCard } from '../../src/components/Blogs/BlogCard';
import { useState } from 'react';
import React from 'react';

const useStyles = createStyles((theme) => ({
  body: {
    background: 'white',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },
  blog: {
    marginTop: '2rem',
    justifyItems: 'center',
  },
  back: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '4%',
    ...theme.fn.hover({
      transition: 'transform 150ms ease, box-shadow 150ms ease',
      transform: 'scale(1.01)',
      boxShadow: theme.shadows.md,
    }),
  },
}));

interface SavedBlogType {
  id: number;
  data: string;
  image: string;
}

interface BlogType {
  slug: number;
  name: string;
  content: string;
  image: string;
  author: string;
}

const getBlogData = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT as string}/api/blog`
  );
  const response = await res.json();
  return response.blog;
};

const BlogsPage = async() => {
  const router = useRouter();
  const { classes } = useStyles();
   const [savedBlogs, setSavedBlogs] = useState<SavedBlogType[]>([]);
     const allBlogData: BlogType[] = await getBlogData();

   const handleAddSaveBlog = (data: SavedBlogType) => {
     savedBlogs.push(data);
     localStorage.setItem('sampark-saved-items', JSON.stringify(savedBlogs));
     setSavedBlogs([...savedBlogs]);
   };

   const handleDeleteSavedBlog = (id: number) => {
     const savedBlogList = localStorage.getItem('sampark-saved-items');

     if (savedBlogList) {
       const parsedBlogsData = JSON.parse(savedBlogList);
       const updatedBlogsData = parsedBlogsData.filter(
         (item: { id: number }) => item.id !== id,
       );
       localStorage.setItem(
         'sampark-saved-items',
         JSON.stringify(updatedBlogsData),
       );
       setSavedBlogs(updatedBlogsData);
     }
   };
  return (
    <div>
      <Container className={classes.header}>
        <HomeHeader />
      </Container>
      <div style={{ marginTop: '10%' }}>
        <Button
          variant="outline"
          color="teal"
          mt={10}
          className={classes.back}
          onClick={() => {
            router.push('/');
          }}
        >
          Go Back
        </Button>
        <SimpleGrid
          className={classes.blog}
          cols={3}
          breakpoints={[
            { maxWidth: 'sm', cols: 1 },
            { maxWidth: 'md', cols: 2 },
          ]}
        >
          {' '}
          {allBlogData.map((item:BlogType, index:number) => (
            <BlogCard
            {...item}
            image={item.image as string}
            key={index}
            index={index}
            handleAddSaveBlog={handleAddSaveBlog}
            handleDeleteSavedBlog={handleDeleteSavedBlog}            />
          ))}
        </SimpleGrid>
      </div>
    </div>
  );
};

export default BlogsPage;
