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
        initialCenter={location}
        style={mapStyles}
        mapType={"moon"}
        defaultExtraMapTypes={[
          {
            id: "moon",
            mapType: {
              getTileUrl: function (coord, zoom) {
                return "https://mw1.google.com/mw-planetary/lunar/lunarmaps_v1/clem_bw/1/1/0.jpg";
              },
              maxZoom: 9,
              tileSize: new props.google.maps.Size(256, 256),
              minZoom: 0,
              radius: 1738000,
              name: "Moon",
            },
          },
        ]}
        defaultOptions={{
          maxZoom: 18,
          mapTypeControlOptions: {
            mapTypeIds: ["moon", "satellite"],
          },
        }}
        // disableDefaultUI
      ></Map>
    );
           
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCGltd6f1lIaVFe-Pf0Gs6v5eEGTxqDRFk",
})(MapContainer);