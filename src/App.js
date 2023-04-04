import React from "react";

import "./index.css";
// import "./scrollbar.css"
import Home from "./routes/Home";
import About from "./routes/About";
import Project from "./routes/Project";
import Contact from "./routes/Contact";
import Blogs from "./routes/Blogs";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Design from "./components/Design";
import Particle from "./components/Particle";
import Theme from "./components/Theme";

function App() {
  return (
    <>
      <div className="particle">{/* <Particle/>  */}</div>

      <ScrollToTop />
      <Theme />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
    </>
  );
}

export default App;
