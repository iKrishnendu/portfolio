import React, { useState } from "react";
import "./Experience.css";

const experienceData = [
  {
    company: "0101DigitAll",
    role: "Software Developer Intern",
    duration: "June 2023 - Present",
    description: [
      "Working on various front-end technologies including React and Next.js.",
      "Developed custom solutions for Salesforce clients using Apex and Visualforce.",
      "Worked on integrating third-party APIs for data synchronization.",
    ],
  },
  {
    company: "Salesforce",
    role: "Intern",
    duration: "January 2023 - May 2023",
    description: [
      "Developed custom solutions for Salesforce clients using Apex and Visualforce.",
      "Worked on integrating third-party APIs for data synchronization.",
    ],
  },
  // Add more experiences as needed
];

export const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState(
    experienceData[0]
  );

  return (
    <div id="experience" className="experience-section">
      <div className="experience-heading">
        <h2>02. Experence</h2>
      </div>
      <div className="experience">
        <div className="experience-list">
          {experienceData.map((exp, index) => (
            <div
              key={index}
              className={`experience-item ${
                selectedExperience === exp ? "active" : ""
              }`}
              onClick={() => setSelectedExperience(exp)}
            >
              {exp.company}
            </div>
          ))}
        </div>
        <div className="experience-details">
          <h2>
            {selectedExperience.role}
            <span className="company-name">
              {" "}
              @ {selectedExperience.company}
            </span>
          </h2>
          <p>{selectedExperience.duration}</p>
          <ul>
            {selectedExperience.description.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
