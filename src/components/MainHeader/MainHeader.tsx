import { Header, Container, Group, Burger, Avatar } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { NavLink } from 'react-router-dom';
import useStyles from './styles';

interface HeaderSimpleProps {
  links: { link: string; label: string }[];
}

const MainHeader = () => {
  const [opened, { toggle }] = useDisclosure(false);
  const { classes, cx } = useStyles();

  return (
    <Header height={60} mb={120}>
      <Container className={classes.header}>
        <Group spacing={'xl'} className={classes.links}>
          <NavLink to="home">
            <Avatar alt="it's me" radius="xl" />
          </NavLink>
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
