import React from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/homePage';
import OurTeam from './pages/ourTeam';
import Events from './pages/event';
import Contact from "./pages/contact";
import Quimica25 from "./pages/quimica25";
import Quimica23 from "./pages/quimica23";
import Achievements from "./pages/achievements";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ourTeam" element={<OurTeam />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/quimica23" element={<Quimica23 />} />
        <Route path="/quimica25" element={<Quimica25 />} />
        <Route path="/achievements" element={<Achievements />} />
    </Routes>
  </BrowserRouter>
);