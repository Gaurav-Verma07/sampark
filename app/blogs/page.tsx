import {
  Button,
  Container,
  createStyles,
  Header,
  // Image,
  SimpleGrid,
} from '@mantine/core';
import { useRouter } from 'next/navigation';
// import SamparkLogo from '../../assets/Images/samparklogotransparent.png';
import { data } from '../../src/components/Blogs/blogContent';
import './blogs.css';
import { BlogCard } from '../../src/components/Blogs/BlogCard';
import { useState } from 'react';
import React from 'react';

const useStyles = createStyles((theme) => ({
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

function AllBlogs() {
  const router = useRouter();
  const { classes } = useStyles();
  const [savedBlogs, setSavedBlogs] = useState<SavedBlogType[]>([]);

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
      <Header height={80} mb={50}>
        {/* <Container className={classes.header}>
           <Image src={SamparkLogo} height={100} width={100} /> 
        </Container> */}
      </Header>
      <Button
        my={20}
        variant="outline"
        color="teal"
        //className={classes.back}
        onClick={() => {
          router.push('/');
        }}
      >
        {' '}
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
        {data.map((item, index) => (
          <BlogCard
            data={item.blogData}
            image={item.image as string}
            key={index}
            index={index}
            handleAddSaveBlog={handleAddSaveBlog}
            handleDeleteSavedBlog={handleDeleteSavedBlog}
          />
        ))}
      </SimpleGrid>
    </div>
  );
}

export default AllBlogs;
