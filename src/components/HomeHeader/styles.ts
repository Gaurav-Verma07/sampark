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
    textDecoration: 'none',
    fontSize: theme.fontSizes.lg,
    fontWeight: 300,
    

// '&::after':{

//   content: '""',
//   position: 'absolute',
//   bottom: '0',
//   height: '3px',
//   transition: '0.7s',
//   width: '100%',
//   left: '0',
//   transform: 'scaleX(0)',
//   transformOrigin: 'center',

  '&:hover':{

borderRadius:'44px',
    border:'2px solid #3eff71b0',
    boxShadow:'2px 1px 6px  #1bb31b',
    fontSize:'20px',
  

    [theme.fn.smallerThan('sm')]: {
      borderRadius: 0,
      padding: theme.spacing.md,
      color: theme.black,
    },
  },

},

}));

export default useStyles;
