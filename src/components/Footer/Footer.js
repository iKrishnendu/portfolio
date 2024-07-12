import React, { useState } from "react";
import "./Footer.css";

const versions = [
  {
    version: "1.0.0",
    releaseDate: "2023-01-01",
    description: [
      "Initial release with basic features.",
      "Added user authentication.",
    ],
    link: "#",
  },
  {
    version: "1.1.0",
    releaseDate: "2023-03-01",
    description: [
      "Added new features and bug fixes.",
      "Improved UI for better user experience.",
    ],
    link: "#",
  },
  {
    version: "1.2.0",
    releaseDate: "2023-06-01",
    description: [
      "Improved performance and minor updates.",
      "Fixed issues with data synchronization.",
    ],
    link: "#",
  },
  {
    version: "2.0.0",
    releaseDate: "2024-01-01",
    description: [
      "Major update with new design and features.",
      "Introduced dark mode.",
    ],
    link: "#",
  },
];

export const Footer = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };
  const latestVersion = versions[versions.length - 1].version;

  return (
    <footer className="footer">
      <p>Designed & Developed by Krishnendu Sahoo</p>
      <p onClick={togglePopup} className="version-text">
        Version {latestVersion}
      </p>
      {isPopupOpen && (
        <div className="version-popup">
          <div className="version-popup-content">
            <button className="close-popup" onClick={togglePopup}>
              &times;
            </button>
            <h3>Version History</h3>
            <ul>
              {versions.map((version, index) => (
                <li key={index} className="version-item">
                  <b>{version.version}</b> - {version.releaseDate}
                  <ul>
                    {version.description.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                  <a href={version.link}>Visit</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </footer>
  );
};
