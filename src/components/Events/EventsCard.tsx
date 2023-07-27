import {
  createStyles,
  Card,
  Image,
  Group,
  Text,
  Avatar,
} from '@mantine/core';
import React from 'react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.white,
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },

}));

interface EventCardType {
  data: string;
  image: string;
  index: number;
}

export function EventCard({ data, image, index }: EventCardType) {
  const router = useRouter();
  const { classes, theme } = useStyles();
  const [eventTitle, setEventTitle] = useState<string>('');
  const [eventDescription, setEventDescription] = useState<string>('')

      useEffect(() => {
        const element = document.createElement('div');
        element.innerHTML = data;

        const h1Tag = element.querySelector('div.blog__main h1') as HTMLElement;
        const extractedTitle = h1Tag?.innerText ?? '';
        const text = element.querySelector('div.blog__main p') as HTMLElement
        const description = text?.innerText?? ''
        setEventDescription(description)
        setEventTitle(extractedTitle);
      }, []);

  return (
    <Card withBorder radius="md" className={classes.card}  onClick={() => {
          router.push(`/events/${index}`);
        }}>
      <Card.Section mb="sm">
        <Image src={image} alt="image" height={180} />
      </Card.Section>

      <Text fw={700} className={classes.title} mt="xs">
        {eventTitle}
      </Text>

      <Group mt="lg">
        <Avatar src={'author.image'} radius="sm" />
         <Text fw={500}>{'Gaurav'}</Text>
        <div>         
          <Text fz="xs" c="dimmed">
            {eventDescription}
          </Text>
        </div>
      </Group>
    </Card>
  );
}


