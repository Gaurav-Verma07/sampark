import { AppShell } from '@mantine/core';
import { Route, Routes } from 'react-router';
import MainHeader from '../../components/MainHeader/MainHeader';
import HomeNavbar from '../../components/Navbar/Navbar';
import ProviderCollegeTeam from '../../components/ProviderCollegeTeam/ProviderCollegeTeam';
import ProviderMain from '../../components/ProviderMain/ProviderMain';

const Provider = () => {
  // console.log(process.env.REACT_APP_GOOGLE_API_KEY);

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
        {/* <Route path="/" to= /> */}
        <Route path="home" element={<ProviderMain />} />
        <Route path="team" element={<ProviderCollegeTeam />} />
        {/* <Route path="assignments" element={<Assignments />} /> */}
      </Routes>
      {/* <ProviderMain /> */}

      {/* <ProviderMain/> */}
      {/* Your application here */}
    </AppShell>
  );
};

export default Provider;
