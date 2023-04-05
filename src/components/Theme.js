import React, { useState, useEffect } from "react";
import "./Theme.css";
import { BsFillMoonFill } from "react-icons/bs";
import { BsFillSunFill } from "react-icons/bs";
import { ThemeType } from "./types";

function Theme() {
  // const ThemeType = "dark-theme" | "light-theme";
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const dataTheme = document.body.getAttribute("data-theme");
  // const [theme, setTheme] =
  //   useState <
  //   ThemeType >
  //   ((): ThemeType => (dataTheme === "light" ? "light" : "dark"));

  useEffect(() => {
    // document.body.className = theme;
    localStorage.setItem("theme", theme);
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  const handleSwitchTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };
  const isDark = theme === "dark";
  // const [theme, setTheme] =
  //   React.useState <
  //   ThemeType >
  //   ((): ThemeType => (dataTheme === "light" ? "light" : "dark"));

  // React.useEffect(() => {
  //   document.body.setAttribute("data-theme", theme);
  // }, [theme]);

  // const handleSwitchTheme = () => {
  //   setTheme(isDark ? "light" : "dark");
  // };

  // const isDark = theme === "dark";

  return (
    <div className="theme-css">
      {/* <button onClick={handleSwitchTheme}>
        <BsFillMoonFill />
      </button> */}
      <button className="switch-theme-button" onClick={handleSwitchTheme}>
        {isDark ? <BsFillSunFill color="white" /> : <BsFillMoonFill />}
      </button>
    </div>
  );
}

export default Theme;
