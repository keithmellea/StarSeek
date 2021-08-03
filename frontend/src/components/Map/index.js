import React from "react";

function MyComponent() {
  return (
   <img id="map" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Andromeda_Galaxy_560mm_FL.jpg/1280px-Andromeda_Galaxy_560mm_FL.jpg"></img> 
  //  <img id="marker" src="https://upload.wikimedia.org/wikipedia/commons/8/88/Map_marker.svg"></img> 
  )
  }

export default React.memo(MyComponent);
