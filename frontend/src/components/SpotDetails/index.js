import { getSpots } from "../../store/spots";

function SpotDetails({ spot }) {
//   const dispatch = useDispatch();
//   const cartItem = useSelector(getSpotById(spot.id));

  return (
    <li className="spot-details">
        <span>{spot.name}</span>
    </li>
      

  )
}

export default SpotDetails