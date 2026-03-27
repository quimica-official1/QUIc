import React, { useEffect, useState } from "react";
import "../styles/quimica25.css";
import "../styles/homePage.css";
import { NavLink, useNavigate } from "react-router-dom";

// ✅ FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Quimica25 = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const events = [
    {
      title: "INNOVERSE",
      date: "March 11, 2026",
      description:
        "Solve real-world chemical engineering problems in teams.",
      image: "/assets/Innoverse.jpg",
    },
    {
      title: "SMARTSCAPE",
      date: "March 12, 2026",
      description:
        "Algorithmic problem-solving competition for enthusiasts.",
      image: "/assets/Smart_scape.jpg",
    },
    {
      title: "BITS BLOG",
      date: "March 12, 2026",
      description:
        "Algorithmic problem-solving competition for enthusiasts.",
      image: "/assets/Bits_blog.jpg",
    },
  ];

  const webinar = [
    {
      title: "WEBINAR 1",
      date: "March 11, 2026",
      description:
        "Solve real-world chemical engineering problems in teams.",
      image: "/assets/Webinar1.jpg",
      watch:
        "https://www.youtube.com/live/QLXe7L4zPFY?si=xU3EZmtc1T5dNiOV",
    },
    {
      title: "WEBINAR 2",
      date: "March 12, 2026",
      description:
        "Algorithmic problem-solving competition for enthusiasts.",
      image: "/assets/Webinar2.jpg",
      watch:
        "https://www.youtube.com/live/GGu89CtU638?si=Q9QccnwQwKfOQMqs",
    },
    {
      title: "WEBINAR 3",
      date: "March 12, 2026",
      description:
        "Algorithmic problem-solving competition for enthusiasts.",
      image: "/assets/Webinar3.jpg",
      watch:
        "https://www.youtube.com/live/A2KqB_uAsWw?si=ls5OTko7I3T7M1Q8",
    },
  ];

  return (
    <div className="events-page">
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
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* ================= HERO ================= */}
      <section className="hero">
        <h1>Our Exciting Events</h1>
        <p>
          Join us for a series of competitions, workshops, and quizzes
          designed for chemical engineering enthusiasts!
        </p>
      </section>

      {/* ================= FEATURED EVENT ================= */}
      <section className="featured-event">
        <div className="featured-image">
          <img src="/assets/Quimica25.jpg" alt="QUIMICA'25" />
        </div>

        <div className="featured-info">
          <h2>QUIMICA'25</h2>
          <p>
            Test your chemical engineering knowledge in a timed quiz
            designed to push your concepts and analytical thinking.
          </p>
          <p className="date">March 10, 2026</p>
        </div>
      </section>

      {/* ================= EVENTS ================= */}
      <section className="event-grid">
        {events.map((event, idx) => (
          <div className="event-card" key={idx}>
            <img src={event.image} alt={event.title} />
            <h4>{event.title}</h4>
            <p>{event.description}</p>
          </div>
        ))}
      </section>

      {/* ================= WEBINARS ================= */}
      <section className="event-grid">
        {webinar.map((webinar, idx) => (
          <div className="event-card" key={idx}>
            <img src={webinar.image} alt={webinar.title} />
            <h4>{webinar.title}</h4>
            <p>{webinar.description}</p>
            <a
              href={webinar.watch}
              target="_blank"
              rel="noopener noreferrer"
              className="watch-btn"
            >
              WATCH
            </a>
          </div>
        ))}
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

export default Quimica25;