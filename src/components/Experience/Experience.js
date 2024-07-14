import React, { useState } from "react";
import "./Experience.css";

const experienceData = [
  {
    company: "0101DigitAll",
    role: "Full Stack Developer Intern",
    duration: "Feb 2024 - Present",
    description: [
      "Working on various front-end technologies including React and Next.js, developing responsive and dynamic web applications with a focus on user experience and performance optimization.",
      "Built and maintained APIs using Node.js and Express, ensuring seamless communication between the frontend and backend, and integrating third-party services to enhance functionality.",
      "Designed and implemented low-level components, collaborating with cross-functional teams on real-time projects, conducting code reviews, and following Agile methodologies to deliver high-quality software solutions.",
    ],
  },
  {
    company: "IBM Skillbuild",
    role: "Data Science Intern",
    duration: "Nov 2023 - Dec 2023",
    description: [
      "Participated in a one-month program organized by IBM SkillBuild and CSRBox, gaining foundational knowledge in data science and analytics.",
      "Successfully completed the program and received a certificate of achievement.",
      "Worked on practical data science projects, applying statistical analysis and machine learning techniques to real-world datasets.",
    ],
  },
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
              <li key={index}>
                <p>{point}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
