import "./App.css";
import Navbar from "./components/navbar";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import Projects from "./components/Pages/Projects";
import Blogs from "./components/Pages/Blogs";
import Aboutus from "./components/Pages/Aboutus";
import Signup from "./components/Pages/Signup";
import Team from "./components/Pages/Team";


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

          {/* Home */}
          {["/", "/techsellence_reactjs", "/Home"].map((path) => (
            <Route path={path} element={<Home />} />
          ))}

          {/* Projects */}
          {["/Projects"].map((path) => (
            <Route path={path} element={<Projects />} />
          ))}
          
          {/* Team */}
          {["/Team"].map((path) => (
            <Route path={path} element={<Team />} />
          ))}         

          {/* Blogs */}
          {["/Blogs"].map((path) => (
            <Route path={path} element={<Blogs />} />
          ))}

          {/* Aboutus */}
          {["/About_Us"].map((path) => (
            <Route path={path} element={<Aboutus />} />
          ))}

          {/* Signup */}
          {["/sign-up"].map((path) => (
            <Route path={path} element={<Signup />} />
          ))}

        </Routes>
      </Router>
    </>
  );
}

export default App;
