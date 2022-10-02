import React from "react";
import { Route, Routes } from "react-router-dom";

import './App.css';

import Navbar from "./navbar/Navbar";
import LandingPage from "./landing-page/LandingPage";
import Footer from './footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route index element={<LandingPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;