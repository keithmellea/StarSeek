import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getSpots } from '../../store/spots'; 
import { NavLink, useParams } from "react-router-dom";
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
        <ul className="spot-list">
          {spots?.map((spot) => (
            <div className="spots-div">
              <NavLink key={spot.name} to={`/spots/${spot.id}`}>
                <div className="spot-details">
                  <img
                    className="spot-img"
                    src="https://cdn.mos.cms.futurecdn.net/XNRcoHujh5mZHmPQZzYbgH.jpg"
                  ></img>
                  <div className="desc1">{`${spot.name} - ${spot.planet}`}</div>
                  <div className="desc2">{`${spot.hostId} - In ${spot.system}`}</div>
                </div>
              </NavLink>
            </div>
          ))}
        </ul>
      </div>
    );
}
export default SpotList;

// <SpotDetails key={spot.id} spot={spot} />;