'use client';
import { Button, Container, createStyles, SimpleGrid } from '@mantine/core';
import { useRouter } from 'next/navigation';
import HomeHeader from '../../src/components/HomeHeader/HomeHeader';
import { data } from '../../src/components/Events/eventContent';
import './events.css';
import { EventCard } from '../../src/components/Events/EventsCard';
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

interface EventsType {
  slug: string;
  name: string;
  organizer: string;
  address: string;
  description: string;
  date: string;
  image: string;
  duration: number;
  index: number;
}

const getEventData = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT as string}/api/event`,
    { next: { revalidate: 10 } },
  );
  const response = await res.json();
  return response.event;
};
const EventsPage = async () => {
  const router = useRouter();
  const { classes } = useStyles();

  const allEventData: EventsType[] = await getEventData();

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
          {allEventData.map((item, index) => (
            <EventCard
            slug={''} name={''} organizer={''} address={''} description={''} date={''} duration={0} {...data}
            image={item.image as string}
            key={index}
            index={index}            />
          ))}
        </SimpleGrid>
      </div>
    </div>
  );
};

export default EventsPage;
