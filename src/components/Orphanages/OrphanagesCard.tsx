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

interface OrphanageCardType {
  data: string;
  image: string;
  index: number;
}

export function OrphanageCard({ data, image, index }: OrphanageCardType) {
  const router = useRouter();
  const { classes, theme } = useStyles();
  const [orphanageTitle, setOrphanageTitle] = useState<string>('');
  const [orphanageDescription, setOrphanageDescription] = useState<string>('');

  useEffect(() => {
    const element = document.createElement('div');
    element.innerHTML = data;

    const h1Tag = element.querySelector('div.blog__main h1') as HTMLElement;
    const extractedTitle = h1Tag?.innerText ?? '';
    const text = element.querySelector('div.blog__main p') as HTMLElement;
    const description = text?.innerText ?? '';
    setOrphanageDescription(description);
    setOrphanageTitle(extractedTitle);
  }, []);

  return (
    <Card
      withBorder
      radius="md"
      className={classes.card}
      onClick={() => {
        router.push(`/orphanages/${index}`);
      }}
    >
      <Card.Section mb="sm">
        <div
          style={{ display: 'flex', justifyContent: 'center', margin: '5% 0' }}
        >
          <Image
            src={image}
            alt={'name'}
            height={150}
            width={150}
            style={{ borderRadius: '50%', border: '1px solid grey' }}
          />
        </div>
      </Card.Section>

      <Text
        fw={700}
        className={classes.title}
        mt="xs"
        style={{ textAlign: 'center' }}
      >
        {orphanageTitle}
      </Text>

      <Group mt="lg" style={{ justifyContent: 'center' }}>
        <Avatar src={'author.image'} radius="sm" />
        <Text fw={500}>{'Gaurav'}</Text>
        <div>
          <Text fz="xs" c="dimmed">
            {orphanageDescription}
          </Text>
        </div>
      </Group>
    </Card>
  );
}
