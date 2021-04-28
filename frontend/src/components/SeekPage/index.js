import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SpotList from "../SpotList/index";

// import GoogleApiWrapper from "../../components/Map/CustomMap/index";


import { getSpots } from "../../store/spots"; 
import GoogleApiWrapper from "../Map";


import "./Seek.css";

const SeekPage = () => {

const dispatch = useDispatch();

 const spots = useSelector((state) => {
   return state.spots.list;
 });

useEffect(() => {
  dispatch(getSpots());
}, [dispatch]);

console.log(spots);

if (!spots) {
  return null;
}
    return (
      <div className='page-div'>
        <SpotList />
        <div className="map">
          <GoogleApiWrapper/>
        </div>
      </div>
    );
}

export default SeekPage;