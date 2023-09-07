
'use client';

import { Container, Header } from '@mantine/core';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import './gallery.css';
import React from 'react';
import { NextPage } from 'next';
import {galleryData} from './galleryData'

interface GalleryType{
  image: string;
}
const GalleryPage: NextPage =()=>{
  const router = useRouter();
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
            onClick={() => router.push('/')}
          />
        </Container>
      </Header>
      <div className="gPadding">
        <h1 style={{ fontSize: '3rem', color: 'white' }}>Gallery</h1>
        <div className="grid-container">
          {galleryData.map((data:GalleryType, index:number)=>
          <div key={index} className="grid-item">
            <img
              className="imgc"
              style={{ cursor: 'pointer' }}
              height={300}
              src={data.image as string}
            />
          </div>
          )}
          
        
        </div>
      </div>
    </>
  );
}

export default GalleryPage;
