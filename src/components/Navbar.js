import React, { useState } from "react";
import "./Navbar.css";
import logo from "../images/le.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
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
              <a href="#kambariai" className="nav-links" onClick={handleClick}>
                Kambariai
              </a>
            </li>
            <li className="nav-item">
              <a href="#kainos" className="nav-links" onClick={handleClick}>
                Kainos
              </a>
            </li>
            <li className="nav-item">
              <a href="#kontaktai" className="nav-links" onClick={handleClick}>
                Kontaktai
              </a>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {click ? <CloseIcon /> : <MenuIcon />}
          </div>
        </div>
      </nav>
    </>
  );
}
