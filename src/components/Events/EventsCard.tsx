import { createStyles, Card, Image, Group, Text, Avatar } from '@mantine/core';
import React from 'react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.white,
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },
}));

interface EventCardType {
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

export function EventCard({
  slug,
  name,
  organizer,
  address,
  description,
  date,
  duration,
  image,
  index,
}: EventCardType) {
  const router = useRouter();
  const { classes } = useStyles();

  return (
    <Card
      withBorder
      radius="md"
      className={classes.card}
      onClick={() => {
        router.push(`/events/${index}`);
      }}
    >
      <Card.Section mb="sm">
        <Image src={image as string} alt="image" height={180} />
      </Card.Section>

      <Text fw={700} className={classes.title} mt="xs">
        {name}
      </Text>

      <Group mt="lg">
        <Avatar src={'author.image'} radius="sm" />
        <Text fw={500}>{'Gaurav'}</Text>
        <div>
          <Text fz="xs" c="dimmed">
            {description}
          </Text>
        </div>
      </Group>
    </Card>
  );
}
