import { useState, useEffect } from 'react';
import {
  IconBookmark,
  IconHeart,
  IconShare,
  IconCheck,
} from '@tabler/icons-react';
import {
  Card,
  Image,
  Text,
  ActionIcon,
  Badge,
  Group,
  Center,
  createStyles,
  AspectRatio,
} from '@mantine/core';
import { useNavigate } from 'react-router-dom';

const useStyles = createStyles((theme) => ({
  card: {
    position: 'relative',
    width: '80%',
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

interface savedBlogType {
  id: number;
  data: string;
  image: string;
}
interface ArticleCardProps {
  image: string;
  index: number;
  data: string;
  handleAddSaveBlog?: (data: savedBlogType) => void;
  handleDeleteSavedBlog: (id: number) => void;
}

export function BlogCard({
  image,
  index,
  data,
  handleAddSaveBlog,
  handleDeleteSavedBlog,
  ...others
}: ArticleCardProps &
  Omit<React.ComponentPropsWithoutRef<'div'>, keyof ArticleCardProps>) {
  const navigate = useNavigate();
  const { classes, cx, theme } = useStyles();
  const linkProps = {
    target: '_blank',
    rel: 'noopener noreferrer',
  };
  const [blogTitle, setBlogTitle] = useState<string>('');
  const [isSavedBlog, setIsSavedBlog] = useState<boolean>(false);

  useEffect(() => {
    const getSavedData = localStorage.getItem('sampark-saved-items');
    let saveBlogData;
    if (getSavedData) {
      saveBlogData = JSON.parse(getSavedData);
    }

    if (saveBlogData !== undefined)
      for (let idx = 0; idx < saveBlogData.length; idx++) {
        if (saveBlogData[idx].id === index) {
          setIsSavedBlog(true);
        }
      }
  }, [isSavedBlog]);

  const handleSave = () => {
    if (isSavedBlog === true) {
      //to delete a certain blog
      handleDeleteSavedBlog(index);
      setIsSavedBlog(false);
    } else {
      //to add a certain blog
      const finalData: savedBlogType = { id: index, data: data, image: image };
      if (handleAddSaveBlog) {
        handleAddSaveBlog(finalData);
        setIsSavedBlog(true);
      }
    }
  };

  useEffect(() => {
    const element = document.createElement('div');
    element.innerHTML = data;

    const h1Tag = element.querySelector('div.blog__main h1') as HTMLElement;
    const extractedTitle = h1Tag?.innerText ?? '';
    setBlogTitle(extractedTitle);
  }, []);

  return (
    <Card
      shadow="sm"
      p="md"
      radius="md"
      className={classes.card}
      id="blogs"
      {...others}
    >
      <Card.Section className={cx(classes.innerCard)}>
        <a {...linkProps}>
          <AspectRatio ratio={4 / 3} mx="auto">
            <Image src={image} />
          </AspectRatio>
        </a>
      </Card.Section>

      <Badge
        className={classes.rating}
        variant="gradient"
        gradient={{ from: 'yellow', to: 'red' }}
      >
        4
      </Badge>

      <Text
        className={classes.title}
        fw={500}
        component="a"
        {...linkProps}
        onClick={() => {
          navigate(`/blogs/${index}`);
        }}
      >
        {blogTitle}
      </Text>

      <Group position="apart" className={classes.footer}>
        <Center>
          <Text fz="sm" inline>
            Gaurav
          </Text>
        </Center>

        <Group spacing={8} mr={0}>
          <ActionIcon className={classes.action}>
            <IconHeart size="1rem" color={theme.colors.red[6]} />
          </ActionIcon>
          <ActionIcon className={classes.action} onClick={() => handleSave()}>
            {isSavedBlog ? (
              <IconCheck size="1rem" color={theme.colors.yellow[7]} />
            ) : (
              <IconBookmark size="1rem" color={theme.colors.yellow[7]} />
            )}
          </ActionIcon>
          <ActionIcon className={classes.action}>
            <IconShare size="1rem" />
          </ActionIcon>
        </Group>
      </Group>
    </Card>
  );
}
