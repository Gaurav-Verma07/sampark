import { AppShell } from '@mantine/core';
import { Route, Routes } from 'react-router';
import MainHeader from '../../components/MainHeader/MainHeader';
import HomeNavbar from '../../components/SeekerNavbar/Navbar';
// import ProviderCollegeTeam from '../../components/ProviderCollegeTeam/ProviderCollegeTeam';
import SeekerMain from '../../components/SeekerMain/SeekerMain';
import ProgramSection from '../../components/SeekerProgramSection/ProgramSection';

const Seeker = () => {
  // console.log(process.env.REACT_APP_GOOGLE_API_KEY);

  return (
    <AppShell
      padding="md"
      navbar={<HomeNavbar/>}
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
        {/* <Route path="/*" element={<ProviderMain />} /> */}
        <Route path="home" element={<SeekerMain />} />
        <Route path="program" element={<ProgramSection/>} />
        {/* <Route path="team" element={<ProviderCollegeTeam />} /> */}
        {/* <Route path="assignments" element={<Assignments />} /> */}
      </Routes>
      {/* <ProviderMain /> */}

      {/* <ProviderMain/> */}
      {/* Your application here */}
    </AppShell>
  );
};

export default Seeker;
