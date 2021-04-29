import React from 'react';
import { Map, GoogleMap, GoogleApiWrapper, Marker, overlayView, ImageMapType } from 'google-maps-react';
import { Redirect, useHistory } from 'react-router';

const mapStyles = {
  width: '58%',
  height: '600px'
};


export function MapContainer (props) {
    const { location , coordinates} = props


    return (
      <Map
        google={props.google}
        initialCenter={
            location
        style={mapStyles}
        defaultOptions={{
          maxZoom: 18,
          mapTypeControlOptions: {
            mapTypeIds: ["moon", "satellite"],
          },
        }}
        mapTypeId={google ? "moon" : "satellite"}
        defaultExtraMapTypes={[
          {
            id: "moon",
            mapType: {
              getTileUrl: function (coord, zoom) {
                return "mw1.google.com/mw-planetary/lunar/lunarmaps_v1/clem_bw/1/1/0.jpg";
              },
              maxZoom: 9,
              minZoom: 0,
              radius: 1738000,
              name: "Moon",
            },
          },
        ]}
        
        disableDefaultUI
      >
      </Map>
    );
  
}

export default GoogleApiWrapper({
  // apiKey: process.env.GOOGLE_MAPS_KEY
  src: "https://www.innovationnewsnetwork.com/wp-content/uploads/2021/02/Primordial-galaxy-696x392.jpg",
  apiKey: "AIzaSyCGltd6f1lIaVFe-Pf0Gs6v5eEGTxqDRFk",
})(MapContainer);