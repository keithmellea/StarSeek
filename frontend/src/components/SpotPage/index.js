import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSpots } from "../../store/spots";
import { useParams } from "react-router-dom";
import { getOneSpot } from '../../store/spots';

import './SpotPage.css';

const SpotPage = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const spot = useSelector((state) => state.spots[id]); 
console.log(id);
const spots = useSelector((state) => {
  return state.spots.list;
});

useEffect(() => {
  dispatch(getOneSpot(id));
}, [id]);

  if (!spot) return null;

    return (
      <div>
        <div className="container-div">
          <div className="spot-div">
            <div className="name">{spot.name}</div>
            <div className="rating">{spot.avg_Rating}</div>
            <div className="planet">{spot.planet}</div>
            <div className="system">{spot.system}</div>
            <div className="photos">Photos</div>
            <div className="arrangements">Arrangements</div>
            <div className="host">{spot.hostId}</div>
            <div className="description">{spot.description}</div>
            <div className="reviews">Reviews</div>
          </div>
        </div>
      </div>
    );
}

export default SpotPage;