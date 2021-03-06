import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import * as sessionActions from "../../store/session";
import Profile from '../Profile/index';

import './ProfileButton.css';

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  let icon = document.getElementsByClassName("icon");

  const openMenu = (e) => {
    e.target.display = "none";
    if (showMenu) return;
    setShowMenu(true);

  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  let hideButton;
if (showMenu === false) {
  hideButton = <button className="icon" onClick={openMenu}>
    <i className="fas fa-user-astronaut" />
  </button>;
}

  return (
    <>
      {hideButton}
      <div className="profile">
        {showMenu && (
          <div className="profile-dropdown">
            <button onClick={openMenu}>
              <i className="fas fa-user-astronaut" />
            </button>
            <NavLink exact to="/profile">
              <button>Profile</button>
            </NavLink>
            <div>
              <button onClick={logout}>Log Out</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default ProfileButton;
