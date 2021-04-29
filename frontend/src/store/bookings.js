import { csrfFetch } from "./csrf";

const LOAD = "bookings/LOAD";

const load = (list) => ({
  type: LOAD,
  list,
});

export const getBookings = () => async (dispatch) => {
  const res = await csrfFetch(`/api/bookings`);
  if (res.ok) {
    const bookings = await res.json();
    console.log("Bookings STORE", bookings);
    dispatch(load(bookings));
  }
};

const initialState = {
  list: [],
};

const bookingsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD: {
          const allBookings = [];  
        action.list.forEach(booking => {
            allBookings[booking.id] = booking;
        });
        return {
            allBookings,
            ...state,
            list: action.list,
        }
      }
        default:
            return state;
    }
}

export default bookingsReducer;