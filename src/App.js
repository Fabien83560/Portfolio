import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Parcours from "./components/Parcours/Parcours";
import Footer from "./components/Footer";

import OutilPresentation from "./components/Projects/Articles/outil-presentation";
import OutilCalibration from "./components/Projects/Articles/outil-calibration";
import Counterpro from "./components/Projects/Articles/counterpro";
import Eventbattles from "./components/Projects/Articles/eventbattles";
import DemonstrateurOpengl from "./components/Projects/Articles/demonstrateur-opengl";
import StatistiquesHypixel from "./components/Projects/Articles/statistiques-hypixel";
import ColorPointPolygon from "./components/Projects/Articles/color-point-polygon";
import PetitPrince from "./components/Projects/Articles/petit-prince";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projets" element={<Projects />} />
          <Route path="/propos" element={<About />} />
          <Route path="/parcours" element={<Parcours />} />
          <Route path="/outil-presentation" element={<OutilPresentation />} />
          <Route path="/outil-calibration" element={<OutilCalibration />} />
          <Route path="/counterpro" element={<Counterpro />} />
          <Route path="/eventbattles" element={<Eventbattles />} />
          <Route path="/demonstrateur-opengl" element={<DemonstrateurOpengl />} />
          <Route path="/statistiques-hypixel" element={<StatistiquesHypixel />} />
          <Route path="/color-point-polygon" element={<ColorPointPolygon />} />
          <Route path="/petit-prince" element={<PetitPrince />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
