import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import Jobs from "./Components/Jobs";
import JobDetails from "./Components/JobDetails";
import PlansAndSignUp from "./Components/PlansAndSignUp";
import Footer from "./Components/Footer";

function AppRoutes() {
  const location = useLocation();

  return (
    <div>
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/home" element={<HeroSection />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/PlansAndSignUp" element={<PlansAndSignUp />} />
        <Route path="/JobDetails" element={<JobDetails />} />
      </Routes>
      {location.pathname !== "/JobDetails" && <Footer />}

    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <AppRoutes />

      </div>
    </Router>
  );
}

export default App;