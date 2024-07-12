import React from "react";
import "./MyTools.css";
import { FaJava, FaPython, FaReact, FaNode, FaAws } from "react-icons/fa";
import { DiJavascript1, DiMongodb } from "react-icons/di";
import {
  SiNextdotjs,
  SiExpress,
  SiFirebase,
  SiPostman,
  SiVercel,
  SiHeroku,
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import ScrollAnimation from "../../lib/ScrollAnimation";

export const MyTools = () => {
  return (
    <div className="MyTools-section">
      <div className="section-heading">
        <h2>
          SKILL SAFARI : ARE YOU RECRUITER ✨🤩 LOOKING FOR THOSE SKILLS !
        </h2>
        <h1>PROFESSIONAL SKILLSET</h1>
      </div>

      <div className="mytool-Skill skill-first-section">
        <div className="mytool-div">
          <FaJava />
        </div>
        <div className="mytool-div">
          <FaPython />
        </div>
        <div className="mytool-div">
          <SiNextdotjs />
        </div>
        <div className="mytool-div">
          <DiJavascript1 />
        </div>
        <div className="mytool-div">
          <FaReact />
        </div>
        <div className="mytool-div">
          <FaNode />
        </div>
        <div className="mytool-div">
          <DiMongodb />
        </div>
        <div className="mytool-div">
          <SiExpress />
        </div>
        <div className="mytool-div">
          <SiFirebase />
        </div>
      </div>

      <div className="skills-animation">
        <div className="section-heading">
          <h1>TOOLS I USE</h1>
        </div>

        <div className="mytool-Skill">
          <div className="mytool-div">
            <TbBrandVscode />
          </div>
          <div className="mytool-div">
            <SiPostman />
          </div>
          <div className="mytool-div">
            <SiVercel />
          </div>
          <div className="mytool-div">
            <SiHeroku />
          </div>
          <div className="mytool-div">
            <FaAws />
          </div>
        </div>
      </div>
    </div>
  );
};
