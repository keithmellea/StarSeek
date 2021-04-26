//import Spot from "../../../backend/db/models/spot";

const LOAD = 'spots/LOAD';

const load = (spots) => ({
  type: LOAD,
  spots,
});

export const getSpots = () => async dispatch => {
    const response = await fetch('/api/spots')

    if (response.ok) {
        const spots = await response.json();
        dispatch(load(spots));
    }
}
const initialState = {
  spots: [],
  types: [],
};

const spotsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD:
            console.log("hello")
          const allSpots = {};
        action.spots.forEach(spot => {
            allSpots[spot.id] = spot;
        });
        return {
            ...allSpots,
            ...state,
            spots: action.spots
        }
        default:
            return state;
    }
}

export default spotsReducer;