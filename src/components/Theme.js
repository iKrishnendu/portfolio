import React, { useState, useEffect } from "react";
import "./Theme.css";
import { BsFillMoonFill } from "react-icons/bs";
import { ImSun } from "react-icons/im";
import { Link } from "react-router-dom";
import { TbDownload } from "react-icons/tb";
// import { ThemeType } from "./types";

function Theme() {
  // const ThemeType = "dark-theme" | "light-theme";
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  const dataTheme = document.body.getAttribute("data-theme");

  useEffect(() => {
    // document.body.className = theme;
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
        {/* <button onClick={handleSwitchTheme}>
        <BsFillMoonFill />
      </button> */}

        <Link to="https://sahoo.vercel.app/resume" className="resume-download">
          <TbDownload />
        </Link>
        <button className="switch-theme-button" onClick={handleSwitchTheme}>
          {isDark ? <ImSun style={{ color: "white" }} /> : <BsFillMoonFill />}
        </button>
      </div>
    </>
  );
}

export default Theme;
