import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SpotList from '../SpotList/index';

import { getSpots } from "../../store/spots"; 
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
      <div>
        <SpotList />
      </div>
    );
}

export default SeekPage;