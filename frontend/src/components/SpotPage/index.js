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
    const photos = spot?.photos.split(" ");
    const firstPhoto = photos?.splice(0, 1);
    const nextPhotos = photos?.splice(0, 4);
console.log(nextPhotos + "- nextPhotos");
useEffect(() => {
  dispatch(getOneSpot(id));
}, [id]);

  if (!spot) return null;

    return (
      <div>
        <div className="container-div">
          <div className="spot-div">
            <div className="name">{spot.name}</div>
            <div className="rating">{`💫 ${spot.avg_Rating}`}</div>
            <div className="planet">{`${spot.planet}, ${spot.system}`}</div>
              <img className="firstPhoto" src={firstPhoto}></img>
              <img className="secondPhoto" src={nextPhotos[0]}></img>
              <img className="thirdPhoto" src={nextPhotos[1]}></img>
              <img className="fourthPhoto" src={nextPhotos[2]}></img>
              {photos.map((photo) => {
                console.log(photo);
                return <img className="otherPhotos" src={photo}></img>;
              })}
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