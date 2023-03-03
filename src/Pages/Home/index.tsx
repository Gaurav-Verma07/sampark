import React from 'react';
import HeroSection from '../../components/HeroSection/HeroSection';
import { ContactUs } from '../../components/ContactUs/ContactUs';
// import { OurValues}  from '../../components/HomeOurValues/OurValues';
import OurValues1 from '../../components/HomeOurValues/OurValues1';
import ImageGallery from '../../components/ImageGallery/ImageGallery';
import Blogs from '../../components/Blogs/Blogs';
import { Divider } from '@mantine/core';

function Home() {
  return (
    <div>
      <HeroSection />
      <OurValues1 />
      <ImageGallery />
      <Divider m={20} mx={70} size="xs" />
      <Blogs />
      <ContactUs />
    </div>
  );
}

export default Home;
