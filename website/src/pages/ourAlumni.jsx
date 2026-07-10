import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../styles/ourAlumni.css";
import "../styles/homePage.css";
import Navbar from "./navbar";
import Footer from "./footer";

// ✅ FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faLinkedinIn, faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons";

const OurAlumni = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const team22 = [
    { name: "KARTIK KUMAR",  batch: "2k22", image: "/assets/team22/kartiksir.jpeg", linkedIn: "https://www.linkedin.com/in/kartik-kumar-550933298/" },
    { name: "HARSHITA SETH",  batch: "2k22", image: "/assets/team22/harshitamam.jpeg", linkedIn: "https://www.linkedin.com/in/harshita-seth-74b280257/" },
    { name: "SOURAV KUMAR",  batch: "2k22", image: "/assets/team22/souravsir.jpeg", linkedIn: "https://www.linkedin.com/in/sourav-kumar-2a271a256/" },
    { name: "RAVI SHANKAR PRASAD",  batch: "2k22", image: "/assets/team22/ravisir2.jpeg", linkedIn: "https://www.linkedin.com/in/ravi-shankar-prasad-bitsindri/" },
    { name: "DIKSHA",  batch: "2k22", image: "/assets/team22/dikshamam.jpeg", linkedIn: "https://www.linkedin.com/in/diksha-jha-32342628b/" },
    { name: "NIDHISHREE MAHATO",  batch: "2k22", image: "/assets/team22/nidhimam.jpg", linkedIn: "https://www.linkedin.com/in/nidhishree-mahato/" },
    { name: "KOMAL KUMARI", batch: "2k22", image: "/assets/team22/komalmam.jpeg", linkedIn: "https://www.linkedin.com/in/komalkri08/" },
    { name: "RUDRANIL GANGULY", batch: "2k22", image: "/assets/team22/rudranilsir2.jpeg", linkedIn: "https://www.linkedin.com/in/rudranil-ganguly-305411254/" },
    { name: "SAHITYA KUMAR", batch: "2k22", image: "/assets/team22/sahityasir.jpg", linkedIn: "https://www.linkedin.com/in/sahitya-kumar-897a27253/" },
    { name: "AKASH NATH", batch: "2k22", image: "/assets/team22/akashsir2.png", linkedIn: "https://www.linkedin.com/in/theakashnath/" },
    { name: "SOURAV OMONG", batch: "2k22", image: "/assets/team22/omangsir.jpeg", linkedIn: "https://www.linkedin.com/in/sourav-omong-51655b257/" },
    { name: "HARSH GIRI", batch: "2k22", image: "/assets/team22/harshsir.jpg", linkedIn: "https://www.linkedin.com/in/harsh-giri-b84889211/" },
    { name: "MANOJ MURMU", batch: "2k22", image: "/assets/team22/manojsir.jpg", linkedIn: "https://www.linkedin.com/in/manoj-murmu/" },
    { name: "DEEPTI KUMARI", batch: "2k22", image: "/assets/team22/deeptimam.jpeg", linkedIn: "https://www.linkedin.com/in/deepti-kumari-482049258/" },
    { name: "DONA BHATTACHARJEE", batch: "2k22", image: "/assets/team22/donamam.jpg", linkedIn: "https://www.linkedin.com/in/dona-bhattacharjee-a95b25273/" },
    { name: "SAMRIDDHI SINGH", batch: "2k22", image: "/assets/team22/samriddhimam.jpg", linkedIn: "" },
    { name: "AASHI RANI", batch: "2k22", image: "/assets/team22/aashimam.jpg", linkedIn: "https://www.linkedin.com/in/aashi-rani-a6824730a/" },
  ];

  /* ================= SCROLL REVEAL ================= */
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("active");
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );

    reveals.forEach((el) => observer.observe(el));

    return () => {
      reveals.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="our">
      {/* ================= NAVBAR ================= */}
      <Navbar />

      {/* ================= HERO ================= */}
      <section className="team-hero reveal reveal-top">
        <h1>Our Alumni</h1>
        <p>Meet our Alumni</p>
      </section>

      {/* ================= TEAM ================= */}
      <section className="team-container">
      
        {team22.map((member, idx) => (
          <div className="team-card reveal reveal-left" key={idx}>
            <img src={member.image} alt={member.name} />

            {/* NORMAL CONTENT */}
            <div className="team-content">
              <h3>{member.name}</h3>
              <p>{member.post}</p>
              <p>{member.batch}</p>

              {member.linkedIn && (
                <a href={member.linkedIn} className="linkedin-icon" target="blank">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
              )}
            </div>
          </div>
        ))}
      </section>

      {/* ================= FOOTER ================= */}
      <Footer />
    </div>
  );
};

export default OurAlumni;