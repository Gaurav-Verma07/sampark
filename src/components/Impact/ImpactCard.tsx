import { useState, useEffect } from 'react';
import { Card, Text, createStyles, AspectRatio } from '@mantine/core';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const useStyles = createStyles((theme) => ({
  card: {
    position: 'relative',
    width: '80%',
    // margin: '1%',
    cursor: 'pointer',
    ...theme.fn.hover({
      transition: 'transform 150ms ease, box-shadow 150ms ease',
      transform: 'scale(1.01)',
      boxShadow: theme.shadows.md,
    }),
  },
  innerCard: {
    margin: '3%',
  },
  rating: {
    position: 'absolute',
    top: theme.spacing.xs,
    right: ' 0.7rem',
    pointerEvents: 'none',
  },

  title: {
    display: 'block',
    marginTop: theme.spacing.md,
    marginBottom: '0.3rem',
  },

  action: {
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[5]
          : theme.colors.gray[1],
    }),
  },

  footer: {
    marginTop: theme.spacing.md,
  },
}));

interface ImpactType {
  image: string;
  index: number;
  data: string;
}

export function ImpactCard({ image, index, data }: ImpactType) {
  const router = useRouter();
  const { classes, cx } = useStyles();
  const linkProps = {
    target: '_blank',
    rel: 'noopener noreferrer',
  };
  const [impactTitle, setImpactTitle] = useState<string>('');

  useEffect(() => {
    const element = document.createElement('div');
    element.innerHTML = data;

    const h1Tag = element.querySelector('div.blog__main h1') as HTMLElement;
    const extractedTitle = h1Tag?.innerText ?? '';
    setImpactTitle(extractedTitle);
  }, []);

  return (
    <Card
      shadow="sm"
      p="md"
      radius="md"
      className={classes.card}
      id="impact"
      onClick={() => {
        router.push(`/impact/${index}`);
      }}
    >
      <Card.Section className={cx(classes.innerCard)}>
        <a {...linkProps}>
          <AspectRatio ratio={4 / 3} mx="auto">
            <Image src={image} alt="image" width={100} height={100} />
          </AspectRatio>
        </a>
      </Card.Section>
      <Text className={classes.title} fw={500} component="a" {...linkProps}>
        {impactTitle}
      </Text>
    </Card>
  );
}
