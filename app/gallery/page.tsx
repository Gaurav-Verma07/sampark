import { Container, Header } from '@mantine/core';
import Image from 'next/image';
import { useNavigate } from 'react-router-dom';
// import SamparkLogo from '../../assets/Images/samparklogotransparent.png';
import './gallery.css';
import React from 'react';

export default function Home() {
  return (
    <>
      <Header height={100} mb={50}>
        <Container>
          <Image
            style={{ cursor: 'pointer' }}
            src="/assets/Images/samparklogotransparent.png"
            alt="sampark-logo"
            height={80}
            width={100}
            // onClick={() => navigate('/')}
          />
        </Container>
      </Header>
      <div className="gPadding">
        <h1 style={{ fontSize: '3rem', color: 'white' }}>Gallery</h1>
        <div className="grid-container">
          <div className="grid-item">
            {/* <img
              className="imgc"
              style={{ cursor: 'pointer' }}
              height={300}
              src="https://drive.google.com/uc?export=download&id=1LvVkueNKCOxWMZhmENlciL98fFnO1Iyl"
            /> */}
          </div>
          <div className="grid-item">
            {/* <img
              className="imgc"
              style={{ cursor: 'pointer' }}
              height={300}
              src="https://drive.google.com/uc?export=download&id=1Lrgi5PCH0MKgY6LYyaa3oGkXGiCRyYiK"
            /> */}
          </div>
          <div className="grid-item">
            {/* <img
              className="imgc"
              style={{ cursor: 'pointer' }}
              height={300}
              src="https://drive.google.com/uc?export=download&id=1LxlU3X8-1WH4TLDM4YSP9x21g4HVjggU"
            /> */}
          </div>
          <div className="grid-item">
            {/* <img
              className="imgc"
              style={{ cursor: 'pointer' }}
              height={300}
              src="https://drive.google.com/uc?export=download&id=1LtNaPzQYG_3AgRI__hB1BGKBWFh6Ulvo"
            /> */}
          </div>
          <div className="grid-item">
            {/* <img
              className="imgc"
              style={{ cursor: 'pointer' }}
              height={300}
              src="https://drive.google.com/uc?export=download&id=1Lr0fIwip2Fa5VyrThq4wx00vIUYkOxTO"
            /> */}
          </div>
          <div className="grid-item">
            {/* <img
              className="imgc"
              style={{ cursor: 'pointer' }}
              height={300}
              src="https://drive.google.com/uc?export=download&id=1MTxwomYotps5z_-BHpHhXvwSr1ISw-de"
            /> */}
          </div>
        </div>
      </div>
    </>
  );
}
