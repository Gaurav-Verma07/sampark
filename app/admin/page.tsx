'use client';
import { useState, useEffect } from 'react';
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
} from '@mantine/core';
import AllOrphanages from '../../src/components/Admin/Orphanages/AllOrphanages';
import Image from 'next/image';
import React from 'react';

const AdminPage = () => {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string>('');

  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={
        <Navbar height={600} p="xs" width={{ base: 250 }}>
          <Navbar.Section
            mt="md"
            onClick={() => setSelectedOption('orphanages')}
          >
            Orphanges
          </Navbar.Section>
          <Navbar.Section mt="md">NGOS</Navbar.Section>
          <Navbar.Section mt="md">Events</Navbar.Section>
          <Navbar.Section mt="md">Blogs</Navbar.Section>
        </Navbar>
      }
      footer={
        <Footer height={60} p="md">
          
        </Footer>
      }
      header={
        <Header height={{ base: 50, md: 90 }} p="md">
          <div
            style={{ display: 'flex', alignItems: 'center', height: '150%' }}
          >
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>
            <Image
              src="/assets/Images/samparklogotransparent.png"
              alt="Sampark Logo"
              height={80}
              width={100}
            />
          </div>
        </Header>
      }
    >
      {selectedOption === 'orphanages' && <AllOrphanages />}
    </AppShell>
  );
};

export default AdminPage;
