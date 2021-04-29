import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SpotList from "../SpotList/index";

// import GoogleApiWrapper from "../../components/Map/CustomMap/index";


import { getSpots } from "../../store/spots"; 
import GoogleApiWrapper from "../Map";
import { useSearch } from "../../context/SearchContext";

import "./Seek.css";

const SeekPage = () => {

//   const {
//     name,
//     hostId,
//     avg_Rating,
//     system,
//     planet,
//     region,
//     arrangements
//   } = useSearch();

// const onSubmit = async (e) => {
//   e.preventDefault();

//   let res = await Geocode.fromAddress(location);
//   const { lat, lng } = res.results[0].geometry.location;
//   let address = { lat, lng };
//   setLocation(address);
//   let searchFrom = {
//     address,
//     start_date,
//     end_date,
//     guests,
//   };

//   history.push("/listings");
// };

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