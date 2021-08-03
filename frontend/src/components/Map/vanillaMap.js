// function initMap() {
//   // Create the script tag, set the appropriate attributes
//   var script = document.createElement("script");

//   // Attach your callback function to the `window` object
//   window.initMap = function () {
//     // JS API is loaded and available
//   };

//   // Append the 'script' element to 'head'
//   document.head.appendChild(script);

//   const map = new google.maps.Map(document.getElementById("map"), {
//     center: { lat: 0, lng: 0 },
//     zoom: 0,
//     streetViewControl: false,
//     mapTypeControlOptions: {
//       mapTypeIds: ["moon"],
//     },
//   });
//   const moonMapType = google.maps.ImageMapType({
//     getTileUrl: function (coord, zoom) {
//       const bound = Math.pow(2, zoom);
//       return "https://upload.wikimedia.org/wikipedia/commons/8/8c/Andromeda_Galaxy_560mm_FL.jpg";
//     },
//     tileSize: new google.maps.Size(1028, 1028),
//     maxZoom: 9,
//     minZoom: 0,
//     radius: 1738000,
//     name: "Moon",
//   });
//   map.mapTypes.set("moon", moonMapType);
//   map.setMapTypeId("moon");
// }
