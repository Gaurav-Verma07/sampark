import { useState } from 'react';

import { Navbar, Group, Code } from '@mantine/core';
import {
  IconSettings,
  IconDatabaseImport,
  IconUserCheck,
  IconNotebook,
  IconSwitchHorizontal,
  IconLogout,
  IconCalendarStats,
  IconReceipt,
  IconIdBadge2,
  IconHome2,
  IconUserPlus,
} from '@tabler/icons';
import { NavLink, useNavigate } from 'react-router-dom';
import useStyles from './styles';

const data = [
  { link: 'home', label: 'Home', icon: IconHome2 },
  { link: 'team', label: 'College Team', icon: IconUserCheck },
  { link: 'schedule', label: 'Schedule', icon: IconCalendarStats },
  { link: 'fees', label: 'Fee Submission', icon: IconReceipt },
  { link: 'admissions', label: 'Admissions', icon: IconUserPlus },
  { link: 'admitCards', label: 'Admit Cards', icon: IconIdBadge2 },
  { link: 'assignments', label: 'Assignments', icon: IconNotebook },
  { link: 'settings', label: 'Settings', icon: IconSettings },
];

const HomeNavbar = () => {
  const navigate = useNavigate();
  const { classes, cx } = useStyles();
  const [active, setActive] = useState('Billing');

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
        }}
      >
        <item.icon className={classes.linkIcon} stroke={1.5} />
        <span>{item.label}</span>
      </NavLink>
    );
  });

  const logOutHandler = () => {
    const response = confirm('Are you sure you want to LogOut?');
    if (response) {
      localStorage.clear();
      navigate('/login');
    }
  };

  return (
    <Navbar height={700} width={{ sm: 300 }} p="md">
      <Navbar.Section grow>
        <Group className={classes.header}></Group>
        {links}
      </Navbar.Section>

      <Navbar.Section className={classes.footer}>
        <a
          href="#"
          className={classes.link}
          onClick={(event) => event.preventDefault()}
        >
          <IconSwitchHorizontal className={classes.linkIcon} stroke={1.5} />
          <span>Change account</span>
        </a>

        <a href="#" className={classes.link} onClick={logOutHandler}>
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>Log Out</span>
        </a>
      </Navbar.Section>
    </Navbar>
  );
};
export default HomeNavbar;
