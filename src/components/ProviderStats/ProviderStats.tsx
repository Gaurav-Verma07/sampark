import {
  createStyles,
  ThemeIcon,
  Progress,
  Text,
  Group,
  Paper,
} from '@mantine/core';
import { IconArchive, IconStar } from '@tabler/icons';

const ICON_SIZE = 60;

const useStyles = createStyles((theme) => ({
  main: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  card: {
    position: 'relative',
    overflow: 'visible',
    width: '30%',
    padding: theme.spacing.xl,
    paddingTop: theme.spacing.xl * 1.5 + ICON_SIZE / 3,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  icon: {
    position: 'absolute',
    top: -ICON_SIZE / 3,
    left: `calc(50% - ${ICON_SIZE / 2}px)`,
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1,
  },
}));

const ProviderStats = () => {
  const { classes } = useStyles();

  return (
    <Paper className={classes.main} py="md">
      <Paper radius="md" withBorder className={classes.card} mt={ICON_SIZE / 3}>
        <ThemeIcon className={classes.icon} size={ICON_SIZE} radius={ICON_SIZE}>
          <IconStar size={34} stroke={1.5} />
        </ThemeIcon>

        <Text align="center" weight={700} className={classes.title}>
          Points Achieved
        </Text>
        <Text
          align="center"
          weight={400}
          color="red"
          py={'sm'}
          className={classes.title}
        >
          Level 1
        </Text>
        <Text color="dimmed" align="center" size="sm">
          32 / 100
        </Text>

        <Group position="apart" mt="xs">
          <Text size="sm" color="dimmed">
            Progress
          </Text>
          <Text size="sm" color="dimmed">
            32%
          </Text>
        </Group>

        <Progress value={32} mt={5} />

        <Text size="sm" py="sm" color="dimmed">
          Get 68 more points to reach Level 2
        </Text>
        {/* 
      <Group position="apart" mt="md">
        <Badge size="sm">4 days left</Badge>
      </Group> */}
      </Paper>
      <Paper radius="md" withBorder className={classes.card} mt={ICON_SIZE / 3}>
        <ThemeIcon className={classes.icon} size={ICON_SIZE} radius={ICON_SIZE}>
          <IconArchive size={34} stroke={1.5} />
        </ThemeIcon>

        <Text align="center" weight={700} className={classes.title}>
          Supplies Provided
        </Text>
        <Text color="dimmed" align="center" size="sm">
          20 books and many more
        </Text>

        {/* <Group position="apart" mt="xs">
        <Text size="sm" color="dimmed">
          Progress
        </Text>
        <Text size="sm" color="dimmed">
          32%
        </Text>
      </Group> */}

        <Progress value={32} mt={5} />

        <Text size="sm" py="sm" color="dimmed">
          Get 68 more points to reach Level 2
        </Text>
        {/* 
      <Group position="apart" mt="md">
        <Badge size="sm">4 days left</Badge>
      </Group> */}
      </Paper>
    </Paper>
  );
};

export default ProviderStats;
