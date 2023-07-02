import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme, _params, getRef) => {
  const icon: any = getRef('icon');
  return {
    header: {
      paddingBottom: theme.spacing.md,
      marginBottom: theme.spacing.md * 1.5,
    },

    footer: {
      paddingTop: theme.spacing.md,
      marginTop: theme.spacing.md,
      borderTop: `1px solid ${
        theme.colorScheme === 'dark'
          ? theme.colors.dark[4]
          : theme.colors.gray[2]
      }`,
    },

    link: {
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none',
      fontSize: theme.fontSizes.sm,
      color:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[1]
          : theme.colors.gray[7],
      padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
      borderRadius: theme.radius.sm,
      fontWeight: 500,
      '&:hover': {
        backgroundColor:
          theme.colorScheme === 'dark'
            ? theme.colors.dark[6]
            : theme.colors.gray[0],
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[8],

        [`& .${icon}`]: {
          color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[8],
        },
      },
      '&:focus': {
        outline: 'none',
        boxShadow: `0 0 0 2px ${theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 6 : 0]}`,
        backgroundColor: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 6 : 0],
        color: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 0 : 8],

        [`& .${icon}`]: {
          color: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 0 : 8],
        },
      },
    },

    linkIcon: {
      ref: icon,
      color:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[2]
          : theme.colors.gray[6],
      marginRight: theme.spacing.sm,
    },

    linkActive: {
      '&, &:hover': {
        backgroundColor: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 6 : 0],
        color: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 0 : 8],
        [`& .${icon}`]: {
          color: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 0 : 8],
        },
      },
    },

    mobileMenuTrigger: {
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer',
    },

    mobileMenuContent: {
      paddingTop: theme.spacing.md,
      marginTop: theme.spacing.md,
    },

    desktopMenu: {
      '@media (max-width: 767px)': {
        display: 'none',
      },
    },
  };
});

export default useStyles;
