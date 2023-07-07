import React from "react";
import "./Aboutme.css";
import Logo from "../assets/logo.png";
import Myphoto from "../assets/myphoto.jpg";
import ScrollAnimation from "./ScrollAnimation";
// import Krish from "../assets/krish1.jpeg"

const Aboutme = () => {
  return (
    <>
      <br />
      <h2 className="about--text">About Me</h2>
      {/* <ScrollAnimation style={{ float: "right" }} /> */}
      <div className="aboutme">
        <div
          className="about--image"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <img src={Myphoto} alt="Krishnendu Sahoo" />
        </div>

        <div
          className="about--card"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="card--header">
            <span class="dot red"></span>
            <span class="dot orange"></span>
            <span class="dot green"></span>
          </div>

          <div className="about--body">
            Hi :) <br /> <br />
            &nbsp;&nbsp; 👋 I'm Krishnendu Sahoo. I am Currently studing as
            Computer Science Engineering at Techno India, Batanagar (Kolkata) :)
            I'm working with newest front-end frameworks like React. What you
            are seeing now is my portfolio website. If you like this portfolio,
            plz also cheeck my Projects ⭐ If You like my Project then lets
            talk. Thank you 💜 For visiting..
          </div>
        </div>
        <ScrollAnimation
          name="About Me"
          style={{ float: "right", overflow: "hidden" }}
        />
      </div>
    </>
  );
};

export default Aboutme;
