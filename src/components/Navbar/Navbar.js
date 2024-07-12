// Navbar.js
import React, { useState, useEffect } from "react";
import "./Navbar.css";
import Theme from "../../theme/Theme";

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState("about"); // Default active section

  // Function to handle click on navbar links
  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    // Scroll to the selected section
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Function to update active section based on scroll position
  const handleScroll = () => {
    const scrollPosition = window.scrollY + 150; // Adjust for floating point
    const sections = ["about", "experience", "projects", "contact"];

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (
        element &&
        element.offsetTop <= scrollPosition &&
        element.offsetTop + element.offsetHeight > scrollPosition
      ) {
        setActiveSection(section);
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-center">
        <ul>
          <li className={activeSection === "about" ? "active" : ""}>
            <button onClick={() => handleNavClick("about")}>About</button>
          </li>
          <li className={activeSection === "experience" ? "active" : ""}>
            <button onClick={() => handleNavClick("experience")}>
              Experience
            </button>
          </li>
          <li className={activeSection === "projects" ? "active" : ""}>
            <button onClick={() => handleNavClick("projects")}>Projects</button>
          </li>
          <li className={activeSection === "contact" ? "active" : ""}>
            <button onClick={() => handleNavClick("contact")}>Contact</button>
          </li>
          <li>
            <Theme />
          </li>
        </ul>
      </div>
    </nav>
  );
};
