'use client';
import { AppShell } from '@mantine/core';
import { Route, Routes } from 'react-router';
import MainHeader from '../../src/components/MainHeader/MainHeader';
import HomeNavbar from '../../src/components/Navbar/Navbar';
import ProviderCollegeTeam from '../../src/components/ProviderCollegeTeam/ProviderCollegeTeam';
import ProviderMain from '../../src/components/ProviderMain/ProviderMain';
import React from 'react';

const Provider = () => {
  return (
    <AppShell
      padding="md"
      navbar={<HomeNavbar />}
      header={<MainHeader />}
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      <Routes>
        <Route path="home" element={<ProviderMain />} />
        <Route path="team" element={<ProviderCollegeTeam />} />
      </Routes>
    </AppShell>
  );
};

export default Provider;
