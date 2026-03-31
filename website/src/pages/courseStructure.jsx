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
      image: "/assets/sem1.jpg",
    },
    {
      title: "SECOND SEMESTER",
      description: "Solve real-world chemical engineering problems in teams.",
      image: "/assets/sem2.jpg",
    },
    {
      title: "THIRD SEMESTER",
      description: "Solve real-world chemical engineering problems in teams.",
      image: "/assets/sem3.jpg",
    },
    {
      title: "FOURTH SEMESTER",
      description: "Solve real-world chemical engineering problems in teams.",
      image: "/assets/sem4.jpg",
    },
    {
      title: "FIFTH SEMESTER",
      description: "Solve real-world chemical engineering problems in teams.",
      image: "/assets/sem5.jpg",
    },
    {
      title: "SIXTH SEMESTER",
      description: "Solve real-world chemical engineering problems in teams.",
      image: "/assets/sem6.jpg",
    },
    {
      title: "SEVENTH SEMESTER",
      description: "Solve real-world chemical engineering problems in teams.",
      image: "/assets/sem7.jpg",
    },
    {
      title: "EIGHTH SEMESTER",
      description: "Solve real-world chemical engineering problems in teams.",
      image: "/assets/sem28.jpg",
    },
  ];

  return (
    <div className="course-page">
      {/* ================= NAVBAR ================= */}
      <Navbar />

      <section className="team-hero reveal reveal-top">
        <h1>Course Structure | NEP SYLLABUS |</h1>
        <p>Explore semester-wise journey designed for chemical engineering
          enthusiasts.</p>
      </section>

      {/* ================= FEATURED EVENTS ================= */}

      <section id="allcourses">
        <h1>COURSE STRUCTURE</h1>
      </section>

      <section className="course-images">
        {course.map((item, idx) => (
        <div className="course-card" key={idx}>
          <img src={item.image} alt={item.title} />
          <h4>{item.title}</h4>
    </div>
  ))}
      </section>

      {/* ================= FOOTER ================= */}
      <Footer />
    </div>
  );
};

export default CourseStructure;