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
    { name: "KARTIK KUMAR", batch: "2k22", societyRole: "PRESIDENT", image: "/assets/team22/kartiksir.jpeg", linkedIn: "https://www.linkedin.com/in/kartik-kumar-550933298/" },
    { name: "HARSHITA SETH", batch: "2k22", societyRole: "VICE PRESIDENT", image: "/assets/team22/harshitamam.jpeg", linkedIn: "https://www.linkedin.com/in/harshita-seth-74b280257/" },
    { name: "SOURAV KUMAR",  batch: "2k22", societyRole: "VICE PRESIDENT", image: "/assets/team22/souravsir.jpeg", linkedIn: "https://www.linkedin.com/in/sourav-kumar-2a271a256/" },
    { name: "RAVI SHANKAR PRASAD",  batch: "2k22", societyRole: "SECRETARY", image: "/assets/team22/ravisir2.jpeg", linkedIn: "https://www.linkedin.com/in/ravi-shankar-prasad-bitsindri/" },
    { name: "DIKSHA",  batch: "2k22", societyRole: "JOINT SECRETARY", image: "/assets/team22/dikshamam.jpeg", linkedIn: "https://www.linkedin.com/in/diksha-jha-32342628b/" },
    { name: "NIDHISHREE MAHATO",  batch: "2k22", societyRole: "JOINT SECRETARY", image: "/assets/team22/nidhimam.jpg", linkedIn: "https://www.linkedin.com/in/nidhishree-mahato/" },
    { name: "KOMAL KUMARI", batch: "2k22", societyRole: "SCHOLASTIC HEAD", image: "/assets/team22/komalmam.jpeg", linkedIn: "https://www.linkedin.com/in/komalkri08/" },
    { name: "RUDRANIL GANGULY", batch: "2k22", societyRole: "SCHOLASTIC HEAD", image: "/assets/team22/rudranilsir2.jpeg", linkedIn: "https://www.linkedin.com/in/rudranil-ganguly-305411254/" },
    { name: "SAHITYA KUMAR", batch: "2k22", societyRole: "TREASURER", image: "/assets/team22/sahityasir.jpg", linkedIn: "https://www.linkedin.com/in/sahitya-kumar-897a27253/" },
    { name: "AKASH NATH", batch: "2k22", societyRole: "JOINT TREASURER", image: "/assets/team22/akashsir2.png", linkedIn: "https://www.linkedin.com/in/theakashnath/" },
    { name: "SOURAV OMONG", batch: "2k22", societyRole: "JOINT TREASURER", image: "/assets/team22/omangsir.jpeg", linkedIn: "https://www.linkedin.com/in/sourav-omong-51655b257/" },
    { name: "HARSH GIRI", batch: "2k22", societyRole: "TECHNICAL HEAD", image: "/assets/team22/harshsir.jpg", linkedIn: "https://www.linkedin.com/in/harsh-giri-b84889211/" },
    { name: "MANOJ MURMU", batch: "2k22", societyRole: "DESIGN & CREATIVE HEAD", image: "/assets/team22/manojsir.jpg", linkedIn: "https://www.linkedin.com/in/manoj-murmu/" },
    { name: "DEEPTI KUMARI", batch: "2k22", societyRole: "ALUMNI & OUTREACH HEAD", image: "/assets/team22/deeptimam.jpeg", linkedIn: "https://www.linkedin.com/in/deepti-kumari-482049258/" },
    { name: "DONA BHATTACHARJEE", batch: "2k22", societyRole: "ALUMNI & OUTREACH HEAD", image: "/assets/team22/donamam.jpg", linkedIn: "https://www.linkedin.com/in/dona-bhattacharjee-a95b25273/" },
    { name: "SAMRIDDHI SINGH", batch: "2k22", societyRole: "PUBLIC RELATION OFFICER", image: "/assets/team22/samriddhimam.jpg", linkedIn: "" },
    { name: "AASHI RANI", batch: "2k22", societyRole: "JOINT PRO", image: "/assets/team22/aashimam.jpg", linkedIn: "https://www.linkedin.com/in/aashi-rani-a6824730a/" },
  ];

  const team21 = [
    { name: "SURAJ KUMAR", batch: "2k21", societyRole: "PRESIDENT", currentRole: "N/A" , organization: "N/A" , linkedIn: "https://www.linkedin.com/in/suraj-kumar-3377b6216/" },
    { name: "VIKAS KUMAR", batch: "2k21", societyRole: "VICE PRESIDENT", currentRole: "GET" , organization: "Hindalco Industries Limited" , linkedIn: "https://www.linkedin.com/in/vikas-kumar-8297a6236/" },
    { name: "MADHU KUMARI",  batch: "2k21", societyRole: "VICE PRESIDENT", currentRole: "GET" , organization: "Reliance Industries Ltd" , linkedIn: "https://www.linkedin.com/in/madhu-kumari-809443255/" },
    { name: "VISHNU VAIBHAV",  batch: "2k21", societyRole: "SECRETARY", currentRole: "N/A" , organization: "" , linkedIn: "https://www.linkedin.com/in/vishnu-vaibhav-614153230/" },
    { name: "ASHISH KUMAR SAHA",  batch: "2k21", societyRole: "JOINT SECRETARY", currentRole: "GET" , organization: "Reliance Industries Ltd" , linkedIn: "https://www.linkedin.com/in/ashish-kumar-saha-74328a246/"},
    { name: "RAVI KUMAR",  batch: "2k21", societyRole: "JOINT SECRETARY", currentRole: "GET" , organization: "Inox Air Products" , linkedIn: "https://www.linkedin.com/in/ravi-kumar-022b00237/" },
    { name: "SYED SHIFRAN", batch: "2k21", societyRole: "TREASURER", currentRole: "N/A" , organization: "N/A" , linkedIn: "https://www.linkedin.com/in/syed-shifran-ahmad-3b7787235/" },
    { name: "UJJWAL KUMAR", batch: "2k21", societyRole: "JOINT TREASURER", currentRole: "GET" , organization: "Shyam Metalics and Energy Limited" , linkedIn: "https://www.linkedin.com/in/ujjwal-kumar-68378523b/" },
    { name: "SHIV PRASAD", batch: "2k21", societyRole: "JOINT TREASURER", currentRole: "N/A" , organization: "N/A" , linkedIn: "https://www.linkedin.com/in/shiv-prasad-marandi-8a23a4233/" },
    { name: "ABHAY ANAND", batch: "2k21", societyRole: "TECHNICAL HEAD", currentRole: "GET" , organization: "Matix Fertilizers & Chemicals Ltd." , linkedIn: "https://www.linkedin.com/in/abhayanand08/" },
    { name: "ADITI KUMAR", batch: "2k21", societyRole: "DESIGN & CREATIVE HEAD", currentRole: "N/A" , organization: "N/A" , linkedIn: "https://www.linkedin.com/in/aditi-kumar-24a728258/" },
    { name: "AMISHA", batch: "2k21", societyRole: "ALUMNI INCHARGE", currentRole: "N/A" , organization: "N/A" , linkedIn: "https://www.linkedin.com/in/amisha-singh-36b946240/" },
    { name: "NISHA KUMARI", batch: "2k21", societyRole: "ALUMNI INCHARGE", currentRole: "Assistant Manager" , organization: "Matix fertilizer and chemical limited" , linkedIn: "https://www.linkedin.com/in/nisha-kumari-97b662230/" },
    { name: "ABHAY KUMAR", batch: "2k21", societyRole: "PUBLIC RELATION OFFICER", currentRole: "GET" , organization: "Reliance Industries Limited" , linkedIn: "https://www.linkedin.com/in/abhay-kumar-a797a0233/" },
  ];

  const team20 = [
    { name: "KUMAR SATYAM", societyRole: "PRESIDENT", currentRole: "Assistant Manager" , organization: "JSW STEEL" , linkedIn: "https://www.linkedin.com/in/kumar-satyam-569618204/" },
    { name: "AKASH KUMAR", societyRole: "VICE PRESIDENT", currentRole: "Assistant Manager" , organization: "Matix Fertilizers and Chemicals Limited" ,  linkedIn: "https://www.linkedin.com/in/akash-kumar-a01924202/" },
    { name: "SWADHA SHREE", societyRole: "VICE PRESIDENT", currentRole: "Assistant Manager" , organization: "Hindalco Industries Limited" ,  linkedIn: "https://www.linkedin.com/in/swadha-shree-9a3a7a281/" },
    { name: "GOURAV KUMAR", societyRole: "SECRETARY", currentRole: "System Engineer" , organization: "TCS" ,  linkedIn: "https://www.linkedin.com/in/gourav-kumar-54a081203/" },
    { name: "MD. JUNAID", societyRole: "JOINT SECRETARY", currentRole: "Assistant Manager" , organization: "Aditya Birla Group" ,  linkedIn: "https://www.linkedin.com/in/md-junaid-alam-02a9b421a/"},
    { name: "KIRTI KUMARI", societyRole: "JOINT SECRETARY", currentRole: "Associate Manager" , organization: "Jindal Stainless Limited" ,  linkedIn: "https://www.linkedin.com/in/kirtibitsindri/" },
    { name: "SHIWAJEE KETAN", societyRole: "TREASURER", currentRole: "" , organization: "" ,  linkedIn: "https://www.linkedin.com/in/shiwajee-ketan-b39477261/" },
    { name: "ANISH KUMAR", societyRole: "JOINT TREASURER", currentRole: "Senior Engineer" , organization: "TATA CONSULTING ENGINEERS LIMITED" ,  linkedIn: "https://www.linkedin.com/in/anish-kumar-5501b3203/" },
    { name: "SHRUTI KUMARI", societyRole: "JOINT TREASURER", currentRole: "Process Engineer" , organization: "Technip Energies" ,  linkedIn: "https://www.linkedin.com/in/shruti-kumari-880918209/" },
    { name: "ANSHU KUMARI", societyRole: "TECHNICAL HEAD", currentRole: "" , organization: "" ,  linkedIn: "" },
    { name: "AVINAV RAJ SINGH", societyRole: "TECHNICAL HEAD", currentRole: "Senior Executive" , organization: "Dalmia Cement Bharat Limited" ,  linkedIn: "https://www.linkedin.com/in/avinav-raj-singh-632641207/" },
    { name: "SHALVI KUMARI GUPTA", societyRole: "DESIGN & CREATIVE HEAD", currentRole: "Process Design Engineer" , organization: "Technip Energies" ,  linkedIn: "https://www.linkedin.com/in/shalvi-gupta-5b98b3209/" },
    { name: "NISHANT KUMAR YADAV", societyRole: "ALUMNI INCHARGE", currentRole: "Senior Process Engineer" , organization: "Tata Consulting Engineers" ,  linkedIn: "https://www.linkedin.com/in/nishantydv28/" },
    { name: "RASHMITA SOREN", societyRole: "ALUMNI INCHARGE", currentRole: "Assistant Manager" , organization: "Vedanta Aluminium Metal Limited" ,  linkedIn: "https://www.linkedin.com/in/rashmita-soren/" },
    { name: "ADARSH KUMAR", societyRole: "PUBLIC RELATION OFFICER", currentRole: "" , organization: "" ,  linkedIn: "https://www.linkedin.com/in/adarsh-kumar-63a3a1220/" },
    { name: "ASHUTOSH KUMAR PANDEY", societyRole: "PUBLIC RELATION OFFICER", currentRole: "Process Engineer" , organization: "Technip Energies" ,  linkedIn: "https://www.linkedin.com/in/ashutosh-kumar-pandey-039833217/" },
    { name: "SAHITYA SUMAN", societyRole: "EVENT COORDINATOR", currentRole: "Process Engineer" , organization: "Shree Cement Ltd." , linkedIn: "https://www.linkedin.com/in/sahitya-suman-080866221/" },
    { name: "ARJUN SRIVASTAVA", societyRole: "EVENT COORDINATOR", currentRole: "Process Engineer" , organization: "Tata Consulting Engineers Limited" ,  linkedIn: "https://www.linkedin.com/in/arjun-srivastava-453010209/" },
  ];

  const team19 = [
    { name: "ABHISHEK KUMAR", societyRole: "CONVENOR", currentRole: "" , organization: "" ,  linkedIn: "" },
    { name: "SINCHITA GHOSH", societyRole: "CO-CONVENOR", currentRole: "Assistant Manager" , organization: "Hindalco" ,  linkedIn: "https://www.linkedin.com/in/sinchita-ghosh-hazra/" },
    { name: "SAURABH MISHRA",  societyRole: "CO-CONVENOR", currentRole: "Engineer - Global Technical Sales" , organization: "Velocys" ,  linkedIn: "https://www.linkedin.com/in/saurabh-mishra-23042b1a9/" },
    { name: "AMBER KUMAR",  societyRole: "SECRETARY", currentRole: "GET" , organization: "GRASIM INDUSTRIES LIMITED (ABG)" ,  linkedIn: "https://www.linkedin.com/in/amber-kumar-9819621a7/" },
    { name: "MD. SAHIL",  societyRole: "JOINT SECRETARY", currentRole: "Data Analyst" , organization: "Precision AQ" ,  linkedIn: "https://www.linkedin.com/in/md-sahil-7945a2195/" },
    { name: "BHUMIKA ORANON", societyRole: "JOINT SECRETARY", currentRole: "Assistant Manager" , organization: "Hindustan Zinc Limited" ,  linkedIn: "https://www.linkedin.com/in/bhumika-oraon-3354111b4/" },
    { name: "HARSHA SINHA", societyRole: "TREASURER", currentRole: "Assistant Manager" , organization: "ArcelorMittal Nippon Steel India" ,  linkedIn: "https://www.linkedin.com/in/harsha-sinha-9a51601a1/" },
    { name: "NITISH KUMAR", societyRole: "JOINT TREASURER", currentRole: "" , organization: "" ,  linkedIn: "" },
    { name: "DIPIKA MARDI", societyRole: "JOINT TREASURER", currentRole: "" , organization: "" ,  linkedIn: "https://www.linkedin.com/in/dipika-mardi-2562701b2/" },
    { name: "POOJA KUMARI", societyRole: "TECHNICAL HEAD", currentRole: "Assistant manager" , organization: "Vedanta Limited" ,  linkedIn: "https://www.linkedin.com/in/pooja-kumari-7131731aa/" },
    { name: "ANJALI SAH", societyRole: "CONTENT DEVELOPMENT HEAD", currentRole: "Grade A officer (Production Engineer)" , organization: "Indian Oil Corp Limited" ,  linkedIn: "https://www.linkedin.com/in/anjali-sah-133a1a1a6/" },
    { name: "SACHIN HEMBRAM", societyRole: "ALUMNI INCHARGE", currentRole: "" , organization: "" ,  linkedIn: "https://www.linkedin.com/in/sachin-h-82b940201/" },
    { name: "DIBYA RASHMI", societyRole: "ALUMNI INCHARGE", currentRole: "MTech" , organization: "IIT Bombay" ,  linkedIn: "https://www.linkedin.com/in/dibya-rashmi-6191bb206/" },
    { name: "RIYA SINGH", societyRole: "PUBLIC RELATION OFFICER", currentRole: "" , organization: "" ,  linkedIn: "" },
    { name: "SHUBHAM KUMAR", societyRole: "PUBLIC RELATION OFFICER", currentRole: "" , organization: "" ,  linkedIn: "" },
    { name: "SIMRAN", societyRole: "EVENT COORDINATOR", currentRole: "" , organization: "" ,  linkedIn: "" },
    { name: "ROBINS MEHRA", societyRole: "EVENT COORDINATOR",currentRole: "" , organization: "" ,  linkedIn: "https://www.linkedin.com/in/robins-mehra-0535961b2/" },
  ];

  const team18 = [
    { name: "KESHU RANJAN", societyRole: "CONVENOR", currentRole: "Analytics Consultant" , organization: "Tredence Inc." ,  linkedIn: "https://www.linkedin.com/in/keshu-ranjan-53005275/" },
    { name: "SANJU KUMARI", societyRole: "CO-CONVENOR" , currentRole: "Officer Grade A" , organization: "Indian Oil Corporation Ltd" ,  linkedIn: "https://www.linkedin.com/in/sanju-kumari-777762167/" },
    { name: "SAURABH BHARDWAJ", societyRole: "SECRETARY", currentRole: "Deputy Manager" , organization: "Adani Cement" ,  linkedIn: "https://www.linkedin.com/in/saurabh-bhardwaj-2a6a8b1a0/" },
    { name: "SAMEER KUMAR", societyRole: "JOINT SECRETARY", currentRole: "" , organization: "" ,  linkedIn: ""},
    { name: "AFSHA IZHAR", societyRole: "JOINT SECRETARY & PUBLIC RELATION OFFICER", currentRole: "Assistant Manager" , organization: "ESL Steel Limited" ,  linkedIn: "https://www.linkedin.com/in/afsha-izhar-774796195/" },
    { name: "TRILOKY BARAIK", societyRole: "TREASURER", currentRole: "SOC & NOC Analyst" , organization: "TeamLogic IT Newtown PA" ,  linkedIn: "https://www.linkedin.com/in/triloky-baraik-8557631b9/" },
    { name: "RAHUL KUMAR", societyRole: "JOINT TREASURER", currentRole: "" , organization: "" ,  linkedIn: "" },
    { name: "SNEHA", societyRole: "JOINT TREASURER & ALUMNI INCHARGE", currentRole: "" , organization: "" ,  linkedIn: "" },
    { name: "BINIT GORAI", societyRole: "TECHNICAL HEAD & EVENT COORDINATOR", currentRole: "MBA" , organization: "IIM Visakhapatnam" ,  linkedIn: "https://www.linkedin.com/in/binitkumar-gorai-iimv/" },
    { name: "SHUBHAM SAHU", societyRole: "TECHNICAL HEAD", currentRole: "" , organization: "" ,  linkedIn: "https://www.linkedin.com/in/shubham-sahu-415a44193/" },
    { name: "SHIVANI SINGH", societyRole: "TECHNICAL HEAD & EVENT COORD.",currentRole: "Assistant Manager" , organization: "Grasim Industries Limited | Pulp & Fibre" ,  linkedIn: "https://www.linkedin.com/in/shivani-singh-855a73189/" },
    { name: "SHUBHAM SINGH", societyRole: "PRO, EVENT COORD., HOSPITALITY HEAD & ALUMNI INC.", currentRole: "Assistant Manager" , organization: "Bharat Coking Coal Limited" ,  linkedIn: "https://www.linkedin.com/in/shubham-singh-32b7221bb/" },
    { name: "VARSHA", societyRole: "ALUMNI INCHARGE", currentRole: "Associate Manager" , organization: "Vedanta Limited - Aluminium Business" ,  linkedIn: "https://www.linkedin.com/in/varsha-agarwal-04a97b1a1/" },
    { name: "MANVENDU", societyRole: "LOGISTICS HEAD", currentRole: "Assistant Manager" , organization: "ACC Limited" ,  linkedIn: "https://www.linkedin.com/in/manvendu-thakur-4862831b7/" },
    { name: "MD. SAADIQUE IQBAL",societyRole: "HOSPITALITY HEAD & LOGISTICS HEAD", currentRole: "Assistant Manager" , organization: "Ambuja Cements Limited" ,  linkedIn: "https://www.linkedin.com/in/md-sadique-iqbal-7a8a42146/" },
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
    <div className="alumni">

      {/* ================= NAVBAR ================= */}
      <Navbar />

      {/* ================= HERO ================= */}
      <section className="team-hero reveal reveal-top">
        <h1>Our Alumni</h1>
        <p>Meet our Alumni</p>
      </section>

      {/* ================= TEAM ================= */}

      {/* 2K22 */}
      <div className="batch-heading-wrapper">
        <h1 className="teamtext-alumni">BATCH 2K22</h1>
      </div>
      
      <section className="team-container-alumni">
        {team22.map((member, idx) => (
          <div className="team-card-alumni reveal reveal-left" key={idx}>
            <div className="batch-badge">2K22</div>

            <img src={member.image} alt={member.name} />
            {/* NORMAL CONTENT */}
            <div className="team-content">
              <a href={member.linkedIn} target="blank" className="alumni-link"><h3 class="alumniName">{member.name}</h3></a>
              <p>SOCIETY ROLE: <b>{member.societyRole}</b> </p>
              <br />
              {/*<p>CURRENT ROLE: {member.currentRole}</p>*/}
              {/*<p>ORGANISATION: {member.organization}</p> */}
            </div>
          </div>
        ))}
      </section>

      {/* 2K21 */}
     <div className="batch-heading-wrapper">
       <h1 className="teamtext-alumni">BATCH 2K21</h1>
     </div>
      <section className="team-container-alumni">
        {team21.map((member, idx) => (
          <div className="team-card-alumni reveal reveal-left" key={idx}>
            <div className="batch-badge">2K21</div>
            {/* NORMAL CONTENT */}
            <div className="team-content">
              <a href={member.linkedIn} target="blank" className="alumni-link"><h3 class="alumniName">{member.name}</h3></a>
              <p>SOCIETY ROLE: <b>{member.societyRole}</b> </p>
              <br />
              <p>CURRENT ROLE: {member.currentRole}</p>
              <p>ORGANISATION: {member.organization}</p>
            </div>
          </div>
        ))}
      </section>

      {/* 2K20 */}

     <div className="batch-heading-wrapper">
       <h1 className="teamtext-alumni">BATCH 2K20</h1>
     </div>
      <section className="team-container-alumni">
        {team20.map((member, idx) => (
          <div className="team-card-alumni reveal reveal-left" key={idx}>
            <div className="batch-badge">2K20</div>
            {/* NORMAL CONTENT */}
            <div className="team-content">
              <a href={member.linkedIn} target="blank" className="alumni-link"><h3 class="alumniName">{member.name}</h3></a>
              <p>SOCIETY ROLE: <b>{member.societyRole}</b> </p>
              <br />
              <p>CURRENT ROLE: {member.currentRole}</p>
              <p>ORGANISATION: {member.organization}</p>
            </div>
          </div>
        ))}
      </section>

      {/* 2K19 */}
      <div className="batch-heading-wrapper">
       <h1 className="teamtext-alumni">BATCH 2K19</h1>
     </div>
      <section className="team-container-alumni">
        {team19.map((member, idx) => (
          <div className="team-card-alumni reveal reveal-left" key={idx}>
            <div className="batch-badge">2K19</div>
            {/* NORMAL CONTENT */}
            <div className="team-content">
              <a href={member.linkedIn} target="blank" className="alumni-link"><h3 class="alumniName">{member.name}</h3></a>
              <p>SOCIETY ROLE: <b>{member.societyRole}</b> </p>
              <br />
              <p>CURRENT ROLE: {member.currentRole}</p>
              <p>ORGANISATION: {member.organization}</p>
            </div>
          </div>
        ))}
      </section>

      {/* 2K18 */}
      <div className="batch-heading-wrapper">
       <h1 className="teamtext-alumni">BATCH 2K18</h1>
     </div>
      <section className="team-container-alumni">
        {team18.map((member, idx) => (
          <div className="team-card-alumni reveal reveal-left" key={idx}>
            <div className="batch-badge">2K18</div>
            {/* NORMAL CONTENT */}
            <div className="team-content">
              <a href={member.linkedIn} target="blank" className="alumni-link"><h3 class="alumniName">{member.name}</h3></a>
              <p>SOCIETY ROLE: <b>{member.societyRole}</b> </p>
              <br />
              <p>CURRENT ROLE: {member.currentRole}</p>
              <p>ORGANISATION: {member.organization}</p>
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