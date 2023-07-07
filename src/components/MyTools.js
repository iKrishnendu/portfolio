import React from "react";
import ScrollAnimation from "./ScrollAnimation";
import "./MyTools.css";
import { FaJava } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { ImGit } from "react-icons/im";
import { SiFirebase } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

import { TbBrandVscode } from "react-icons/tb";
import { SiPostman } from "react-icons/si";
import { SiVercel } from "react-icons/si";
import { SiHeroku } from "react-icons/si";
import { FaAws } from "react-icons/fa";

function MyTools() {
  return (
    <div className="Mytool--Section">
      <div>
        <h1>PROFESSIONAL SKILLSET</h1>
      </div>
      <br />
      <div className="mytool--Skill">
        <div className="mytool-div" data-aos="fade-up">
          <FaJava />
        </div>
        <div className="mytool-div" data-aos="fade-up" data-aos-delay="200">
          <FaPython />
        </div>
        <div className="mytool-div" data-aos="fade-up" data-aos-delay="400">
          <SiNextdotjs />
        </div>
        <div className="mytool-div" data-aos="fade-up" data-aos-delay="600">
          <DiJavascript1 />
        </div>
        <div className="mytool-div" data-aos="fade-up" data-aos-delay="800">
          <FaReact />
        </div>
        <div className="mytool-div" data-aos="fade-up" data-aos-delay="800">
          <FaNode />
        </div>
        <div className="mytool-div" data-aos="fade-up" data-aos-delay="600">
          <DiMongodb />
        </div>
        <div className="mytool-div" data-aos="fade-up" data-aos-delay="400">
          <SiExpress />
        </div>
        <div className="mytool-div" data-aos="fade-up" data-aos-delay="200">
          <ImGit />
        </div>
        <div className="mytool-div" data-aos="fade-up">
          <SiFirebase />
        </div>
      </div>
      <ScrollAnimation
        name="Skills"
        // style={{ float: "right", overflow: "hidden" }}
      />
      <br />
      <div>
        <h1>TOOLS I USE</h1>
      </div>
      <div className="mytool--Skill">
        <div data-aos="fade-up">
          <TbBrandVscode />
        </div>
        <div data-aos="fade-up" data-aos-delay="200">
          <SiPostman />
        </div>
        <div data-aos="fade-up" data-aos-delay="400">
          <SiVercel />
        </div>
        <div data-aos="fade-up" data-aos-delay="200">
          <SiHeroku />
        </div>
        <div data-aos="fade-up">
          <FaAws />
        </div>
      </div>
    </div>
  );
}

export default MyTools;
