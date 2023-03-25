import { useEffect, useState } from 'react';
import {
  createStyles,
  Header,
  Container,
  Group,
  Burger,
  Paper,
  Transition,
  Image,
  Button,
  Avatar,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import SamparkLogo from '../../assets/Images/samparklogotransparent.png';
import useStyles from './styles';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../utils/firebase';
import { writeUserData } from '../../utils/ApiRequests/userProfile';

const HEADER_HEIGHT = '5rem';

interface HeaderResponsiveProps {
  links: { link: string; label: string }[];
}

const links: any = [
  { link: '#gallery', label: 'Gallery' },
  { link: '#blogs', label: 'Blogs' },
  { link: '#values', label: 'Values' },
  { link: '#contact', label: 'Contact' },
];

const HomeHeader = () => {
  const user: any = localStorage.getItem('user_uid');
  const [opened, { toggle, close }] = useDisclosure(false);
  const { classes, cx } = useStyles();
  const navigate = useNavigate();

  const items = links.map((link: any) => (
    <a key={link.label} href={link.link} className={cx(classes.link)}>
      {link.label}
    </a>
  ));

  // useEffect(()=>{
  //   writeUserData(user, 'Ganga NGO', 'sample2@gmail.com', 'seeker')
  //   console.log("Data posted")
  // }, [])

  const isLoggedIn = user ? (
    <Avatar
      radius="xl"
      onClick={() => {
        navigate('/provider/home');
      }}
    />
  ) : (
    <Button
      onClick={() => {
        navigate('/login');
      }}
    >
      Sign In
    </Button>
  );

  return (
    <Header height={HEADER_HEIGHT} className={classes.root} pt={30}>
      <Container className={classes.header}>
        <Image src={SamparkLogo} height={100} width={100} />
        {/* <SamparkLogo  /> */}
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
