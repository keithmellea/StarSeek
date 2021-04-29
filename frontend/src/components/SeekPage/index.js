import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SpotList from "../SpotList/index";

import SimpleMap, { MapContainer } from "../../components/Map/CustomMap/index";


import { getSpots } from "../../store/spots"; 
//import GoogleApiWrapper from "../Map";
import { useSearch } from "../../context/SearchContext";

import "./Seek.css";

const SeekPage = () => {

const {
            // location,
            // start_date,
            // end_date,
            guests,
      } = useSearch()


 const spots = useSelector((state) => {
   return state.spots.list;
 });

  let  coordinates = () => { 
      let coordinateObjects = []
    spots.forEach((listing) => { 
        const lat = spots.latitude;
        const long = spots.longitude;
        const id = spots.id
        let coorObj = {spots, spots, id}
        coordinateObjects.push(coorObj)
    })
    return coordinateObjects;
  }

const dispatch = useDispatch();


useEffect(() => {
  dispatch(getSpots());
}, [dispatch]);

console.log(spots);

if (!spots) {
  return null;
}
    return (
      <div className="page-div">
        <SpotList />
        <div className="map">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Andromeda_Galaxy_560mm_FL.jpg/1280px-Andromeda_Galaxy_560mm_FL.jpg"></img>
        </div>
      </div>
    );
}

export default SeekPage;