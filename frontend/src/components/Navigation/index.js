import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormModal";
import "./Navigation.css";
import Profile from '../Profile/index';

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <NavLink to="/signup">Sign Up</NavLink>
      </>
    );
  }

  return (
    <ul className="navbar">
      <li className="home">
        <NavLink exact to="/">
          <button>Home</button>
        </NavLink>
      </li>
      <div className="seek">
        <NavLink exact to="/spots">
          <button>Seek</button>
        </NavLink>
      </div>
      <div className="auth">{isLoaded && sessionLinks}</div>
    </ul>
  );
}

export default Navigation;
