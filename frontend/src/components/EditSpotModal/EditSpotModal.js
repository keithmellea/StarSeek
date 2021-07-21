import React, { useState } from "react";
import * as sessionActions from "../../store/spots";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import "../EditSpotModal/EditSpotModal.css";

function LoginForm() {
    const { id } = useParams();
    const spot = useSelector((state) => state.spots[id]); 
  const dispatch = useDispatch();
  const [name, setName] = useState(spot.name);
  const [price, setPrice] = useState(spot.price);
  const [description, setDescription] = useState(spot.description);
  const [planet, setPlanet] = useState(spot.planet);
  const [system, setSystem] = useState(spot.system);
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(
      sessionActions.updateSpot({
        id: spot.id,
        name,
        price,
        description,
        system,
      })
    ).catch(async (res) => {
      const data = await res.json();
      if (data && data.errors) setErrors(data.errors);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="line"></div>
      <h1>Update Spot Info</h1>
      <ul>
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>
      <label className="input1">
        {/* Username */}
        <input
          placeholder="Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <label className="input3">
        {/* Email */}
        <input
          placeholder="Price"
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </label>
      <label className="input3">
        {/* Email */}
        <input
          placeholder="Description"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </label>
      <label className="input3">
        {/* Email */}
        <input
          placeholder="Planet"
          type="text"
          value={planet}
          onChange={(e) => setPlanet(e.target.value)}
          required
        />
      </label>
      <label className="input3">
        {/* Email */}
        <input
          placeholder="System"
          type="text"
          value={system}
          onChange={(e) => setSystem(e.target.value)}
          required
        />
      </label>
      <button className="login" type="submit">
        Update
      </button>
    </form>
  );
}

export default LoginForm;
