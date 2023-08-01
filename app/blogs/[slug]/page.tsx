'use client';
import {
  AspectRatio,
  Button,
  Card,
  Container,
  createStyles,
  Header,
  Paper,
} from '@mantine/core';
import Image from 'next/image';
import { IconArrowLeft } from '@tabler/icons';
import { useRouter, useParams } from 'next/navigation';
import { data } from '../../../src/components/Blogs/blogContent';
import '../blogs.css';
import React from 'react';

const useStyles = createStyles(() => ({
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
  name: string;
  slug: string;
  content: string;
  author: string;
  date: Date;
  image: string;
}
interface ParamsType {
  slug: string;
}
const getBlogData = async (slug: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT as string}/api/blog/slug/${slug}`,
    { next: { revalidate: 30 } },
  );
  const response = await res.json();
  return response.blog;
};

const Blogs = async ({ params }: { params: ParamsType }) => {
  const { classes } = useStyles();
  const router = useRouter();
  const blogData: SingleBlogType = await getBlogData(params.slug);

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
        <div>{blogData.content}</div>
      </Card>
    </>
  );
};

export default Blogs;
