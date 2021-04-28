//import Spot from "../../../backend/db/models/spot";
import { csrfFetch } from "./csrf";

const LOAD = 'spots/LOAD';
const ADD_ONE = 'spot/ADD_ONE';
const ADD_BOOKING = "bookings/ADD_ONE";

const load = list => ({
  type: LOAD,
  list,
});

const addOneSpot = spot => ({
  type: ADD_ONE,
  spot,
});

const addOneBooking = (booking) => ({
  type: ADD_BOOKING,
  booking,
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

export const createBooking = (newBooking, id) => async (dispatch) => {
  const res = await csrfFetch(`/api/spots/${id}/bookings`, {
    method: "POST",
    body: JSON.stringify(newBooking),
  });

  if (!res.ok) throw res;
  const booking = await res.json();
  console.log("new booking ", booking);
  dispatch(addOneBooking(booking));
  return booking;
};

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
      case ADD_BOOKING: {
        if (!state[action.booking.id]) {
        const newState = {
          ...state,
          [action.booking.id]: action.booking
        };
        const bookingList = newState.list?.map(id => newState[id]);
        bookingList?.push(action.booking);
        return newState;
      }
      return {
        ...state,
        [action.booking.id]: {
          ...state[action.booking.id],
          ...action.booking,
        }
        }
      };
        default:
            return state;
    }
}

export default spotsReducer;