import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../styles/ourTeam.css";
import "../styles/homePage.css";
import Navbar from "./navbar";
import Footer from "./footer";

// ✅ FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faLinkedinIn, faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons";

const OurTeam = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const team23 = [
    { name: "RAJ KUMAR BARNWAL", post: "PRESIDENT", batch: "2k23", image: "/assets/team23/rajsir.jpeg", linkedIn: "https://www.linkedin.com/in/raj-kumar-barnwal-2347351b5/" },
    { name: "BITTU KUMAR", post: "VICE PRESIDENT", batch: "2k23", image: "/assets/team23/bittusir.jpg", linkedIn: "https://www.linkedin.com/in/bittukumar7277/" },
    { name: "ROSHNI KUMARI", post: "VICE PRESIDENT", batch: "2k23", image: "/assets/team23/roshnimam.jpg", linkedIn: "https://www.linkedin.com/in/roshni-kumari-8408182a7/" },
    { name: "SAMBHAV PRATAP SINGH", post: "SECRETARY", batch: "2k23", image: "/assets/team23/sambhavsir.jpeg", linkedIn: "https://www.linkedin.com/in/sambhav-pratap-singh-0b4b86290/" },
    { name: "ANUPRIYA KUMARI", post: "SCHOLASTIC HEAD", batch: "2k23", image: "/assets/team23/anupriyamam.jpg", linkedIn: "https://www.linkedin.com/in/anupriya-kumari-251b29290/" },
    { name: "HARSH KASHYAP", post: "SCHOLASTIC HEAD", batch: "2k23", image: "/assets/team23/harshsir.jpg", linkedIn: "https://www.linkedin.com/in/harsh-kashyap-07b624290/" },
    { name: "SANSKAR RAJ SINGH", post: "TREASURER", batch: "2k23", image: "/assets/team23/sanskarsir.jpeg", linkedIn: "https://www.linkedin.com/in/sanskar-raj-singh-4577172a3/" },
    { name: "BABAN KUMAR GUPTA", post: "JOINT SECRETARY", batch: "2k23", image: "/assets/team23/babansir.JPG", linkedIn: "https://www.linkedin.com/in/baban-kumar-gupta-b82b44290/" },
    { name: "HARSHIT RAI", post: "JOINT SECRETARY", batch: "2k23", image: "/assets/team23/harshitsir.jpeg", linkedIn: "https://www.linkedin.com/in/harshit-rai-26b7a7282/" },
    { name: "PALAK PRIYA", post: "JOINT SECRETARY", batch: "2k23", image: "/assets/team23/palakmam.jpg", linkedIn: "https://www.linkedin.com/in/palak-priya-54b7891b6/" },
    { name: "JIYA RANI", post: "JOINT TREASURER", batch: "2k23", image: "/assets/team23/jiyamam2.jpeg", linkedIn: "https://www.linkedin.com/in/jiya-rani-010aa0290/" },
    { name: "SUJAL KUMAR", post: "JOINT TREASURER", batch: "2k23", image: "/assets/team23/sujalsir2.png", linkedIn: "https://www.linkedin.com/in/sujal-kumar-48b60b290/" },
    { name: "KUMAR ANJANI GAURAV", post: "JOINT TREASURER", batch: "2k23", image: "/assets/team23/anjanisir.jpg", linkedIn: "https://www.linkedin.com/in/kumar-anjani-gaurav-016693287/" },
    { name: "PAYAL JAISWAL", post: "CHIEF TECHNICAL OFFICER", batch: "2k23", image: "/assets/team23/payalmam2.jpeg", linkedIn: "https://www.linkedin.com/in/payal-jaiswal-b7bb0a293/" },
    { name: "GOURAV KUMAR", post: "ALUMNI INCHARGE", batch: "2k23", image: "/assets/team23/gouravsir.jpeg", linkedIn: "https://www.linkedin.com/in/gourav-kumar-gk/" },
    { name: "SATISH KUMAR SAH", post: "ALUMNI INCHARGE", batch: "2k23", image: "/assets/team23/satishsir.jpg", linkedIn: "https://www.linkedin.com/in/satishsah9944/" },
    { name: "SACHIN KARMALI", post: "PUBLIC RELATION OFFICER", batch: "2k23", image: "/assets/team23/sachinsir.jpeg", linkedIn: "https://www.linkedin.com/in/sachin-karmali-19ab55290/" },
  ];

  const team24 = [
    { name: "ABHAVYA RANJAN", batch: "2k24", image: "/assets/team24/abhavya.jpeg", linkedIn: "https://www.linkedin.com/in/abhavya-ra17229207/" },
    { name: "ADITI PRIYA",batch: "2k24", image: "/assets/team24/aditi.jpeg", linkedIn: "https://www.linkedin.com/in/aditi-priya-3ab776333/" },
    { name: "ASHIKA KUMARI", batch: "2k24", image: "/assets/team24/ashika.jpeg", linkedIn: "https://www.linkedin.com/in/ashika-kumari-638b81338/" },
    { name: "KUMARI SHALINI", batch: "2k24", image: "/assets/team24/shalini.jpeg", linkedIn: "https://www.linkedin.com/in/kumari-shalini-505146325/" },
    { name: "MOHIT KUMAR", batch: "2k24", image: "/assets/team24/mohit.jpeg", linkedIn: "https://www.linkedin.com/in/mohit-kumar-baa375335/" },
    { name: "NEEL RAJ GUPTA", batch: "2k24", image: "/assets/team24/neel.jpeg", linkedIn: "https://www.linkedin.com/in/neel-raj-gupta-b6b4b633a/" },
    { name: "NIKHIL JAMES LAKRA", batch: "2k24", image: "/assets/team24/nikhilj.jpeg", linkedIn: "https://www.linkedin.com/in/nikhil-lakra-b2612b32a/" },
    { name: "NIKHIL KUMAR MAHATO", batch: "2k24", image: "/assets/team24/nikhilm.jpeg", linkedIn: "https://www.linkedin.com/in/nikhil-m-432002307/" },
    { name: "PRAJJWAL JHA", batch: "2k24", image: "/assets/team24/prajjwal.jpeg", linkedIn: "https://www.linkedin.com/in/prajjwal-jha-98476133b/" },
    { name: "PRATIBHA KUMARI", batch: "2k24", image: "/assets/team24/pratibha.jpeg", linkedIn: "https://www.linkedin.com/in/pratibha-kumari-ab7306267/" },
    { name: "PRATIKA KUMARI", batch: "2k24", image: "/assets/team24/pratika.jpeg", linkedIn: "https://www.linkedin.com/in/pratika-kumari-061313v/" },
    { name: "PRIYA KUMARI", batch: "2k24", image: "/assets/team24/priya.jpeg", linkedIn: "https://www.linkedin.com/in/priya-kumari-a26aa8315/" },
    { name: "PRIYANSHI KUMARI", batch: "2k24", image: "/assets/team24/priyanshi.jpeg", linkedIn: "https://www.linkedin.com/in/priyanshi-kumari-9b94a2276/" },
    { name: "RAHUL KUMAR", batch: "2k24", image: "/assets/team24/rahul.jpeg", linkedIn: "https://www.linkedin.com/in/rahul-kumar-419bbb333/" },
    { name: "RAJ KRISHNA VATS", batch: "2k24", image: "/assets/team24/raj.jpeg", linkedIn: "https://www.linkedin.com/in/rajvats2028/" },
    { name: "RAVI KUMAR", batch: "2k24", image: "/assets/team24/ravi.png", linkedIn: "https://www.linkedin.com/in/ravi-kumar-b5a1b230a/" },
    { name: "ROSHAN PANDIT", batch: "2k24", image: "/assets/team24/roshan.png", linkedIn: "https://www.linkedin.com/in/roshan-kumar-6a1878313/" },
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
    <div className="ourTeam">
      {/* ================= NAVBAR ================= */}
      <Navbar />

      {/* ================= HERO ================= */}
      <section className="team-hero reveal reveal-top">
        <h1>Our Team</h1>
        <p>Meet the dedicated members of QUIMICA</p>
      </section>

      {/* ================= TEAM ================= */}
      <h1 className="teamtext">OUR POST BEARERS</h1>
      <section className="team-container">
      
        {team23.map((member, idx) => (
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

      <h1 className="teamtext">TEAM 2K24</h1>
      <section className="team-container">
        

        {team24.map((member, idx) => (
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

            {/* 🔥 HOVER OVERLAY */}
            {/* <div className="hover-overlay">
              <h3>{member.name}</h3>
              <p>{member.post}</p>
              <p>{member.batch}</p>
            </div> */}
          </div>
        ))}
      </section>

      {/* ================= FOOTER ================= */}
      <Footer />
    </div>
  );
};

export default OurTeam;