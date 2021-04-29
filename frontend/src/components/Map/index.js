import React from 'react';
import { Map, GoogleMap, GoogleApiWrapper, Marker, overlayView, ImageMapType } from 'google-maps-react';
import { Redirect, useHistory } from 'react-router';

const mapStyles = {
  width: '58%',
  height: '600px'
};


export function MapContainer (props) {
    const { location , coordinates} = props
    // console.log("COORDINATES", coordinates[0].lat)


    return (
      <Map
        google={props.google}
        zoom={7}
        style={mapStyles}
        initialCenter={
            location
        }
      >
        {/* {coordinates.forEach((coordinate) => (
                <Marker
                  title={''}
                  name={''}
                  position={{lat:coordinate.lat, long:coordinate.long}} 
                  // onClick={Redirect  to='/'}
                />
            )
        )} */}
      </Map>
    );
  
}

export default GoogleApiWrapper({
  // apiKey: process.env.GOOGLE_MAPS_KEY
  src: "https://www.innovationnewsnetwork.com/wp-content/uploads/2021/02/Primordial-galaxy-696x392.jpg",
  apiKey: "AIzaSyCGltd6f1lIaVFe-Pf0Gs6v5eEGTxqDRFk",
})(MapContainer);