import React from "react";
import "./Aboutme.css";
import Logo from "../../assets/logo.png";
import Myphoto from "../../assets/image/krishnendu.jpeg";
import { Link } from "react-router-dom";
export const AboutMe = () => {
  return (
    <div id="about" className="about-me-section">
      <div className="about-me-heading">
        <h2>01. About Me</h2>
      </div>
      <div className="aboutme">
        <div className="about--image">
          <img src={Myphoto} alt="Krishnendu Sahoo" />
        </div>

        <div className="right-side">
          <div className="card--aboutme-div">
            <p className="p-aboutme">LET'S INTRODUCE MYSELF 😁</p>
            <h2 className="about--text">WHO AM I?</h2>
            <div className="about--card">
              <div className="card--header">
                <span className="dot red"></span>
                <span className="dot orange"></span>
                <span className="dot green"></span>
              </div>
              <div className="about--body">
                👋 Welcome to my website! I'm <b>Krishnendu Sahoo</b>, a{" "}
                <span className="cse-bg">Computer Science Engineering</span>{" "}
                student at{" "}
                <Link to="https://tib.edu.in" className="tib-bg">
                  Techno India, Batanagar
                </Link>{" "}
                (Kolkata). I'm passionate about working with cutting-edge
                front-end frameworks like React. Here, you'll find my portfolio
                showcasing my latest projects. If you enjoy my work, don't
                forget to explore my projects ⭐ Let's connect and discuss
                collaborations. Thank you 💜 for visiting!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
