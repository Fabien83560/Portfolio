import React, { useState, useEffect, Suspense, lazy } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
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

const Home = lazy(() => import("./components/Home/Home"));
const About = lazy(() => import("./components/About/About"));
const Projects = lazy(() => import("./components/Projects/Projects"));
const Parcours = lazy(() => import("./components/Parcours/Parcours"));

const OutilPresentation = lazy(() => import("./components/Projects/Articles/outil-presentation"));
const OutilCalibration = lazy(() => import("./components/Projects/Articles/outil-calibration"));
const Counterpro = lazy(() => import("./components/Projects/Articles/counterpro"));
const Eventbattles = lazy(() => import("./components/Projects/Articles/eventbattles"));
const DemonstrateurOpengl = lazy(() => import("./components/Projects/Articles/demonstrateur-opengl"));
const StatistiquesHypixel = lazy(() => import("./components/Projects/Articles/statistiques-hypixel"));
const ColorPointPolygon = lazy(() => import("./components/Projects/Articles/color-point-polygon"));
const PetitPrince = lazy(() => import("./components/Projects/Articles/petit-prince"));

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
        <Suspense fallback={<Preloader load={true} />}>
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
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
}

export default App;