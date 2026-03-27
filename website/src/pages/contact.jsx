// import React, { useEffect, useState } from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import "../styles/contact.css";
// import "../styles/homePage.css";

// // ✅ FontAwesome
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFacebookF, faLinkedinIn, faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons";

// const Contact = () => {
//   const navigate = useNavigate();
//   const [menuOpen, setMenuOpen] = useState(false);

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   /* ================= SCROLL REVEAL ================= */
//   useEffect(() => {
//     const reveals = document.querySelectorAll(".reveal");

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("active");
//           }
//         });
//       },
//       {
//         threshold: 0.15,
//         rootMargin: "0px 0px -50px 0px",
//       }
//     );

//     reveals.forEach((el) => observer.observe(el));

//     return () => {
//       reveals.forEach((el) => observer.unobserve(el));
//     };
//   }, []);

//   return (
//     <div className="homepage">
//       {/* ================= NAVBAR ================= */}
//       <nav className="navbar">
//         <div className="nav-left">
//           <img src="/quimicaLogo.png" alt="logo" />
//           <h2>QUIMICA</h2>
//         </div>

//         {/* HAMBURGER */}
//         <div
//           className={`menu-icon ${menuOpen ? "open" : ""}`}
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           ☰
//         </div>

//         {/* NAV LINKS */}
//         <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
//           <li>
//             <NavLink to="/" onClick={() => setMenuOpen(false)}>
//               Home
//             </NavLink>
//           </li>
//           <li>
//             <NavLink to="/events" onClick={() => setMenuOpen(false)}>
//               Events
//             </NavLink>
//           </li>
//           <li>
//             <NavLink to="/ourTeam" onClick={() => setMenuOpen(false)}>
//               Our Team
//             </NavLink>
//           </li>
//           <li>
//             <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
//               Contact
//             </NavLink>
//           </li>
//         </ul>
//       </nav>

//       {/* ================= TEAM HERO ================= */}
//       <section className="team-hero reveal reveal-top">
//         <h1>Acknowledgement</h1>
//         <p>Meet our Professors</p>
//       </section>

//       {/* ================= TEAM CARDS ================= */}
//       <section className="team-container">
//         {[...Array(8)].map((_, index) => (
//           <div
//             key={index}
//             className={`team-card reveal ${
//               index % 2 === 0 ? "reveal-left" : "reveal-right"
//             }`}
//           >
//             <div className="card-inner">
//               <div className="card-front">
//                 <img src="/quimicaLogo.png" alt="Member" />
//                 <h3>Name</h3>
//                 <p designation</p>
//               </div>
//               <div className="card-back">
//                 <h3>Name</h3>
//                 <p designation</p>
//                 <p>Lorem ipsum dolor sit amet consectetur.</p>
//                 <a href="#" className="linkedin-icon">
//                   <FontAwesomeIcon icon={faLinkedinIn} />
//                 </a>
//               </div>
//             </div>
//           </div>
//         ))}
//       </section>

//       {/* ================= FOOTER ================= */}
//       <footer className="footer" id="contact">
//         <div className="footer-left">
//           <img src="/quimicaLogo.png" alt="logo" />
//           <h4>CHEMICAL ENGINEERING SOCIETY</h4>
//           <p>Department of Chemical Engineering</p>
//           <p>BIT Sindri, Dhanbad</p>
//         </div>

//         <div className="footer-center">
//           <h4>FOLLOW</h4>
//           <div className="social-icons">
//             <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
//             <a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
//             <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
//             <a href="#"><FontAwesomeIcon icon={faXTwitter} /></a>
//           </div>
//         </div>

//         <div className="footer-right">
//           <h4>CONTACT US</h4>
//           <p>BIT Sindri</p>
//           <p>Dhanbad, India - 721302</p>
//           <p>Phone: +91-3222-255221</p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Contact;


import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../styles/contact.css";
import "../styles/homePage.css";

// ✅ FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faLinkedinIn, faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

    const team = [
    { name: "Dr. Amit Kumar Gupta", designation: "HOD and Associate Professor", batch: "2k22", image: "/assets/proffesors/AmitSir.png", linkedIn: "" },
    { name: "Dr. Amar Kumar", designation: "Assistant Professor", batch: "2k22", image: "/assets/proffesors/AmarSir.jpeg", linkedIn: "" },
    { name: "Dr. Ajay Oraon", designation: "Assistant Professor", batch: "2k22", image: "/assets/proffesors/AjaySir.png", linkedIn: "" },
    { name: "Dr. Usha Kumari", designation: "Assistant Professor", batch: "2k22", image: "/assets/proffesors/UshaMam.jpeg", linkedIn: "" },
    { name: "Dr. Sunil Kumar Singh", designation: "Assistant Professor", batch: "2k22", image: "/assets/proffesors/SunilSir.jpeg", linkedIn: "" },
    { name: "Prof. Manish Kumar", designation: "Assistant Professor", batch: "2k22", image: "/assets/proffesors/ManishSir.jpeg", linkedIn: "" },
    { name: "Dr. Diwakar Pandey", designation: "Assistant Professor", batch: "2k22", image: "/assets/proffesors/DiwakarSir.jpeg", linkedIn: "" },
    { name: "Dr. Abhishek Anand Hembrom", designation: "Assistant Professor", batch: "2k22", image: "/assets/proffesors/AbhishekSir.jpeg", linkedIn: "" },
    { name: "Dr. Ashok Kumar Baranwal", designation: "Assistant Professor", batch: "2k22", image: "/assets/proffesors/AshokSir.jpeg", linkedIn: "" },
    { name: "Dr. Nirupama", designation: "Assistant Professor", batch: "2k22", image: "/assets/proffesors/NirupamaMam.jpeg", linkedIn: "" },
    { name: "Dr. Ch. V. Raghunath", designation: "Assistant Professor", batch: "2k22", image: "/assets/proffesors/RaghuSir.jpeg", linkedIn: "" },
    { name: "Prof. Pitho Hansda", designation: "Assistant Professor", batch: "2k22", image: "/assets/proffesors/PithoSir.jpeg", linkedIn: "" },
    { name: "Prof. Devina Ratnam ", designation: "Assistant Professor", batch: "2k22", image: "/assets/proffesors/DevinaMam.png", linkedIn: "" },
    { name: "Dr. Poornima Pandey", designation: "Assistant Professor", batch: "2k22", image: "/assets/proffesors/PoornimaMam.jpeg", linkedIn: "" },
  ];

  /* ================= SCROLL REVEAL ================= */
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    reveals.forEach((el) => observer.observe(el));

    return () => {
      reveals.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="homepage">
      {/* ================= NAVBAR ================= */}
      <nav className="navbar">
        <div className="nav-left" onClick={() => navigate("/")}>
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
            <NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/events" onClick={() => setMenuOpen(false)}>Events</NavLink>
          </li>
          <li>
            <NavLink to="/ourTeam" onClick={() => setMenuOpen(false)}>Our Team</NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink>
          </li>
        </ul>
      </nav>

      {/* ================= HERO ================= */}
      <section className="team-hero reveal reveal-top">
        <h1>Acknowledgement</h1>
        <p>Meet our Professors</p>
      </section>

      {/* ================= TEAM CARDS (NO FLIP) ================= */}
      <section className="team-container">
        {team.map((member, idx) => (
                <div className="team-card reveal reveal-left" key={idx}>
                  <img src={member.image} alt={member.name} />
                  <h3>{member.name}</h3>
                  <p>{member.designation}</p>
                  {/* <p>{member.batch}</p> */}
                  
            {/* <img src="/quimicaLogo.png" alt="Member" /> */}

            {/* <h3>Name</h3>
            <p>Designation</p>
            <p>Lorem ipsum dolor sit amet consectetur.</p> */}

            <a href="#" className="linkedin-icon">
              <FontAwesomeIcon icon={faLinkedinIn} />
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

export default Contact;