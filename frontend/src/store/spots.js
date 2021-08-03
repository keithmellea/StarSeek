//import Spot from "../../../backend/db/models/spot";
import { csrfFetch } from "./csrf";

const LOAD = 'spots/LOAD';
const HOSTS = "hosts/LOAD";
const ADD_ONE = 'spot/ADD_ONE';
const ADD_BOOKING = "bookings/ADD_ONE";
const SET_SPOT = "spot/SET_SPOT";
const DELETE_ONE = "reviews/DELETE_ONE";


const deleteOneSpot = (spot) => ({
  type: DELETE_ONE,
  spot,
});

const setSpot = (spot) => {
  return {
    type: SET_SPOT,
    spot,
  };
};

const load = list => ({
  type: LOAD,
  list,
});

const hosts = (list) => ({
  type: HOSTS,
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

export const getHosts = () => async (dispatch) => {
  const response = await fetch("/api/hosts");

  if (response.ok) {
    const hosts = await response.json();
    dispatch(load(hosts));
  }
};

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
  list: [],
  current: null,
  spots: {}
};

export const updateSpot = (spot) => async (dispatch) => {
  const res = await csrfFetch(`/api/spots/${spot.id}`, {
    method: "PATCH",
    body: JSON.stringify(spot),
  });
  if (!res.ok) throw res;

  const data = await res.json();
  dispatch(setSpot(data.spot));
  return res;
};

export const deleteSpot = (id) => async (dispatch) => {
  const res = await csrfFetch(`/api/spots/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) throw res;
  const spot = await res.json();
  dispatch(deleteOneSpot(spot));
  return spot;
};

const spotsReducer = (state = initialState, action) => {
  let newState = { ...state };
  switch (action.type) {
      case LOAD: {
        const allSpots = [];
        action.list.forEach((spot) => {
          allSpots[spot.id] = spot;
        });
        return {
          allSpots,
          ...state,
          list: action.list,
          spots: action.spots,
        };
      }
      case ADD_ONE: {
        const newState = {
          ...state,
          [action.spot.id]: action.spot,
        };
        const spotList = newState.list.map((id) => newState[id]);
        spotList.push(action.spot);
        return newState;
      }
      case SET_SPOT: {
        const newState = {
        ...state,
        [action.spot.id]: action.spot,
      };
        return { ...state, current: state.list[action.spot.id] };
      }
      case ADD_BOOKING: {
        if (!state[action.booking.id]) {
          const newState = {
            ...state,
            [action.booking.id]: action.booking,
          };
          const bookingList = newState.list?.map((id) => newState[id]);
          bookingList?.push(action.booking);
          return newState;
        }
        return {
          ...state,
          [action.booking.id]: {
            ...state[action.booking.id],
            ...action.booking,
          },
        };
      }
      case HOSTS: {
        const allHosts = [];
        action.list.forEach((host) => {
          allHosts[host.id] = host;
        });
        return {
          allHosts,
          ...state,
          list: action.list,
        };
      }
      default:
        return state;
    }
}

export default spotsReducer;