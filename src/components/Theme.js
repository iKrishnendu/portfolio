import React, { useState, useEffect } from "react";
import "./Theme.css";

function Theme() {
  const [theme, setTheme] = useState("light-theme");
  const toggleThemeHandler = () => {
    if (theme === "dark-theme") {
      setTheme("light-theme");
    } else {
      setTheme("dark-theme");
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className="theme-css">
      <button onClick={toggleThemeHandler}>Toggle</button>
    </div>
  );
}

export default Theme;
