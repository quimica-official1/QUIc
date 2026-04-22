import React, { useEffect, useState } from "react";
import "../styles/quimica26.css";
import "../styles/homePage.css";
import { NavLink, useNavigate } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./footer";

// ✅ FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Quimica26 = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const events = [
    {
      title: "QUIMIDEXTER",
      date: "March 11, 2026",
      description:
        "Solve real-world chemical engineering problems in teams.",
      image: "/assets/Quimi_Dexter.jpg",
    },
    {
      title: "QUANTUM",
      date: "March 12, 2026",
      description:
        "Algorithmic problem-solving competition for enthusiasts.",
      image: "/assets/Quantum.jpg",
    },
  ];

  const seminar = [
    {
      title: "SEMINAR 1",
      date: "March 11, 2026",
      description:
        "A webinar on Entrepreneurial Mindset by eminent professor from IIT Patna. ",
      image: "/assets/seminar1_2k25.jpg",
    },
    {
      title: "SEMINAR 2",
      date: "March 12, 2026",
      description:
        "A webinar on Role of Chemical Engineering in Gas Processing and Pipeline Management by an industry expert from GAIL.",
      image: "/assets/seminar2_2k25.jpg",
    },
  ];
useEffect(() => {
  window.scrollTo(0, 0);

  const reveals = document.querySelectorAll(".reveal");

  const handleScroll = () => {
    reveals.forEach((el) => {
      const windowHeight = window.innerHeight;
      const elementTop = el.getBoundingClientRect().top;

      if (elementTop < windowHeight - 100) {
        el.classList.add("active");
      }
    });
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll();

  return () => window.removeEventListener("scroll", handleScroll);
}, []);
  return (
    <div className="events-page">
      {/* ================= NAVBAR ================= */}
      <Navbar />

      {/* ================= HERO ================= */}
      {/* <section className="hero">
        <h1>Our Exciting Events</h1>
        <p>
          Join us for a series of competitions, workshops, and quizzes
          designed for chemical engineering enthusiasts!
        </p>
      </section> */}
       <section className="team-hero reveal reveal-top">
        <h1>Our Exciting Events</h1>
        <p> Join us for a series of competitions, workshops, and quizzes
          designed for chemical engineering enthusiasts!</p>
      </section>


      {/* ================= FEATURED EVENT ================= */}
      <section className="featured-event">
        <div className="featured-image">
          <img src="/assets/quimica2k26.jpeg" alt="QUIMICA'26" />
        </div>

        <div className="featured-info">
          <h2>QUIMICA'26</h2>
          <p>
            Test your chemical engineering knowledge in a timed quiz
            designed to push your concepts and analytical thinking.
          </p>
          <button onClick={() => navigate("/gallery")}>Glimpses</button>
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

      {/* ================= SEMINARS ================= */}
      <section className="event-grid">
        {seminar.map((seminar, idx) => (
          <div className="event-card" key={idx}>
            <img src={seminar.image} alt={seminar.title} />
            <h4>{seminar.title}</h4>
            <p>{seminar.description}</p>
            {/* <a
              href={seminar.watch}
              target="_blank"
              rel="noopener noreferrer"
              className="watch-btn"
            >
              WATCH
            </a> */}
          </div>
        ))}
      </section>

      {/* ================= FOOTER ================= */}
      <Footer />
    </div>
  );
};

export default Quimica26;
