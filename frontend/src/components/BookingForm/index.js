import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { createBooking } from "../../store/spots";

import Calendar from "react-calendar";

import './Booking.css';

const BookingForm = ({user, spot, id}) => {
    console.log("spot", spot);
    const dispatch = useDispatch();
    const [booking, setBooking] = useState(" ");
    const [startDate, setStartDate] = useState("yyyy-MM-dd");
    const [endDate, setEndDate] = useState("yyyy-MM-dd");

    const updateStartDate = (e) => setStartDate(e.target.value);
    const updateEndDate = (e) => setEndDate(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newBooking = {
          booking: `${startDate} - ${endDate}`,
          userId: user.id,
          location: `${spot.name}, ${spot.planet}, ${spot.system}`,
          spotId: spot.id,
        };
        let createdBooking = await dispatch(createBooking(newBooking, id));
        setBooking("");
    }

  const openCalendar = e => {
       return <Calendar /> 
    }

    return (
      <form className="form-div" onSubmit={handleSubmit}>
        <label>
          {" "}
          Check-In
          <input
            type="date"
            placeholder="Add date"
            required
            value={startDate}
            onChange={updateStartDate}

          />
        </label>
        <label>Checkout</label>
        <input
          type="date"
          placeholder="Add date"
          required
          value={endDate}
          onChange={updateEndDate}
        />
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
      </form>
    );
}

export default BookingForm;