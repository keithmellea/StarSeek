import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { createBooking } from "../../store/spots";

import Calendar from "react-calendar";

import './Booking.css';

const BookingForm = ({user, spot, host}) => {

    const dispatch = useDispatch();
    const [booking, setBooking] = useState(" ");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newBooking = {
            booking,
            userId: user.id,
            spotId: spot.id,
            hostId: host
        };
        let createdBooking = await dispatch(createBooking(newBooking));
        setBooking("");
    }

    return (
      <form className="form-div">
        <label>
          {" "}
          Check-In
          <input type="start-date" placeholder="Add date" required />
        </label>
        <label>Checkout</label>
        <input type="start-date" placeholder="Add date" required />
        <select className="Guests">
          <option value="" disabled selected>
            Guests
          </option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
        </select>
        <button className="submit-button" type="submit">
          Book
        </button>
        <Calendar />
      </form>
    );
}

export default BookingForm;