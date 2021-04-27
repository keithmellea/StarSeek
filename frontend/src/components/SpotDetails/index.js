import { getSpots } from "../../store/spots";
import './SpotDetails.css';

function SpotDetails({ spot }) {
//   const dispatch = useDispatch();
//   const cartItem = useSelector(getSpotById(spot.id));

  return (
    <div>
      <div className="spot-details">
        <img
          className="spot-img"
          src="https://cdn.mos.cms.futurecdn.net/XNRcoHujh5mZHmPQZzYbgH.jpg"
        ></img>
          <div className="desc1">{`${spot.name} - ${spot.planet}`}</div>
          <div className="desc2">{`${spot.hostId} - In ${spot.system}`}</div>
      </div>
    </div>
  );
}

export default SpotDetails