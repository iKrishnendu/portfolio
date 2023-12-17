// Theme.js

import React, { useState, useEffect } from "react";
import "./Theme.css";
import { BsFillMoonFill } from "react-icons/bs";
import { ImSun } from "react-icons/im";
import { Link } from "react-router-dom";
import { TbDownload } from "react-icons/tb";
import Comet from "../components/Comet"; // Import the Comet component

function Theme() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  const handleSwitchTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  const isDark = theme === "dark";

  return (
    <>
      <div className="theme-css">
        <Link to="https://sahoo.vercel.app/resume" className="resume-download">
          <TbDownload />
        </Link>
        <button className="switch-theme-button" onClick={handleSwitchTheme}>
          {isDark ? <ImSun style={{ color: "white" }} /> : <BsFillMoonFill />}
        </button>
      </div>
      {isDark && <Comet />} {/* Render Comet component only in dark mode */}
    </>
  );
}

export default Theme;
