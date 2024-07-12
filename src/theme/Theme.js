import React, { useState, useEffect } from "react";
import "./Theme.css";
import { BsFillMoonFill } from "react-icons/bs";
import { ImSun } from "react-icons/im";
import { Comet } from "../components/index";

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
        <button className="switch-theme-button" onClick={handleSwitchTheme}>
          {isDark ? <ImSun style={{ color: "white" }} /> : <BsFillMoonFill />}
        </button>
      </div>
      {isDark && <Comet />}
    </>
  );
}

export default Theme;
