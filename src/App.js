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
import ErrorPage from "./routes/ErrorPage";

// ..install aos for animation.. transition
AOS.init({
  // offset: 200,
  duration: 3000,
});

function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>

      <SpeedInsights />
    </>
  );
}

export default App;
