import {
  Button,
  Container,
  createStyles,
  Header,
  Image,
  SimpleGrid,
} from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import SamparkLogo from '../../assets/Images/samparklogotransparent.png';
import { data } from './blogContent';
import './blogs.css';
import { BlogCard } from './BlogCard';
import { useState, useEffect } from 'react';

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

interface bookmarkType {
  id: number;
  data: string;
}

function AllBlogs() {
  const navigate = useNavigate();
  const { classes } = useStyles();
  const [bookmarks, setBookmarks] = useState<bookmarkType[]>([]);

  const handleAddBookMark = (data: bookmarkType) => {
    bookmarks.push(data);
    localStorage.setItem('sampark-bookmarks', JSON.stringify(bookmarks));
    setBookmarks([...bookmarks]);

  };

  const handleDeleteBookMark = (id: number) => {
    const savedBookmarks = localStorage.getItem('sampark-bookmarks');

    if (savedBookmarks) {
      const parsedBookmarks = JSON.parse(savedBookmarks);
      const updatedBookmarks = parsedBookmarks.filter(
        (item: { id: number }) => item.id !== id,
      );
      console.log(updatedBookmarks);
      localStorage.setItem(
        'sampark-bookmarks',
        JSON.stringify(updatedBookmarks),
      );
    }

  };
  return (
    <div>
      <Header height={80} mb={50}>
        <Container className={classes.header}>
          <Image src={SamparkLogo} height={100} width={100} />
        </Container>
      </Header>
      <Button
        my={20}
        variant="outline"
        color="teal"
        className={classes.back}
        onClick={() => {
          navigate('/');
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
            image={item.image}
            key={index}
            index={index}
            handleAddBookMark={handleAddBookMark}
            handleDeleteBookMark={handleDeleteBookMark}
          />
        ))}
      </SimpleGrid>
    </div>
  );
}

export default AllBlogs;
