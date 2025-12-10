import fire from "../../assets/fire.png";
import star from "../../assets/star.png";
import party from "../../assets/partying-face.png";
import "./navBar.css";
export default function NavBar() {
  return (
    <header className="nav">
          <h1>WhatToWatch</h1>
          <nav className="nav-links">
              <a href="">Popular <img src={fire} alt="Fire emoji" className="navbar_emoji" /></a>
              <a href="">Top Rated <img src={star} alt="Star emoji" className="navbar_emoji" /></a>
              <a href="">Upcoming <img src={party} alt="Party emoji" className="navbar_emoji" /></a>
          </nav>
    </header>
  );
}