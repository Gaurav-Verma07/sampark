import { createStyles } from '@mantine/styles';
const HEADER_HEIGHT = '5rem';

const useStyles = createStyles((theme) => ({
  root: {
    position: 'absolute',
    zIndex: 1,
    backgroundColor: 'transparent',
    border: 'none',
  },

  dropdown: {
    position: 'absolute',
    top: HEADER_HEIGHT,
    color: '#000 !important',
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: 'hidden',

    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    color: theme.white,
    display: 'block',
    lineHeight: 1,
    padding: `.3rem 1rem`,
    // borderRadius: theme.radius.sm,
    textDecoration: 'none',
    // color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.lg,
    fontWeight: 300,

    // '&:hover': {
    //   backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    // },

    [theme.fn.smallerThan('sm')]: {
      borderRadius: 0,
      padding: theme.spacing.md,
      color: theme.black,
    },
  },

  //   linkActive: {
  //     '&, &:hover': {
  //       backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
  //       color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
  //     },
  //   },
}));

export default useStyles;
