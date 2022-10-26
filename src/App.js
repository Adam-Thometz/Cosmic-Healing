import React from "react";
import { Route, Routes } from "react-router-dom";

import './App.css';

import Navbar from "./navbar/Navbar";
import LandingPage from "./landing-page/LandingPage";
import Services from "./services/Services";
import Footer from './footer/Footer';
import AboutMe from "./about-me/AboutMe";
import NavbarResponsive from "./navbar/NavbarResponsive";

function App() {
  return (
    <div className="App">
      {window.innerWidth <= 750
        ? <NavbarResponsive style={{ "--i": 0 }} />
        : <Navbar style={{ "--i": 0 }} />
      }
      <Routes>
        <Route index exact element={<LandingPage />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;