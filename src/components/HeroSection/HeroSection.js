import React from "react";
import "./Hero.css";
import { BiCode } from "react-icons/bi";
import ScrollAnimation from "../../lib/ScrollAnimation";

export const HeroSection = () => {
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
        <ScrollAnimation
          name="KRISHNENDU SAHOO"
          style={{ float: "right", overflow: "hidden" }}
        />
        <h2 className="my--name">
          I'm <span>Krishnendu Sahoo</span>
        </h2>
      </div>
      <div></div>
    </div>
  );
};
