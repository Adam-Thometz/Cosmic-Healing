import React from "react";
import { Route, Routes } from "react-router-dom";

import './App.css';

import Navbar from "./navbar/Navbar";
import LandingPage from "./landing-page/LandingPage";
import Services from "./services/Services";
import Footer from './footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route index exact element={<LandingPage />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;