import React from 'react';
import './styles.css';

function HeroSection() {
  return (
    <>
      <div className="hero-section">
        <div className="container">
          <h1>SAMPARK</h1>
          <p>
            We connect slum and orphanage kids with local colleges and NGOs to
            end poverty.
          </p>
          <button style={{ backgroundColor: 'black', color: 'white', borderRadius: '12px', padding: '10px 20px' }}>
      Donate
    </button>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
