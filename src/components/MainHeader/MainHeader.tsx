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
          <NavLink to="profile">
            <Avatar
              src="https://images.unsplash.com/photo-1603772655616-711c548d85f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt="it's me"
              radius="xl"
            />
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
