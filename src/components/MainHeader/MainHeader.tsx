import { Header, Container, Group, Burger, Avatar } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
// import { MantineLogo } from '@mantine/ds';
// import DarkThemeToggle from '../DarkThemeToggle/DarkThemeToggle';
import { NavLink } from 'react-router-dom';
import useStyles from './styles';

interface HeaderSimpleProps {
  links: { link: string; label: string }[];
}

const MainHeader = () => {
  const [opened, { toggle }] = useDisclosure(false);
  //   const [active, setActive] = useState(links[0].link);
  const { classes, cx } = useStyles();

  //   const items = links.map((link) => (
  //     <a
  //       key={link.label}
  //       href={link.link}
  //       className={cx(classes.link, { [classes.linkActive]: active === link.link })}
  //       onClick={(event) => {
  //         event.preventDefault();
  //         setActive(link.link);
  //       }}
  //     >
  //       {link.label}
  //     </a>
  //   ));

  return (
    <Header height={60} mb={120}>
      <Container className={classes.header}>
        {/* <MantineLogo size={28} /> */}
        <Group spacing={'xl'} className={classes.links}>
          <NavLink to="profile">
            <Avatar
              alt="it's me"
              radius="xl"
            />
          </NavLink>
          {/* <DarkThemeToggle /> */}
        </Group>

        <Burger
          opened={opened}
          onClick={toggle}
          className={classes.burger}
          size="sm"
        />
      </Container>
    </Header>
  );
};
export default MainHeader;
