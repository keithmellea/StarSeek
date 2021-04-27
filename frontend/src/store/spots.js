//import Spot from "../../../backend/db/models/spot";

const LOAD = 'spots/LOAD';
const ADD_ONE = 'spot/ADD_ONE';

const load = list => ({
  type: LOAD,
  list,
});

const addOneSpot = spot => ({
  type: ADD_ONE,
  spot,
});

export const getSpots = () => async dispatch => {
    const response = await fetch('/api/spots')

    if (response.ok) {
        const spots = await response.json();
        dispatch(load(spots));
    }
}

export const getOneSpot = (id) => async (dispatch) => {
  const res = await fetch(`/api/spots/${id}`);

  if (res.ok) {
    const spot = await res.json();
    dispatch(addOneSpot(spot));
  }
}

const initialState = {
  list: []
};

const spotsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD: {
          const allSpots = [];  
        action.list.forEach(spot => {
            allSpots[spot.id] = spot;
        });
        return {
            allSpots,
            ...state,
            list: action.list,
        }
      }
      case ADD_ONE: {
        const newState = {
          ...state,
          [action.spot.id]: action.spot
        };
        const spotList = newState.list.map(id => newState[id]);
        spotList.push(action.spot);
        return newState;
      }
        default:
            return state;
    }
}

export default spotsReducer;