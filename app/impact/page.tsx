'use client';
import {
  Button,
  Container,
  createStyles,
  SimpleGrid,
  Text,
} from '@mantine/core';

// import Image from 'next/image';

import { useRouter } from 'next/navigation';
import { data } from '../../src/components/Impact/impactContent';
import './impact.css';
import { ImpactCard } from '../../src/components/Impact/ImpactCard';
import React from 'react';
import { NextPage } from 'next';
import HomeHeader from '../../src/components/HomeHeader/HomeHeader';

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
interface ImapctsType {
  image: string;
  impactData: string;
}
const ImapctsPage = () => {
  const router = useRouter();
  const { classes } = useStyles();

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
          {data.map((item: ImapctsType, index: number) => (
            <ImpactCard
              data={item.impactData}
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

export default ImapctsPage;
