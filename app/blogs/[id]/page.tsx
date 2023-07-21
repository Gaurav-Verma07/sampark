'use client';
import {
  AspectRatio,
  Button,
  Card,
  Container,
  createStyles,
  Header,
  // Image,
  Paper,
} from '@mantine/core';
import Image from 'next/image';
import { IconArrowLeft } from '@tabler/icons';
import { useRouter, useParams } from 'next/navigation';
// import { useNavigate, useParams } from 'react-router-dom';
// import SamparkLogo from '../../assets/Images/samparklogotransparent.png';
import { data } from '../../../src/components/Blogs/blogContent';
import '../blogs.css';
import React from 'react';

const useStyles = createStyles((theme) => ({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },
  blog: {
    textAlign: 'left',
    width: '50%',
  },
  back: {
    display: 'flex',
    alignItems: 'center',
  },
  image: {
    border: '1px solid #a3a3a2',
    borderRadius: '10px',
    margin: ' 20px 0',
  },
}));

interface SingleBlogType {
  image: string;
  blogData: string;
}
const Blogs = () => {
  const {id}: any = useParams();
  const { classes } = useStyles();
  const router = useRouter();
  const blogData = data[id];


  return (
    <>
      <Header height={100} mb={50}>
        <Container className={classes.header}>
          <Image
            src="/assets/Images/samparklogotransparent.png"
            alt="Sampark-logo"
            height={10}
            width={20}
          />
        </Container>
      </Header>

      <Card className={classes.blog} mx="auto">
        <Button
          my={20}
          className={classes.back}
          onClick={() => {
            router.push('/');
          }}
        >
          {' '}
          <IconArrowLeft /> Go Back
        </Button>
        <Paper shadow={'md'} my={20}>
          <AspectRatio
            ratio={16 / 9}
            // maw={300}
            mx="auto"
          >
            <Image
              src={blogData.image as string}
              alt="image"
              height={100}
              width={200}
            />
          </AspectRatio>
        </Paper>
        <div dangerouslySetInnerHTML={{ __html: blogData.blogData }}></div>
      </Card>
    </>
  );
};

export default Blogs;
