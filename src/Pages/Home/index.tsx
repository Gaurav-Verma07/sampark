import React from 'react';
import HeroSection from '../../components/HeroSection/HeroSection';
import  {ContactUs}  from '../../components/ContactUs/ContactUs';
// import { OurValues}  from '../../components/HomeOurValues/OurValues';
import OurValues1 from '../../components/HomeOurValues/OurValues1';

function Home() {
  return (
    <div>
      <HeroSection />
      <OurValues1 />
      <ContactUs/>
    </div>
  );
}

export default Home;
