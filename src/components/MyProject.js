import React from "react";
import "./MyProject.css";
import project from "../assets/logo.png";
import kbytes from "../assets/k-bytes.png";
import portfolio from "../assets/potfolio.png";
import githubApi from "../assets/github-api.png";
import speedtest from "../assets/speedtest.png";

import { BsGithub } from "react-icons/bs";
import { SiDarkreader } from "react-icons/si";
import { CgWebsite } from "react-icons/cg";

function MyProject() {
  return (
    <div className="myproject--component">
      <h1>My Recent Works</h1>
      <p>Here are a few projects I worked on recently </p>
      <div className="myproject--cards">
        <div className="myproject--card">
          <img src={kbytes} className="project--image" />
          <p>k-bytes | The blog App</p>
          <p>
            I am a full stack web developer (MERN) and build websites using
            HTML, CSS, Javascript, ReactJs. I have also good grasp on Node and
            NoSQL(MongoDb)
          </p>
          <div className="myproject--buttons">
            <button className="myproject--button">
              <BsGithub /> Github
            </button>
            <button className="myproject--button">
              <SiDarkreader /> Demo
            </button>
          </div>
        </div>
        <div className="myproject--card">
          <img src={portfolio} className="project--image" />
          <p>Sahoo | Portfolio website</p>
          <p>
            I am a full stack web developer (MERN) and build websites using
            HTML, CSS, Javascript, ReactJs. I have also good grasp on Node and
            NoSQL(MongoDb)
          </p>
          <div className="myproject--buttons">
            <button className="myproject--button">
              <BsGithub /> Github
            </button>
            <button className="myproject--button">
              <SiDarkreader /> Demo
            </button>
          </div>
        </div>
        <div className="myproject--card">
          <img src={githubApi} className="project--image" />
          <p>Github Api</p>
          <p>
            I am a full stack web developer (MERN) and build websites using
            HTML, CSS, Javascript, ReactJs. I have also good grasp on Node and
            NoSQL(MongoDb)
          </p>
          <div className="myproject--buttons">
            <button className="myproject--button">
              <BsGithub /> Github
            </button>
            <button className="myproject--button">
              <SiDarkreader /> Demo
            </button>
          </div>
        </div>
        <div className="myproject--card">
          <img src={speedtest} className="project--image" />
          <p>Github Api</p>
          <p>
            I am a full stack web developer (MERN) and build websites using
            HTML, CSS, Javascript, ReactJs. I have also good grasp on Node and
            NoSQL(MongoDb)
          </p>
          <div className="myproject--buttons">
            <button className="myproject--button">
              <BsGithub /> Github
            </button>
            <button className="myproject--button">
              <SiDarkreader /> Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyProject;
