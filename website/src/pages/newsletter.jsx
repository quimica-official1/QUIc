import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../styles/newsletter.css";
import Navbar from "./navbar";
import Footer from "./footer";

  const Newsletter = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const newsletters = [
  {
    title: "NEWSLETTER 2025",
    image: "/assets/magazine25.png",
    pdf: "/assets/magazine25.pdf",
    downloadName: "QUIMICA_Magazine25.pdf",
  },
  {
    title: "NEWSLETTER 2024",
    image: "/assets/magazine24.png",
    pdf: "/assets/magazine2024.pdf",
    downloadName: "QUIMICA_Magazine24.pdf",
  },
  {
    title: "NEWSLETTER 2023",
    image: "/assets/magazine23.png",
    pdf: "/assets/magazine23.pdf",
    downloadName: "QUIMICA_Magazine23.pdf",
  },
];


useEffect(() => {
    window.scrollTo(0, 0);
    checkRegistrations();
  }, []);

  const checkRegistrations = async () => {
    if (!userProfile) return;

    // Check Quimi Dexter team
    const { data: teams } = await supabase
      .from('quimi_dexter_teams')
      .select('team_id')
      .or(`leader_email.eq.${userProfile.email},member1_email.eq.${userProfile.email},member2_email.eq.${userProfile.email},member3_email.eq.${userProfile.email}`);

    if (teams && teams.length > 0) setHasTeam(true);

    // Check Quantum registration
    const { data: quantum } = await supabase
      .from('quantum_registrations')
      .select('uid')
      .eq('user_email', userProfile.email);

    if (quantum && quantum.length > 0) setHasQuantum(true);

    setLoading(false);
  };

  const handleQuimiDexterRegister = () => {
    if (hasTeam) {
      navigate('/quimica26/quimi-dexter/team-id');
    } else {
      navigate('/quimica26/quimi-dexter/register');
    }
  };

  const handleQuantumRegister = () => {
    if (hasQuantum) {
      navigate('/quimica26/quantum/uid');
    } else {
      navigate('/quimica26/quantum/register');
    }
  };

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };
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
    <div className="magazine-page">
      {/* ================= NAVBAR ================= */}
      <Navbar />

      {/* ================= HERO ================= */}
        <section className="team-hero reveal reveal-top">
        <h1>Our Exciting magazine</h1>
        <p>Join us for a series of competitions, workshops, and quizzes designed
          for chemical engineering enthusiasts!</p>
      </section>

      {/* ================= FEATURED Magazine ================= */}
      {newsletters.map((item, index) => (
  <section className="featured-event" key={index}>
    <div className="featured-image">
      <img src={item.image} alt={item.title} loading="lazy" />
    </div>

    <div className="featured-info">
      <h2>{item.title}</h2>
      <p>
        Test your chemical engineering knowledge in a timed quiz designed
        to push our concepts and analytical thinking.
      </p>

      <button
        onClick={() => {
          const link = document.createElement("a");
          link.href = item.pdf;
          link.download = item.downloadName;
          link.click();
        }}
      >
        Download
      </button>

      <button
        onClick={() => {
          const link = document.createElement("a");
          link.href = item.pdf;
          link.target = "_blank";
          link.click();
        }}
      >
        Open Document
      </button>
    </div>
  </section>
))}


      {/* ================= FOOTER ================= */}
      <Footer />
    </div>
  );
};

export default Newsletter;