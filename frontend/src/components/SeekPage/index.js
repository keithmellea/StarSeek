import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SpotList from "../SpotList/index";

import MapContainer  from "../../components/Map";


import { getSpots } from "../../store/spots"; 
//import GoogleApiWrapper from "../Map";
import { useSearch } from "../../context/SearchContext";

import "./Seek.css";

const SeekPage = () => {

const {      // location,
            // start_date,
            // end_date,
            guests,
      } = useSearch()

 const spots = useSelector((state) => {
   return state.spots.list;
 });

const dispatch = useDispatch();

useEffect(() => {
  dispatch(getSpots());
}, [dispatch]);

if (!spots) {
  return null;
}

spots.forEach((spot) => {
  let marker = document.createElement("img")
  marker.src =
    "https://upload.wikimedia.org/wikipedia/commons/8/88/Map_marker.svg";
  marker.id = spot.name.split(" ")[0];
  marker.className = "spot-marker";
  console.log(document.body);
  if (!document.body.contains(marker)) {
  document.body.appendChild(marker);
  }
  let bubble = document.createElement("div");
  bubble.className = "bubble";
  bubble.id = `${spot.name.split(" ")[0]}-bubble`;
  console.log(bubble);
  marker.addEventListener('click', e => {
    if (bubble.style.display === "none") {
    bubble.style.position = "absolute";
    bubble.style.top = `500px`;
    bubble.style.right = `500px`;
    bubble.style.display = "block";
    bubble.innerHTML = spot.name;
    console.log(e.clientX);
    }
    else {
      bubble.style.display = "none";
    }
  })
  document.body.appendChild(bubble);
})

// console.log("markers", document.querySelectorAll("bubble"));

    return (
      <div className="page-div">
        {" "}
        <SpotList />
        <div className="map">
          <MapContainer />
        </div>
      </div>
    );
}

export default SeekPage;