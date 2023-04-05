import React, { useState, useEffect } from "react";
import "./Theme.css";
import { BsFillMoonFill } from "react-icons/bs";
import { BsFillSunFill } from "react-icons/bs";

function Theme() {
  const [theme, setTheme] = useState("light-theme");
  // const [themeImg, setThemeImg] = useState(<BsFillMoonFill />);
  const toggleThemeHandler = () => {
    if (theme === "dark-theme") {
      setTheme("light-theme");
      // setThemeImg("<BsFillSunFill/>");
    } else {
      setTheme("dark-theme");
      // setThemeImg("<BsFillMoonFill/>");
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  // useEffect(() => {
  //   document.body.className = themeImg;
  // }, [themeImg]);

  return (
    <div className="theme-css">
      <button onClick={toggleThemeHandler}>
        <BsFillMoonFill />
      </button>
    </div>
  );
}

export default Theme;
