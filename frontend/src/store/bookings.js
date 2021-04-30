import { csrfFetch } from "./csrf";

const LOAD = "bookings/LOAD";
const DELETE_ONE = "bookings/DELETE_ONE";

const load = (list) => ({
  type: LOAD,
  list,
});

const deleteBooking = (booking) => ({
  type: DELETE_ONE,
  booking,
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

export const cancelBooking = (id) => async (dispatch) => {
  const res = await csrfFetch(`/api/bookings/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) throw res;
  const booking = await res.json();
  dispatch(deleteBooking(booking));
  return booking;
};

const bookingsReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOAD: {
        const allBookings = [];
        action.list.forEach((booking) => {
          allBookings[booking.id] = booking;
        });
        return {
          allBookings,
          ...state,
          list: action.list,
        };
      }
      case DELETE_ONE: {
        const newState = {
          ...state,
        };
        delete newState[action.booking];
        return newState;
      }
      default:
        return state;
    }
}

export default bookingsReducer;