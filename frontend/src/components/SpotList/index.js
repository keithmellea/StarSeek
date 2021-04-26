import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getSpots } from '../../store/spots'; 


const SpotList = () => {
  const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getSpots());
    }, [dispatch])
    return (
        <div>
            <span>Hello World</span>
        </div>
    );
}

export default SpotList;