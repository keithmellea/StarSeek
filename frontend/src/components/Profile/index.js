import React, { useState, useEffect } from "react";
import { useSelector,  useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getBookings } from '../../store/bookings';

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

 console.log(bookings);

  return (
    <>
      <div className="profile-container">
        <h1>{sessionUser.username}</h1>
        <h1>{sessionUser.email}</h1>
        <h2>Bookings</h2>
        {bookings.map((booking) => {
            const bookingVals = (
            <div>
              <h2>{booking.location}</h2>
              <div className="booking">{booking.booking}</div>
            </div>
            );
          return bookingVals;
        })}
      </div>
    </>
  );
}

export default Profile;
