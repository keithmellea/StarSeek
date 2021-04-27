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
            <img className="fifthPhoto" src={nextPhotos[3]}></img>
            {photos.map((photo) => {
              console.log(photo);
              return <img className="otherPhotos" src={photo}></img>;
            })}
            <div className="arrangements">{`${spot.arrangements} hosted by ${spot.hostId}`}</div>
            <div className="description">{spot.description}</div>
            <div className="reviews">Reviews</div>
            <div className="price">{`${spot.price} / night`}</div>
            <div className="book">
              <form>
                <input type="start-date" placeholder="Check-in" required />
                <input type="start-date" placeholder="Check-out" required />
                <select placeholder="Guests">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
                <button className="submit-button" type="submit">Book</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
}

export default SpotPage;