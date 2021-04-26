import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getSpots } from '../../store/spots'; 
import { useParams } from "react-router-dom";
import SpotDetails from '../SpotDetails/index';

import './SpotList.css'

const SpotList = () => {
  const dispatch = useDispatch();
  const { spotId } = useParams();
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
       { <ul className="spot-list">
           {spots?.map(spot => (
               <li>{`${spot.name} - ${spot.planet}`}
               <div>{`${spot.hostId} - In ${spot.system}`}</div></li>
           ))}
           </ul>
           }
      </div>
    );
}
export default SpotList;

// <SpotDetails key={spot.id} spot={spot} />;