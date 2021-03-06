import React, { useState } from "react";
import { useHistory } from "react-router";
import "./Homepage.css";
import Footer from '../Footer/index';

import Calendar from "react-calendar";


function Homepage(props) {
  const [guests, setGuests] = useState("");
  const [location, setLocation] = useState("");

  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();

    history.push("/spots");
  };

  return (
    <>
      <div className="homepage-container">
        <form className="search-form-container" onSubmit={onSubmit}>
          <label
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="input1"
          >
            {" "}
            Location
            <input placeholder="Where to, Seeker?"></input>
          </label>
          <label className="input2">
            {" "}
            Arrival
            <input type="date" placeholder="Add Date"></input>
          </label>
          <label className="input3">
            {" "}
            Departure
            <input type="date" placeholder="Add Date"></input>
          </label>
          <label className="input4">
            {" "}
            Guests
            <input
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              placeholder="Add Guests"
            ></input>
          </label>
          <button>Seek</button>
        </form>
      </div>c
    </>
  );
}

export default Homepage;
