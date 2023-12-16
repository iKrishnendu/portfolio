import React from "react";
import "./Aboutme.css";
import Logo from "../assets/logo.png";
// import Myphoto from "../assets/photo.png";
import Myphoto from "../assets/myphoto.jpeg";
import ScrollAnimation from "./ScrollAnimation";
import Education from "./Education";
import { Link } from "react-router-dom";
import { SiLeetcode } from "react-icons/si";
import TimeLine from "./TimeLine";
import { TbIdBadge } from "react-icons/tb";
// import Krish from "../assets/krish1.jpeg"

const Aboutme = () => {
  return (
    <>
      <br />

      {/* <ScrollAnimation style={{ float: "right" }} /> */}
      <div className="aboutme">
        <div
          className="about--image"
          // data-aos="fade-up"
          // data-aos-duration="1000"
        >
          <img src={Myphoto} alt="Krishnendu Sahoo" />

          {/* <p>
            <i>I'm Krishnendu Sahoo</i>
            <br></br>
            <i>Krishnendusahoo.mail@gmail.com</i>
            <br></br>
            <strong>Learn Together | Grow Together</strong>
            <br></br>
            <br />
            <br />
            <div className="leetcode">
              <Link to="https://leetcode.com/krishnendusahoo">
                <SiLeetcode color="black" />
                LeetCode
              </Link>
            </div>
          </p> */}
        </div>

        <div
          className="right-side "
          // data-aos="fade-up"
          // data-aos-duration="1000"
        >
          <div className="card--aboutme-div">
            <p className="p-aboutme">LET'S INTRODUCE MYSELF 😁</p>
            <span>
              <h2 className="about--text">WHO AM I ?</h2>
            </span>
            <div
              className="about--card"
              // data-aos="fade-up"
              // data-aos-duration="1000"
            >
              <div className="card--header">
                <span class="dot red"></span>
                <span class="dot orange"></span>
                <span class="dot green"></span>
              </div>

              <div className="about--body">
                Greetings :) <br /> <br />
                {/* &nbsp;&nbsp; 👋 I'm Krishnendu Sahoo. I am Currently studing as
            Computer Science Engineering at Techno India, Batanagar (Kolkata) :)
            I'm working with newest front-end frameworks like React. What you
            are seeing now is my portfolio website. If you like this portfolio,
            plz also cheeck my Projects ⭐ If You like my Project then lets
            talk. Thank you 💜 For visiting.. */}
                👋 Welcome to my website! I'm <b>Krishnendu Sahoo</b>, a{" "}
                <span className="cse-bg"> Computer Science Engineering </span>{" "}
                student at{" "}
                <Link to="https://tib.edu.in" className="tib-bg">
                  {" "}
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
          <div className="exp">
            <p>AS A FRESHER'S 🙂</p>
            <h2>EXPERIENCE</h2>
            <div className="all-exp">
              <TimeLine />
            </div>
          </div>
        </div>
        {/* <ScrollAnimation
          name="About Me"
          style={{ float: "right", overflow: "hidden" }}
        /> */}
      </div>
    </>
  );
};

export default Aboutme;
