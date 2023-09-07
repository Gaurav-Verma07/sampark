import { createStyles, Card, Image, Group, Text, Avatar } from '@mantine/core';
import React from 'react';
import { useRouter } from 'next/navigation';

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.white,
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },
}));

interface NgosType {
  slug: string;
  name: string;
  address: string;
  description: string;
  image: string;
  index: number;
}

export function NgoCard({ slug, name, address, description, image, index }: NgosType) {
  const router = useRouter();
  const { classes, theme } = useStyles();

  return (
    <Card
      withBorder
      radius="md"
      className={classes.card}
      style={{ width: '300px' }}
      onClick={() => {
        router.push(`/ngos/${slug}`);
      }}
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
            style={{ borderRadius: '50%' }}
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
      <div style={{ textAlign: 'center' }}>
        <Text fz="xs" c="dimmed">
          {description}
        </Text>
      </div>
    </Card>
  );
}
