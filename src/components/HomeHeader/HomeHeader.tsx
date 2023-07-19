import {
  Header,
  Container,
  Group,
  Burger,
  Paper,
  Transition,
  // Image,
  Button,
  Avatar,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Image from 'next/image';
// import SamparkLogo from '../../assets/Images/samparklogotransparent.png';
import useStyles from './styles';
// import { useNavigate } from 'react-router-dom';

const HEADER_HEIGHT = '5rem';
const links: any = [
  { link: '#gallery', label: 'Gallery' },
  { link: '/blogs', label: 'Blogs' },
  { link: '/impact', label: 'Impact' },
  { link: '#values', label: 'Values' },
  { link: '#faq', label: 'FAQ' },
  { link: '#contact', label: 'Contact' },
];

const HomeHeader = () => {
  const user: any = localStorage.getItem('user_uid');
  const [opened, { toggle }] = useDisclosure(false);
  const { classes, cx } = useStyles();
  // const navigate = useNavigate();

  const items = links.map((link: any) => (
    <a key={link.label} href={link.link} className={cx(classes.link)}>
      {link.label}
    </a>
  ));

  const isLoggedIn = user ? (
    <Avatar
      radius="xl"
      onClick={() => {
        // navigate('/provider/home');
      }}
    />
  ) : (
    <Button
      onClick={() => {
        // navigate('/login');
      }}
    >
      Sign In
    </Button>
  );

  return (
    <Header height={HEADER_HEIGHT} className={classes.root} pt={30}>
      <Container className={classes.header}>
        <Image
          src="/assets/Images/samparklogotransparent.png"
          alt="Sampark Logo"
          height={80}
          width={100}
        />
        <Group spacing={5} className={classes.links}>
          {items}
          {isLoggedIn}
        </Group>

        <Burger
          opened={opened}
          onClick={toggle}
          className={classes.burger}
          size="sm"
        />

        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} style={styles}>
              {items}
              <Button>Sign In</Button>
            </Paper>
          )}
        </Transition>
      </Container>
    </Header>
  );
};

export default HomeHeader;
