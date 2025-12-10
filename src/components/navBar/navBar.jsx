import { NavLink } from "react-router-dom";
import fire from "../../assets/fire.png";
import star from "../../assets/star.png";
import party from "../../assets/partying-face.png";
import "./navBar.css";

export default function NavBar() {
  return (
    <header className="nav">
      <h1>WhatToWatch</h1>
      <nav className="nav-links">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          {({ isActive }) => (
            <>
              Popular{" "}
              <img
                src={fire}
                alt="Fire emoji"
                className={
                  isActive ? "navbar_emoji active-emoji" : "navbar_emoji"
                }
              />
            </>
          )}
        </NavLink>
        <NavLink
          to="/top-rated"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          {({ isActive }) => (
            <>
              Top Rated{" "}
              <img
                src={star}
                alt="Star emoji"
                className={
                  isActive ? "navbar_emoji active-emoji" : "navbar_emoji"
                }
              />
            </>
          )}
        </NavLink>
        <NavLink
          to="/upcoming"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          {({ isActive }) => (
            <>
              Upcoming{" "}
              <img
                src={party}
                alt="Party emoji"
                className={
                  isActive ? "navbar_emoji active-emoji" : "navbar_emoji"
                }
              />
            </>
          )}
        </NavLink>
      </nav>
    </header>
  );
}
