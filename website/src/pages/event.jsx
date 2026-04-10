import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../styles/event.css";
import Navbar from "./navbar";
import Footer from "./footer";

const Events = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const events = [
    {
      title: "QUIMI DEXTER",
      date: "March 11, 2026",
      description: "Solve real-world chemical engineering problems in teams.",
      image: "/assets/Quimi_Dexter.jpg",
    },
    {
      title: "QUANTUM",
      date: "March 11, 2026",
      description: "Solve real-world chemical engineering problems in teams.",
      image: "/assets/Quantum.jpg",
    },
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
      description: "A round involving technical paper submission on topics of industrial relevance.",
      image: "/assets/Bits_blog.jpg",
    },
    {
      title: "ELEMENTAX",
      date: "March 11, 2026",
      description: "Solve real-world chemical engineering problems in teams.",
      image: "/assets/ElementaX.jpg",
    },
    {
      title: "JEOPARDY",
      date: "March 12, 2026",
      description: "Algorithmic problem-solving competition for enthusiasts.",
      image: "/assets/Jeopardy.jpg",
    },
    {
      title: "MESAVENTURE",
      date: "March 11, 2026",
      description: "Solve real-world chemical engineering problems in teams.",
      image: "/assets/Mesaventure.jpg",
    },
    {
      title: "POSTER PRESENTATION COMPETITION",
      date: "March 11, 2026",
      description: "Solve real-world chemical engineering problems in teams.",
      image: "/assets/Poster_Competition.jpg",
    },
    {
      title: "SCINTILLA",
      date: "March 11, 2026",
      description: "Solve real-world chemical engineering problems in teams.",
      image: "/assets/Scintilla.jpg",
    },
    {
      title: "TECH KRITI",
      date: "March 11, 2026",
      description: "Solve real-world chemical engineering problems in teams.",
      image: "/assets/Tech_kriti.jpg",
    },
    {
      title: "SHAASTRA",
      date: "March 12, 2026",
      description: "Algorithmic problem-solving competition for enthusiasts.",
      image: "/assets/Shaastra.jpg",
    },
    {
      title: "IMPULSE",
      date: "March 12, 2026",
      description: "Algorithmic problem-solving competition for enthusiasts.",
      image: "/assets/Impulse.jpg",
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
            <section className="team-hero reveal reveal-top">
        <h1>Our Exciting Events</h1>
        <p>  Join us for a series of competitions, workshops, and quizzes designed
          for chemical engineering enthusiasts!</p>
      </section>

      {/* ================= FEATURED EVENTS ================= */}

        <section className="featured-event">
        <div className="featured-image">
          <img src="/assets/quimica2k26.jpeg" alt="QUIMICA'26" />
        </div>
        <div className="featured-info">
          <h2>QUIMICA'26</h2>
          <p>
            Test your chemical engineering knowledge in a timed quiz designed
            to push our concepts and analytical thinking.
          </p>
          <p className="date">April 9-11, 2026</p>
          {/* <button onClick={() => navigate("/register")}>Register</button> */}
        </div>
      </section>

      <section className="featured-event">
        <div className="featured-image">
          <img src="/assets/Quimica25.jpg" alt="QUIMICA'25" />
        </div>
        <div className="featured-info">
          <h2>QUIMICA'25</h2>
          <p>
           The competition pushed participants to their limits with a fast-paced competitions on engineering fundamentals. In addition to
            the thrill of the contest, the event served as a learning hub with several informative webinars on the schedule.
          </p>
          {/* <p className="date">March 10, 2026</p> */}
          <button onClick={() => navigate("/quimica25")}>Explore</button>
        </div>
      </section>

      <section className="featured-event">
        <div className="featured-image">
          <img src="/assets/Quimica23.jpg" alt="QUIMICA'23" />
        </div>
        <div className="featured-info">
          <h2>QUIMICA'23</h2>
          <p>
           Participants tested their engineering knowledge in timed competitions designed to challenge their conceptual and analytical thinking. The event not only included fierce competition but also informative webinars. 
Date- 2nd - 5th December
          </p>
          {/* <p className="date">March 10, 2026</p> */}
          <button onClick={() => navigate("/quimica23")}>Explore</button>
        </div>
      </section>

      <section id="allevents">
        <h1>ALL EVENTS</h1>
      </section>

      <section className="event-grid">
        {events.map((event, idx) => (
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

export default Events;
