import React, { useState } from "react";
import "./Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useTranslation } from "react-i18next";
import lithuanianFlag from "../images/flags/lithuanian.png";
import ukFlag from "../images/flags/english.png";

const lngs = {
  lt: { icon: lithuanianFlag },
  en: { icon: ukFlag },
};

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <a href="#" className="nav-logo">
            Hostel Lux
          </a>
          {/* Language selector */}
          <div>
            {Object.keys(lngs).map((lng) => (
              <button
                key={lng}
                style={{
                  margin: "0.75em",
                  maxHeight: "50px",
                  maxWidth: "50px",
                }}
                type="submit"
                onClick={() => i18n.changeLanguage(lng)}
              >
                <img src={lngs[lng].icon} />
              </button>
            ))}
          </div>
          {/* Main navigation menu */}
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <a href="#kambariai" className="nav-links" onClick={handleClick}>
                {t("navbar.rooms")}
              </a>
            </li>
            <li className="nav-item">
              <a href="#kainos" className="nav-links" onClick={handleClick}>
                {t("navbar.prices")}
              </a>
            </li>
            <li className="nav-item">
              <a href="#kontaktai" className="nav-links" onClick={handleClick}>
                {t("navbar.contacts")}
              </a>
            </li>
            <li className="nav-item">
              <a href="#kaip-rasti" className="nav-links" onClick={handleClick}>
                {t("navbar.location")}
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
