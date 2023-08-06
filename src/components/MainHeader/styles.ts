import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
    width:'100%'
  },

  links: {
    [theme.fn.smallerThan('xs')]: {
      display: 'none',
    },
    width: 92%,
    padding: 2rem,
    margin: 0 auto,
    border-radius: .5rem,
    top: 5.25rem
  },

  burger: {
    [theme.fn.largerThan('xs')]: {
      display: 'none',
    },
    background: white,
    padding: 1rem .7rem,
    width: unset,
    height: unset,
  },

  link: {
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,
    '&:hover': {
      cursor: 'pointer',
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
    width: 100%
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({
        variant: 'light',
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor })
        .color,
    },
  },
}));

export default useStyles;
