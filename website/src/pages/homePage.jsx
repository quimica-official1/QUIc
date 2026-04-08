

import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../styles/homePage.css";
import Footer from "./footer";
import {  useRef, useEffect } from "react";



const HomePage = () => {

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

const dropdownRef = useRef();

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

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-left">
          <img src="/quimicaLogoWhite.png" alt="logo" />
          <h2>QUIMICA</h2>
        </div>

        <div
          className="menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>

        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li><a href="/">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><NavLink to="/events">Events</NavLink></li>
          <li><NavLink to="/ourTeam">Our Team</NavLink></li>
          <li><NavLink to="/faculty">Faculty</NavLink></li>
          <li><NavLink to="/newsletter">Newsletter</NavLink></li>
          {/* <li><NavLink to="/gallery">Gallery</NavLink></li>
          <li><NavLink to="/courseStructure">Course Structure</NavLink></li> */}

<li className="dropdown" ref={dropdownRef}>
  <button
    className="dropdown-btn"
    onClick={() => setDropdownOpen(!dropdownOpen)}
  >
    Others ▾
  </button>

  <ul className={`dropdown-menu ${dropdownOpen ? "show" : ""}`}>
    <li>
      <NavLink to="/gallery" onClick={() => setDropdownOpen(false)}>
        Gallery
      </NavLink>
    </li>
    <li>
      <NavLink to="/courseStructure" onClick={() => setDropdownOpen(false)}>
        Course Structure
      </NavLink>
    </li>
  </ul>
</li>
        </ul>
      </nav>

      {/* HERO */}
      <section className="hero" id="home">

  {/* VIDEO BACKGROUND */}
  <video className="hero-video" autoPlay loop muted>
    <source src="/background.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>



<div className="video-btn">
  <button
    onClick={() => {
      document.getElementById("quimica26").scrollIntoView({ behavior: "smooth" });
    }}
  >
    <p>Live Events</p>
  </button>
</div>




  {/* HERO CONTENT */}
  <div className="hero-content">
    <div className="hero-left">
      <div className="bit-pill"> <span style={{color:"#ff7a00"}}>B.I.T </span> SINDRI</div>

      <h1 className="title">
        <span>QUIMICA</span>
      </h1>

      <div className="society-pill">
        Chemical Engineering  <span style={{color:"#ff7a00"}}>Society</span> 
      </div>

      <div className="hero-buttons">
        {/* <button
          className="primary-btn"
          onClick={() => navigate("/register")}
        >
          REGISTER
        </button> */}
      </div>
    </div>
  </div>
      </section>

      {/* ABOUT */}
      <section className="about" id="about">
        <h2 className="section-title">ABOUT US</h2>

        <div className="about-container">
          <div className="about-img-box">
            <img src="/assets/department2.png" alt="BIT Sindri" />
            <div className="location-tag">
              <span style={{color:"#ff7a00"}}>Office Location:</span> MC 31 Chemical Department Building
            </div>
          </div>

          <div className="about-text-box">
            <p>
              Quimica is the annual technical Colloquium and an extended branch
              of the Chemical Engineering Department's student body.
            </p>

            <p>
              The foundation of this organization was laid by ambitious students
              and now includes Professors, Alumni, and Professionals.
            </p>

            <p>
              Significant events include Shaastra, Tech Kriti, Advaita,
              Scintilla, and career seminars.
            </p>
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section className="events">
        <h2 className="section-title">OUR EVENTS</h2>


<section className="featured-event" id="quimica26"> 
  <div className="event-container main-event-container">

    {/* LEFT SIDE → Poster with border */}
    <div className="event-poster featured-poster">
      <img src="/assets/quimica2k26.jpeg" alt="Quimica 26" />
    </div>

    {/* RIGHT SIDE → (optional, if you want same layout) */}
    <div className="event-details">
      <h3>QUIMICA'26</h3>
      <p>
        The Chemical Engineering Society organizes an annual technical
        extravaganza at BIT Sindri.
      </p>
       {/* <button
              className="primary-btn"
              onClick={() => navigate("/register")}
            >
              REGISTER
            </button> */}
    </div>
  </div>
</section>

        {/* QUIMICA 25 */}
        <div className="event-container">
          <div className="event-poster">
            <img src="/assets/Quimica25.jpg" alt="Quimica 25" />
          </div>

          <div className="event-details">
            <h3>QUIMICA'25</h3>
            <p>
              The Chemical Engineering Society organizes an annual technical
              extravaganza at BIT Sindri.
            </p>

            <button
              className="primary-btn"
              onClick={() => navigate("/quimica25")}
            >
              EXPLORE
            </button>
          </div>
        </div>

        {/* QUIMICA 23 */}
        <div className="event-container">
          <div className="event-poster">
            <img src="/assets/Quimica23.jpg" alt="Quimica 23" />
          </div>

          <div className="event-details">
            <h3>QUIMICA'23</h3>
            <p>
              The Chemical Engineering Society organizes an annual technical
              extravaganza at BIT Sindri.
            </p>

            <button
              className="primary-btn"
              onClick={() => navigate("/quimica23")}
            >
              EXPLORE
            </button>
          </div>
        </div>
      </section>

      {/*Segments*/}
      <section id="segments" className="segments fade-section">
        <h2>Our Segments</h2>
        <div className="segments-grid">
          <div className="card"><img src="/assets/Behind_the_breakthrough.jpg" alt="" />Behind the Breakthrough</div>
          <div className="card"><img src="/assets/Then_vs_now.jpg" alt="" />Then vs Now</div>
          <div className="card"><img src="/assets/chess.png" alt="" />CHESS</div>
          <div className="card"><img src="/assets/chemshot.png" alt="" />Chemshot</div>
          <div className="card"><img src="/assets/What_if.jpg" alt="" />What If?</div>
          <div className="card"><img src="/assets/myth_vs_fact.jpg" alt="" />Myth vs Fact</div>
        </div>
      </section>

      {/* FOOTER (Using Component) */}
      <Footer />

    </div>
  );
};

export default HomePage;
