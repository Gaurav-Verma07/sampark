'use client';
import {
  Button,
  Container,
  createStyles,
  Header,
  Image,
  SimpleGrid,
  Text,
} from '@mantine/core';
import { useNavigate } from 'react-router-dom';
// import SamparkLogo from '../../assets/Images/samparklogotransparent.png';
import { data } from '../../src/components/Impact/impactContent';
import './impact.css';
import { ImpactCard } from '../../src/components/Impact/ImpactCard';
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

function AllImpacts() {
  const navigate = useNavigate();
  const { classes } = useStyles();
  return (
    <div>
      <Header height={80} mb={50}>
        <Container className={classes.header}>
          {/* <Image src={SamparkLogo} height={100} width={100} /> */}
          <Text
            style={{ fontWeight: 'bold', fontSize: 34, fontFamily: 'cursive' }}
          >
            Impact We Created!
          </Text>
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
        </Container>
      </Header>

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
          <ImpactCard
            data={item.impactData}
            image={item.image as string}
            key={index}
            index={index}
          />
        ))}
      </SimpleGrid>
    </div>
  );
}

export default AllImpacts;
