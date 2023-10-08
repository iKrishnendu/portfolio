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
// import { ThemeProvider } from "next-themes";

import AOS from "aos";
import "aos/dist/aos.css";
import Resume from "./routes/Resume";
import AnimatedCursor from "react-animated-cursor";
import Blog from "./components/Blog";
// ..install aos for animation.. transition
AOS.init({
  // offset: 200,
  duration: 3000,
});

function App() {
  return (
    <>
      {/* <ThemeProvider> */}
      <div className="particle">{/* <Particle/>  */}</div>
      <ScrollToTop />
      <Theme />
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        hasBlendMode={true}
        innerStyle={{
          backgroundColor: "var(--cursor-color)",
        }}
        outerStyle={{
          border: "3px solid var(--cursor-color)",
        }}
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      {/* </ThemeProvider> */}
    </>
  );
}

export default App;
