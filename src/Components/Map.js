import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const Map = () => {
  const mapStyles = {
  
    height: '500px',
    width: '100%',
    
  };

  const defaultMapOptions = {
    center: { lat: 21.3069, lng: 76.2226 }, // Centered at Burhanpur by default
    zoom: 15, // Adjust zoom level as desired
  };

  return (
    <div className="map" style={{padding:"25px"}}>

    
    <LoadScript
      googleMapsApiKey={'AIzaSyB1cUVG7urp8pqD5L_f9y21ifPWUYXjyyE'}
      libraries={['places']}
    >
      <GoogleMap
        mapContainerStyle={mapStyles}
        center={defaultMapOptions.center}
        zoom={defaultMapOptions.zoom}
      />
    </LoadScript>
    </div>
  );
};

export default Map;