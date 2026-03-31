import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../styles/courseStructure.css";
import Navbar from "./navbar";
import Footer from "./footer";

const CourseStructure = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const course = [
    {
      title: "FIRST SEMESTER",
      description: "Solve real-world chemical engineering problems in teams.",
      pdf: "/assets/Innoverse.jpg",
    },
    {
      title: "SECOND SEMESTER",
      description: "Solve real-world chemical engineering problems in teams.",
      pdf: "/assets/Innoverse.jpg",
    },
    {
      title: "THIRD SEMESTER",
      description: "Solve real-world chemical engineering problems in teams.",
      pdf: "/assets/Innoverse.jpg",
    },
    {
      title: "FOURTH SEMESTER",
      description: "Solve real-world chemical engineering problems in teams.",
      pdf: "/assets/Innoverse.jpg",
    },
    {
      title: "FIFTH SEMESTER",
      description: "Solve real-world chemical engineering problems in teams.",
      pdf: "/assets/Innoverse.jpg",
    },
    {
      title: "SIXTH SEMESTER",
      description: "Solve real-world chemical engineering problems in teams.",
      pdf: "/assets/Innoverse.jpg",
    },
    {
      title: "SEVENTH SEMESTER",
      description: "Solve real-world chemical engineering problems in teams.",
      pdf: "/assets/Innoverse.jpg",
    },
    {
      title: "EIGHTH SEMESTER",
      description: "Solve real-world chemical engineering problems in teams.",
      pdf: "/assets/Innoverse.jpg",
    },
  ];

  return (
    <div className="events-page">
      {/* ================= NAVBAR ================= */}
      <Navbar />

      <section className="team-hero reveal reveal-top">
        <h1>Our Exciting Events</h1>
        <p>Join us for a series of competitions, workshops, and quizzes designed
          for chemical engineering enthusiasts!</p>
      </section>

      {/* ================= FEATURED EVENTS ================= */}

      <section id="allevents">
        <h1>COURSE STRUCTURE</h1>
      </section>

      <section className="event-grid">
        {course.map((event, idx) => (
          <div className="event-card" key={idx}>
            <img src={event.image} alt={event.title} />
            <h4>{event.title}</h4>
            <p>{event.description}</p>
          </div>
        ))}
      </section>

      {/* ================= FOOTER ================= */}
      <Footer />
    </div>
  );
};

export default CourseStructure;