import { AspectRatio, Button, Card, Col, Grid, Paper, Text, Title } from '@mantine/core';
import React, { useMemo, useState } from 'react';
// import './Values.css';
import Map, {
  FullscreenControl,
  GeolocateControl,
  LngLat,
  Marker,
  NavigationControl,
  Popup,
  ScaleControl,
} from 'react-map-gl';

// import * as React from 'react';

const cityData = [
  {
    type: 'Seeker',
    image: '',
    description: 'Mohibullapur slum area',
    latitude: 26.911654994184758,
    longitude: 80.93917480506053,
  },
  {
    latitude: 31.8484,
    longitude: -106.427,
  },
  {
    type: 'Provider',
    description: 'IET Lucknow',
    image: 'https://img.collegepravesh.com/2016/05/IET-Lucknow.jpg',
    latitude: 26.914388250467766,
    longitude: 80.94197817059155,
  },
];

const ICON = `M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3
  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9
  C20.1,15.8,20.2,15.8,20.2,15.7z`;

const pinStyle = {
  cursor: 'pointer',
  fill: '#d00',
  stroke: 'none',
};

function Pin() {
  return (
    <svg height={20} viewBox="0 0 24 24" style={pinStyle}>
      <path d={ICON} />
    </svg>
  );
}

// export default React.memo(Pin);

const MapBox = () => {
  //   const [lat, setLat] = useState<number>(26.914522184608856);
  //   const [lng, setLng] = useState<number>(80.94196744173564);
  const [popupInfo, setPopupInfo]: any = useState(null);

  const pins = useMemo(
    () =>
      cityData.map((city, index) => (
        <Marker
          key={`marker-${index}`}
          longitude={city.longitude}
          latitude={city.latitude}
          anchor="bottom"
          onClick={(e) => {
            // If we let the click event propagates to the map, it will immediately close the popup
            // with `closeOnClick: true`
            e.originalEvent.stopPropagation();
            setPopupInfo(city);
          }}
        >
          <Pin />
        </Marker>
      )),
    [],
  );

  return (
    <Paper
      //   align="right"
      m={25}
      sx={{
        height: '80vh',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'left',
      }}
    >
      <Card sx={{ display: 'flex', alignItems: 'left', flexDirection: 'column' }} w="50%">
        <Title order={1} weight={300}>
          We provide assistanace. Register your NGO/orphanage at Sampark.
        </Title>
        <Text weight={500} mb={20}>
          Fill out the given google form, Our team will soon connect with you
        </Text>
        <Button component= "a" href= "https://docs.google.com/forms/d/e/1FAIpQLScgCOCZWTQmA-EWHNlW55S35v3UcT3ExMQs-TDKnP6eL6VVVQ/viewform?embedded=true" 
        target= "_blank"
        > Click here </Button>
        <AspectRatio ratio={3 / 4} maw={600} mx="auto">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLScgCOCZWTQmA-EWHNlW55S35v3UcT3ExMQs-TDKnP6eL6VVVQ/viewform?embedded=true"
            width="640"
            height="1225"
            // style={{border:'0px'}}
            // frameBorder="0"
            // marginHeight="0"
            // marginWidth="0"
          >
            Loading…
          </iframe>{' '}
        </AspectRatio>
      </Card>

      <Map
        initialViewState={{
          latitude: 26.914388250467766,
          longitude: 80.94197817059155,
          zoom: 15,
          bearing: 0,
          pitch: 0,
        }}
        style={{
          width: '500px',
          height: '100%',
          borderRight: '10px',
        }}
        mapStyle="mapbox://styles/mapbox/dark-v9"
        mapboxAccessToken={import.meta.env.VITE_MAPBOX_ACCESS_TOKEN || ''}
      >
        <GeolocateControl position="top-left" />
        <FullscreenControl position="top-left" />
        <NavigationControl position="top-left" />
        <ScaleControl />

        {pins}

        {popupInfo && (
          <Popup
            anchor="top"
            longitude={Number(popupInfo.longitude)}
            latitude={Number(popupInfo.latitude)}
            onClose={() => setPopupInfo(null)}
          >
            <div>{popupInfo.type}</div>
            <img width="100%" src={popupInfo.image} />
            <p>{popupInfo.description}</p>
          </Popup>
        )}
      </Map>

      {/*   <ControlPanel /> */}
    </Paper>
  );
};
export default MapBox;
