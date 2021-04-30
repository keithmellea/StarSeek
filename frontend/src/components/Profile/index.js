import React, { useState, useEffect } from "react";
import { useSelector,  useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getBookings, cancelBooking } from '../../store/bookings';

import "./Profile.css";

function Profile() {
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();

  if (!sessionUser) {
    history.push("/");
  }

 const bookings = useSelector((state) => {
   let bookingsList = state.bookings.list;
   let userId = state.session.user.id;
   let userBookings = [];
   bookingsList.forEach(booking => {
        if (booking.userId === userId) userBookings.push(booking);        
   });
   console.log("bookings", userBookings);
   return userBookings;
   
  });

 useEffect(() => {
   dispatch(getBookings());
 }, [dispatch]);

    const cancelBookingButton = (id) => {
      let result = window.confirm("Are you sure you want to cancel your trip?");
      if (result) {
        dispatch(cancelBooking(id));
      }
    };

  return (
    <>
      <div className="profile-container">
        <h1 className="name">{sessionUser.username}</h1>
        <h1 className="email">{sessionUser.email}</h1>

        <div className="bookings">
          <h2>Bookings</h2>
          {bookings.map((booking) => {
            const bookingId = bookings.indexOf(booking);
              
            const bookingVals = (
              <ul className="booking">
                <li>
                  <h2>{booking.location}</h2>
                  <div>{booking.booking}</div>
                  <div>{`Guests: ${booking.guests}`}</div>{" "}
                  <button
                    type="button"
                    onClick={() => cancelBookingButton(bookingId)}
                  >
                    Cancel Trip
                  </button>
                </li>
              </ul>
            );
            return bookingVals;
          })}
        </div>
      </div>
    </>
  );
}

export default Profile;
