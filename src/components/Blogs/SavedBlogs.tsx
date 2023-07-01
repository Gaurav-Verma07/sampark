import { useState, useEffect } from 'react';
import { Box, Paper, SimpleGrid, Title } from '@mantine/core';
import { BlogCard } from './BlogCard';

interface savedBlogType {
  id: number;
  data: string;
  image: string;
}

const Blogs = () => {
  const [savedBlogData, setSavedBlogData] = useState([]);

  useEffect(() => {
    const savedBlogList = localStorage.getItem('sampark-saved-items');
    if (savedBlogList) {
      setSavedBlogData(JSON.parse(savedBlogList));
    }
  }, []);
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
      setSavedBlogData(updatedBlogsData);
    }
  };

  return (
    <>
      <Paper m={20} px={70} mb={70} pt={20}>
        <Box>
          <Title
            order={3}
            py={20}
            tt="capitalize"
            weight="400"
            color="teal"
            align="center"
            style={{ cursor: 'pointer', marginBottom: '2%' }}
          >
            {savedBlogData.length > 0 ? 'Your Saved Blogs' : 'No Saved Blogs'}
          </Title>
        </Box>
        <SimpleGrid cols={3} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
          {savedBlogData.map((blog: savedBlogType, index: number) => (
            <BlogCard
              data={blog.data}
              image={blog.image}
              key={index}
              index={blog.id}
              handleDeleteSavedBlog={handleDeleteSavedBlog}
            />
          ))}
        </SimpleGrid>
      </Paper>
    </>
  );
};

export default Blogs;
