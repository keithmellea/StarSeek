import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";

const SimpleMap = (props) => {
  const getMapOptions = (maps) => {
    return {
      disableDefaultUI: true,
      mapTypeControl: true,
      streetViewControl: true,
      styles: [
        {
          featureType: "poi",
          elementType: "labels",
          stylers: [{ visibility: "on" }],
        },
      ],
    };
  };

  const [center, setCenter] = useState({ lat: 11.0168, lng: 76.9558 });
  const [zoom, setZoom] = useState(11);
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCGltd6f1lIaVFe-Pf0Gs6v5eEGTxqDRFk" }}
        defaultCenter={center}
        defaultZoom={zoom}
        options={getMapOptions}
      >
        <Marker lat={11.0168} lng={76.9558} name="My Marker" color="blue" />
      </GoogleMapReact>
    </div>
  );
};

export default SimpleMap;

export default GoogleApiWrapper({
  src:
    "https://www.innovationnewsnetwork.com/wp-content/uploads/2021/02/Primordial-galaxy-696x392.jpg",
  apiKey: "AIzaSyCGltd6f1lIaVFe-Pf0Gs6v5eEGTxqDRFk",
})(MapContainer);
