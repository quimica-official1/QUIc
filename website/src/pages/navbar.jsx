import React, { useState, useRef, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const dropdownRef = useRef();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="home">
      <nav className="navbar">
        <div className="nav-left" onClick={() => navigate("/")}>
          <img src="/quimicaLogoWhite.png" alt="logo" />
          <h2>QUIMICA</h2>
        </div>

        {/* Hamburger */}
        <div
          className="menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>

        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li>
            <NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/events" onClick={() => setMenuOpen(false)}>Events</NavLink>
          </li>
          <li>
            <NavLink to="/ourTeam" onClick={() => setMenuOpen(false)}>Our Team</NavLink>
          </li>
          <li>
            <NavLink to="/faculty" onClick={() => setMenuOpen(false)}>Faculty</NavLink>
          </li>
          <li>
            <NavLink to="/newsletter" onClick={() => setMenuOpen(false)}>Newsletter</NavLink>
          </li>

          {/* DROPDOWN */}
          <li className="dropdown" ref={dropdownRef}>
            <button
              className="dropdown-btn"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Others ▾
            </button>

            <ul className={`dropdown-menu ${dropdownOpen ? "show" : ""}`}>
              <li>
                <NavLink to="/gallery" onClick={() => {
                  setDropdownOpen(false);
                  setMenuOpen(false);
                }}>
                  Gallery
                </NavLink>
              </li>
              <li>
                <NavLink to="/courseStructure" onClick={() => {
                  setDropdownOpen(false);
                  setMenuOpen(false);
                }}>
                  Course Structure
                </NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;