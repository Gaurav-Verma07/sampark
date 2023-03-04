import React from 'react'
import GoogleMapReact from 'google-map-react'
// import './map.css'

const SimpleMap = ({ location, zoomLevel }: any) => (
  <div className="map">
    <h2 className="map-h2">Come Visit Us At Our Campus</h2>

    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyCVrp5nlNyegc98V9ueMQaMqac5YMI769c' }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
        >
          {/* <LocationPin
            lat={location.lat}
            lng={location.lng}
            text={location.address}
          /> */}
        </GoogleMapReact>
      </div>
    </div>
  )

  export default SimpleMap;