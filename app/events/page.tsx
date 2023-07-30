'use client';
import { Button, Container, createStyles, SimpleGrid } from '@mantine/core';
import { useRouter } from 'next/navigation';
import HomeHeader from '../../src/components/HomeHeader/HomeHeader';
import { data } from '../../src/components/Events/eventContent';
import './events.css';
import { EventCard } from '../../src/components/Events/EventsCard';
import React from 'react';
import { NextPage } from 'next';

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

interface EventsType {
  id: number;
  name: string;
  content: string;
  author: string;
  image: string;
}

const EventsPage = () => {
  const router = useRouter();
  const { classes } = useStyles();

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
          {data.map((item, index) => (
            <EventCard
              data={item.blogData}
              image={item.image as string}
              key={index}
              index={index}
            />
          ))}
        </SimpleGrid>
      </div>
    </div>
  );
};

export default EventsPage;
