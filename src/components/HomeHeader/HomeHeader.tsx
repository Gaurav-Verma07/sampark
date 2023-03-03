import { useState } from 'react';
import {
  createStyles,
  Header,
  Container,
  Group,
  Burger,
  Paper,
  Transition,
  Image,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import SamparkLogo from '../../assets/Images/samparklogotransparent.png';
import useStyles from './styles';

const HEADER_HEIGHT = '5rem';

interface HeaderResponsiveProps {
  links: { link: string; label: string }[];
}

const links: any = [
  { link: '#gallery', label: 'Gallery' },
  { link: '#', label: 'Blogs' },
  { link: '#', label: 'Values' },
  { link: '#', label: 'Contact' },
];

const HomeHeader = () => {
  const [opened, { toggle, close }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const { classes, cx } = useStyles();

  const items = links.map((link: any) => (
    <a
      key={link.label}
      href={link.link}
      className={cx(classes.link)}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
        close();
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <Header height={HEADER_HEIGHT} className={classes.root} pt={30}>
      <Container className={classes.header}>
        <Image src={SamparkLogo} height={100} width={100} />
        {/* <SamparkLogo  /> */}
        <Group spacing={5} className={classes.links}>
          {items}
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
            </Paper>
          )}
        </Transition>
      </Container>
    </Header>
  );
};

export default HomeHeader;
