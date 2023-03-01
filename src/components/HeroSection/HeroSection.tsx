import React from 'react';
// import homeImg from '../assets/Images/homeImg.jpg'
import './styles.css';
// import { Wrapper, Status } from "@googlemaps/react-wrapper";

// const render = (status: Status): ReactElement => {
//   if (status === Status.FAILURE) return <ErrorComponent />;
//   return <Spinner />;
// };

function HeroSection() {
  return (
    <div className="hero-section">
      <div className="container">
        <h1>SAMPARK</h1>
        <p>
          We connect slum and orphange kids with local colleges and NGOs to end
          poverty.
        </p>
        <button>Donate</button>
      </div>
      {/* <Wrapper apiKey={"YOUR_API_KEY"}>
    <MyMapComponent /> */}
  {/* </Wrapper> */}
    </div>
  );
}

export default HeroSection;
