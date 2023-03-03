import React from 'react';
// import NavBar from '../NavBar';
// import homeImg from '../assets/Images/homeImg.jpg'
import './styles.css';

function HeroSection() {
  return (
    <>
      <div className="hero-section">
        <div className="container">
          <h1>SAMPARK</h1>
          <p>
            We connect slum and orphange kids with local colleges and NGOs to
            end poverty.
          </p>
          <button>Donate</button>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
