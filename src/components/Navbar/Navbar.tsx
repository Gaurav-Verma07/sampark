import { useState } from 'react';
import { Navbar, Group, Container } from '@mantine/core';
import {
  IconSettings,
  IconUserCheck,
  IconHome2,
  IconSwitchHorizontal,
  IconLogout,
} from '@tabler/icons';
import { NavLink, useNavigate } from 'react-router-dom';
import useStyles from './styles';

const data = [
  { link: 'home', label: 'Home', icon: IconHome2 },
  { link: 'team', label: 'College Team', icon: IconUserCheck },
  { link: 'settings', label: 'Settings', icon: IconSettings },
];

const HomeNavbar = () => {
  const navigate = useNavigate();
  const { classes, cx } = useStyles();
  const [active, setActive] = useState('Home');
  const [expanded, setExpanded] = useState(false);

  const links = data.map((item) => {
    return (
      <NavLink
        className={cx(classes.link, {
          [classes.linkActive]: item.label === active,
        })}
        to={item.link}
        key={item.label}
        onClick={(event) => {
          event.preventDefault();
          setActive(item.label);
          navigate(`/provider/${item.link}`);
          setExpanded(false); // Close the mobile menu after clicking a link
        }}
      >
        <item.icon className={classes.linkIcon} size={20} strokeWidth={1.5} />
        <span>{item.label}</span>
      </NavLink>
    );
  });

  const logOutHandler = () => {
    const response = window.confirm('Are you sure you want to Log Out?');
    if (response) {
      localStorage.clear();
      navigate('/login');
    }
  };

  return (
    <Navbar
      shadow="xs"
      padding={{ xs: 'sm', md: 'md' }}
      style={{ zIndex: 100 }}
      mobileMenu={
        <Container size="xs">
          <div className={classes.mobileMenuContent}>{links}</div>
        </Container>
      }
    >
      <Navbar.Section>
        <Group className={classes.header}></Group>
      </Navbar.Section>

      <Navbar.Section position="right">
        <div className={classes.mobileMenuTrigger}>
          <IconMenu
            onClick={() => setExpanded(!expanded)}
            aria-label="Toggle Menu"
          />
        </div>
        <Group
          position="right"
          spacing="xs"
          className={classes.desktopMenu}
          hidden={expanded}
        >
          {links}
        </Group>

        <Group
          position="right"
          className={classes.desktopMenu}
          hidden={!expanded}
        >
          <a
            href="#"
            className={classes.link}
            onClick={(event) => {
              event.preventDefault();
              setExpanded(false);
            }}
          >
            <IconSwitchHorizontal
              className={classes.linkIcon}
              size={20}
              strokeWidth={1.5}
            />
            <span>Change account</span>
          </a>

          <a href="#" className={classes.link} onClick={logOutHandler}>
            <IconLogout
              className={classes.linkIcon}
              size={20}
              strokeWidth={1.5}
            />
            <span>Log Out</span>
          </a>
        </Group>
      </Navbar.Section>
    </Navbar>
  );
};

export default HomeNavbar;
