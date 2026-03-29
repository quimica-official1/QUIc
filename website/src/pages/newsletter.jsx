import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../styles/newsletter.css";
import "../styles/homePage.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faLinkedinIn, faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons";

  const Newsletter = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const magazine = [
    {
      title: "INNOVERSE",
      date: "March 11, 2026",
      description: "Solve real-world chemical engineering problems in teams.",
      image: "/assets/Innoverse.jpg",
    },
    {
      title: "SMARTSCAPE",
      date: "March 12, 2026",
      description: "Algorithmic problem-solving competition for enthusiasts.",
      image: "/assets/Smart_scape.jpg",
    },
    {
      title: "BITS BLOG",
      date: "March 12, 2026",
      description: "Algorithmic problem-solving competition for enthusiasts.",
      image: "/assets/Bits_blog.jpg",
    },
  ];

  return (
    <div className="magazine-page">
      {/* ================= NAVBAR ================= */}
      <nav className="navbar">
        <div className="nav-left">
          <img src="/quimicaLogoWhite.png" alt="logo" />
          <h2>QUIMICA</h2>
        </div>

        {/* HAMBURGER */}
        <div
          className={`menu-icon ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>

        {/* NAV LINKS */}
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li>
            <NavLink to="/" onClick={() => setMenuOpen(false)}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/events" onClick={() => setMenuOpen(false)}>
              Events
            </NavLink>
          </li>
          <li>
            <NavLink to="/ourTeam" onClick={() => setMenuOpen(false)}>
              Our Team
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
              Faculty
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* ================= HERO ================= */}
      <section className="hero">
        <div className="magazine-header">
          <h1>Our Exciting magazine</h1>
        </div>
        <p>
          Join us for a series of competitions, workshops, and quizzes designed
          for chemical engineering enthusiasts!
        </p>
      </section>

      {/* ================= FEATURED Magazine ================= */}
      <section className="featured-event">
        <div className="featured-image">
          <img src="/assets/Quimica25.jpg" alt="QUIMICA'25" />
        </div>
        <div className="featured-info">
          <h2>NEWSLETTER 2025</h2>
          <p>
            Test your chemical engineering knowledge in a timed quiz designed
            to push our concepts and analytical thinking.
          </p>
          <button onClick={() => {const link = document.createElement("a");
            link.href = "/files/brochure26.pdf";
            link.download = "QUIMICA_Brochure.pdf";
            link.click();}}>Download</button>
        </div>
      </section>

      <section className="featured-event">
        <div className="featured-image">
          <img src="/assets/Quimica23.jpg" alt="QUIMICA'23" />
        </div>
        <div className="featured-info">
          <h2>NEWSLETTER 2024</h2>
          <p>
            Test your chemical engineering knowledge in a timed quiz designed
            to push our concepts and analytical thinking.
          </p>
          <button onClick={() => {const link = document.createElement("a");
            link.href = "/files/brochure25.pdf";
            link.download = "QUIMICA_Brochure.pdf";
            link.click();}}>Download</button>
        </div>
      </section>

            <section className="featured-event">
        <div className="featured-image">
          <img src="/assets/Quimica23.jpg" alt="QUIMICA'23" />
        </div>
        <div className="featured-info">
          <h2>NEWSLETTER 2023</h2>
          <p>
            Test your chemical engineering knowledge in a timed quiz designed
            to push our concepts and analytical thinking.
          </p>
          <button onClick={() => {const link = document.createElement("a");
            link.href = "/files/brochure24.pdf";
            link.download = "QUIMICA_Brochure.pdf";
            link.click();}}>Download</button>
        </div>
      </section>


      {/* ================= FOOTER ================= */}
      <footer className="footer" id="contact">
        <div className="footer-left">
          <img src="/quimicaLogoWhite.png" alt="logo" />
          <h4>CHEMICAL ENGINEERING SOCIETY</h4>
          <p>Department of Chemical Engineering</p>
          <p>BIT Sindri, Dhanbad</p>
        </div>

        <div className="footer-center">
          <h4>FOLLOW</h4>
          <div className="social-icons">
            <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="#"><FontAwesomeIcon icon={faXTwitter} /></a>
          </div>
        </div>

        <div className="footer-right">
          <h4>CONTACT US</h4>
          <p>BIT Sindri</p>
          <p>Dhanbad, India - 721302</p>
          <p>Phone: +91-3222-255221</p>
        </div>
      </footer>
    </div>
  );
};

export default Newsletter;