'use client';
import { Button, Container, createStyles, SimpleGrid } from '@mantine/core';
import { useRouter } from 'next/navigation';
import HomeHeader from '../../src/components/HomeHeader/HomeHeader';
import './ngo.css';
import { NgoCard } from '../../src/components/Ngos/NgosCard';
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

interface NgosType {
  id: number;
  name: string;
  content: string;
  author: string;
  image: string;
}

const getNgoData = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT as string}/api/ngo`,
    { next: { revalidate: 10 } },
  );
  const response = await res.json();
  return response.ngo;
};
const NgosPage = async () => {
  const router = useRouter();
  const { classes } = useStyles();

  const allNgoData: NgosType[] = await getNgoData();

  return (
    <div style={{ margin: '0 3%' }}>
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
          {allNgoData.map((data: NgosType, index: number) => (
            <NgoCard
            slug={''}
            address={''}
                  description={''}
                  index={index}
                  {...data}
                  key={index}
            />
          ))}
        </SimpleGrid>
      </div>
    </div>
  );
};

export default NgosPage;

