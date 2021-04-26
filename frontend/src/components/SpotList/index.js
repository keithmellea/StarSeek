import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getSpots } from '../../store/spots'; 
import { useParams } from "react-router-dom";


const SpotList = () => {
  const dispatch = useDispatch();
  const { spotId } = useParams();



    return (
      <div>
        <div></div>
        <span></span>
      </div>
    );
}
export default SpotList;