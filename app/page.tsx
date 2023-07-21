
"use client"


import HeroSection from '../src/components/HeroSection/HeroSection';
import { ContactUs } from '../src/components/ContactUs/ContactUs';
import OurValues1 from '../src/components/HomeOurValues/OurValues1';
import MainBlogs from '../src/components/MainBlogs/MainBlogs';
import { Divider } from '@mantine/core';
import HomeHeader from '../src/components/HomeHeader/HomeHeader';
import useStyles from './styles';
import MapBox from '../src/components/MapBox/MapBox';
import ImageGallery from '../src/components/ImageGallery/ImageGallery';
import Faq from '../src/components/Faq/Faq';
import React from 'react';

export default function Home() {
  const { classes } = useStyles();
  return (
    <div>
      <div className={classes.main}>
        <HomeHeader />
        <HeroSection />
      </div>
      <OurValues1 />
      <ImageGallery />
      <MapBox />
      <Divider m={20} mx={70} size="xs" />
      <MainBlogs />
      <Faq />
      <ContactUs />
    </div>
  );
}
