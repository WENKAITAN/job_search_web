import React, { useEffect, useState } from "react";
import GoogleMapReact from 'google-map-react';
import Marker from './Marker'
export default function Map({ jobs }){
  const [currentLocation, setCurrentLocation] = useState({
      longitude: "",
      latitude: "",
  })
  const defaultProps = {
    center: {lat: 40.73, lng: -73.93}, 
    zoom: 12
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function(position) {
        setCurrentLocation({
            ...currentLocation,
            longitude: position.coords.longitude,
            latitude: position.coords.latitude
        })
      });
  }, [currentLocation])


  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '70%', margin: "0 auto"}}>

      <GoogleMapReact
        bootstrapURLKeys={{ 
            key: "AIzaSyAI00jbuLr0sHhWIQREKevlx287SVYTr40",
            language: "en",
            region: "US"
         }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        
      >
          {jobs.map(({latitude, longitude, id, title, contract_time, category: {label}, company: {display_name}}) => {
              return(
                    <Marker
                        key={id}
                        lat={latitude}
                        lng={longitude}
                        title={title}
                        contract_time={contract_time}
                        display_name={display_name}
                        label={label}
                    />
              )
          })}
      </GoogleMapReact>
    </div>
  );
}

