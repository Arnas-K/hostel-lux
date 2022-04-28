import React, { useState } from "react";
import "./Navbar.css";
import Hamburger from "./Hamburger";
import logo from "../images/le.png";
// components

export default function Navbar(props) {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <a href="#" className="nav-logo">
            Bruh gaming
          </a>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <a href="#" className="nav-links" onClick={handleClick}>
                Kambariai
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-links" onClick={handleClick}>
                Kainos
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-links" onClick={handleClick}>
                Kontaktai
              </a>
            </li>
          </ul>
          <div className="hamburger">
            <Hamburger />
          </div>
        </div>
      </nav>
    </>
  );
}
