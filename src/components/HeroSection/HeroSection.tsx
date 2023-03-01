
import React from 'react';
// import { NavbarMinimal } from './NavbarMinimal';
// import homeImg from '../assets/Images/homeImg.jpg'
import './styles.css';
import NavBar from '../NavBar';


function HeroSection() {
  return (
    <>
    <div className="hero-section">
   <NavBar/>
    {/* <NavbarMinimal/> */}
    

      <div className="container">
      <h1>SAMPARK</h1>
        <p>
          We connect slum and orphange kids with local colleges and NGOs to end
          poverty.
        </p>
        <button>Donate</button>
      </div>
       
    </div>
    </>
  );
}

export default HeroSection;
