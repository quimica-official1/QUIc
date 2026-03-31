import React, { useEffect } from "react";
import "../styles/gallery.css";
import Navbar from "./navbar";
import Footer from "./footer";

/* 🔥 CONFIG */
const Section1 = [
  {
    title: "Orientation 25",
    folder: "Orientation25",
    images: [
      { src: "image1.jpg"},
      { src: "image2.jpg"},
      { src: "image3.jpg"},
      { src: "img_4.jpg"},
      { src: "img_5.jpg"},
      { src: "img_6.jpg"},
    ],
  },
];

const Section2 = [
  {
    title: "QUIMICA 25",
    folder: "Quimica25",
    images: [
      { src: "image1.jpg"},
      { src: "image2.jpg"},
      { src: "image3.jpg"},
      { src: "image4.jpg"},
      { src: "img_5.jpg"},
      { src: "img_6.jpg"},
    ],
  },
];

const Section3 = [
  {
    title: "QUIMICA 23",
    folder: "Quimica23",
    images: [
      { src: "image1.jpg"},
      { src: "image2.jpg"},
      { src: "image3.jpg"},
      { src: "image4.jpg"},
      { src: "image5.jpg"},
      { src: "image6.jpg"},
    ],
  },
];

const BASE_PATH = "/assets/gallery/";

const Gallery = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <div className="gallery-page">
      <Navbar />

      <section className="gallery-header">
        <h1>GALLERY</h1>
      </section>

      <h1 className="section-heading">Quimica 25</h1>
      {Section1.map((section, index) => (
        <div key={index} className="gallery-grid">
          {section.images.map((img, i) => (
            <div key={i} className="gallery-card">
              <img
                src={`${BASE_PATH}${section.folder}/${img.src}`}
                alt={img.label}
              />
              <div className="overlay">
                <p>{img.label}</p>
              </div>
            </div>
          ))}
        </div>
      ))}


      <h1 className="section-heading">Orientation 25</h1>
      {Section2.map((section, index) => (
        <div key={index} className="gallery-grid">
          {section.images.map((img, i) => (
            <div key={i} className="gallery-card">
              <img
                src={`${BASE_PATH}${section.folder}/${img.src}`}
                alt={img.label}
              />
              <div className="overlay">
                <p>{img.label}</p>
              </div>
            </div>
          ))}
        </div>
      ))}

      <h1 className="section-heading">Quimica 23</h1>
      {Section3.map((section, index) => (
        <div key={index} className="gallery-grid">
          {section.images.map((img, i) => (
            <div key={i} className="gallery-card">
              <img
                src={`${BASE_PATH}${section.folder}/${img.src}`}
                alt={img.label}
              />
              <div className="overlay">
                <p>{img.label}</p>
              </div>
            </div>
          ))}
        </div>
      ))}

      <Footer />
    </div>
  );
};

export default Gallery;