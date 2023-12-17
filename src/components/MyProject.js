import React from "react";
import { Tilt } from "react-tilt";
import "./MyProject.css";
import { BsGithub } from "react-icons/bs";
import { SiDarkreader } from "react-icons/si";

// Import project images
import kbytes from "../assets/k-bytes.png";
import portfolio from "../assets/potfolio.png";
import githubApi from "../assets/github-api.png";
import speedtest from "../assets/speedtest.png";

// Create an array of project data
const projects = [
  {
    image: kbytes,
    title: "Sahoo-blog | The blog App",
    description:
      "I am a full stack web developer (MERN) and build websites using HTML, CSS, Javascript, ReactJs. I have also a good grasp of Node and NoSQL(MongoDb)",
    color: "#FFA07A", // Light Salmon
  },
  {
    image: portfolio,
    title: "Sahoo | Portfolio website",
    description:
      "I am a full stack web developer (MERN) and build websites using HTML, CSS, Javascript, ReactJs. I have also a good grasp of Node and NoSQL(MongoDb)",
    color: "#98FB98", // Pale Green
  },
  {
    image: githubApi,
    title: "Github Api",
    description:
      "I am a full stack web developer (MERN) and build websites using HTML, CSS, Javascript, ReactJs. I have also a good grasp of Node and NoSQL(MongoDb)",
    color: "#87CEEB", // Sky Blue
  },
  {
    image: speedtest,
    title: "SpeedTest",
    description:
      "I am a full stack web developer (MERN) and build websites using HTML, CSS, Javascript, ReactJs. I have also a good grasp of Node and NoSQL(MongoDb)",
    color: "#FFD700", // Gold
  },
  {
    image: speedtest,
    title: "ODOP - Ecommerce",
    description:
      "I am a full stack web developer (MERN) and build websites using HTML, CSS, Javascript, ReactJs. I have also a good grasp of Node and NoSQL(MongoDb)",
    color: "#FF6347", // Tomato
  },
  {
    image: speedtest,
    title: "Weather App",
    description:
      "I am a full stack web developer (MERN) and build websites using HTML, CSS, Javascript, ReactJs. I have also a good grasp of Node and NoSQL(MongoDb)",
    color: "#DDA0DD", // Plum
  },
  {
    image: speedtest,
    title: "Find Images API",
    description:
      "I am a full stack web developer (MERN) and build websites using HTML, CSS, Javascript, ReactJs. I have also a good grasp of Node and NoSQL(MongoDb)",
    color: "#87CEFA", // Light Sky Blue
  },
  // Add more projects as needed
];

const defaultOptions = {
  reverse: false, // reverse the tilt direction
  max: 35, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};

function MyProject() {
  return (
    <div className="myproject--component">
      <h1>My Recent Works</h1>
      <p>Here are a few projects I worked on recently </p>
      <div className="myproject--cards">
        {projects.map((project, index) => (
          <div
            key={index}
            // options={defaultOptions}
            className="tilt-card myproject--card"
            style={{ backgroundColor: project.color }}
          >
            <img
              src={project.image}
              className="project--image"
              alt={project.title}
            />
            <b>{project.title}</b>
            <p>{project.description}</p>
            <div className="myproject--buttons">
              <button className="myproject--button">
                <BsGithub /> Github
              </button>
              <button className="myproject--button">
                <SiDarkreader /> Demo
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyProject;
