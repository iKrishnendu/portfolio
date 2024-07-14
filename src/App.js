import React from "react";

import "./index.css";
import Home from "./routes/Home";
import Project from "./routes/Project";
import Blogs from "./routes/Blogs";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./lib/ScrollToTop";
import Theme from "./theme/Theme";
import AOS from "aos";
import "aos/dist/aos.css";
import AnimatedCursor from "react-animated-cursor";
import { Blog } from "./components/index";
import { SpeedInsights } from "@vercel/speed-insights/react";

// ..install aos for animation.. transition
AOS.init({
  // offset: 200,
  duration: 3000,
});

function App() {
  return (
    <>
      <div className="particle">{/* <Particle/>  */}</div>
      <ScrollToTop />
      {/* 
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={0.5}
        outerScale={2}
        outerAlpha={0}
        // hasBlendMode={true}
        innerStyle={{
          backgroundColor: "var(--cursor-color)",
        }}
        outerStyle={{
          border: "3px solid var(--cursor-color)",
        }}
      /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />

        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>

      <SpeedInsights />
    </>
  );
}

export default App;
