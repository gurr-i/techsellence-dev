import "./App.css";
import Navbar from "./components/navbar";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/home";

function App() {
  // Parallel Scroll components effects
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // -------------------

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          {/* Mapping multiple path for one component */}
          {["/", "/techsellence_reactjs", "/Home"].map((path) => (
            <Route path={path} element={<Home />} />
          ))}
        </Routes>
      </Router>
    </>
  );
}

export default App;
