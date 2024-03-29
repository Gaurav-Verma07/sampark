'use client';
import { useState } from 'react';
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  MediaQuery,
  Burger,
  useMantineTheme,
} from '@mantine/core';
import AllNgos from '../../src/components/Admin/Ngos/AllNgos';
import Image from 'next/image';
import React from 'react';
import AllEvents from '../../src/components/Admin/Events/AllEvents';
import AllBlogs from '../../src/components/Admin/Blog/AllBlogs';
import AllOrphanages from '../../src/components/Admin/Orphanages/AllOrphanages';

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
        <Navbar
          height={600}
          p="xs"
          width={{ base: 250 }}
          style={{ cursor: 'pointer' }}
        >
          <Navbar.Section mt="md" style={{ cursor: 'pointer' }}
           onClick={() => setSelectedOption('orphanages')}
          >
            Orphanges
          </Navbar.Section>
          <Navbar.Section
            mt="md"
            style={{ cursor: 'pointer' }}
            onClick={() => setSelectedOption('ngos')}
          >
            NGOS
          </Navbar.Section>
          <Navbar.Section mt="md" style={{ cursor: 'pointer' }}  onClick={() => setSelectedOption('events')}
          >
            Events
          </Navbar.Section>
          <Navbar.Section mt="md" style={{ cursor: 'pointer' }}  onClick={() => setSelectedOption('blogs')}
          >
            Blogs
          </Navbar.Section>
        </Navbar>
      }
      footer={
        <Footer height={60} p="md">
          Footer
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
      {selectedOption === 'events' && <AllEvents />}
      {selectedOption === 'orphanages' && <AllOrphanages />}
      {selectedOption === 'ngos' && <AllNgos />}
      {selectedOption === 'blogs' && <AllBlogs />}
    </AppShell>
  );
};

export default AdminPage;
