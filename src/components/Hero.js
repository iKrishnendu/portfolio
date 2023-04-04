import React from "react";
import "./Hero.css";
import { BiCode } from "react-icons/bi";

const Hero = () => {
  return (
    <div className="hero--main">
      <div className="hero">
        <BiCode className="hero-1st-pic" size="9rem" />

        <h2>
          Hello World !{" "}
          <span className="wave" role="img" aria-labelledby="wave">
            👋🏻
          </span>
        </h2>
        <h2>
          I'm <span>Krishnendu Sahoo</span>
        </h2>
      </div>
    </div>
  );
};

export default Hero;
