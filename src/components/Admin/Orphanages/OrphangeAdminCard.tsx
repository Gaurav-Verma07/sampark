import { createStyles, Card, Image, Group, Text, Avatar } from '@mantine/core';
import React from 'react';

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.white,
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },
}));

interface OrphanageCardType {
  name: string;
  address: string;
  description: string;
  image: string;
  index: number;
}

export default function OrphanageAdminCard({
  name,
  address,
  description,
  image,
  index,
}: OrphanageCardType) {
  const { classes } = useStyles();

  return (
    <Card
      withBorder
      radius="md"
      className={classes.card}
      style={{ width: '300px' }} 
    >
      <Card.Section mb="sm">
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            margin: '5% 0',

          }}
        >
          <Image
            src={'/assets/Images/samparklogotransparent.png'}
            alt={'name'}
            height={150}
            width={150}
            style={{ borderRadius: '50%'}}
          />
        </div>
      </Card.Section>

      <Text
        fw={700}
        className={classes.title}
        mt="xs"
        style={{ textAlign: 'center' }}
      >
        {name}
      </Text>

      <Group mt="lg" style={{ justifyContent: 'center' }}>
        <Avatar src={'author.image'} radius="sm" />
        <Text fw={500}>{'Gaurav'}</Text>
       
      </Group>
       <div style={{ textAlign:"center"}}>
          <Text fz="xs" c="dimmed">
            {description}
          </Text>
        </div>
    </Card>
  );
}
