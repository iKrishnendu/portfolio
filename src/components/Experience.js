import React from "react";
import "./Experience.css";
import ScrollAnimation from "./ScrollAnimation";
import { CgWebsite } from "react-icons/cg";
import { AiOutlineCloudServer } from "react-icons/ai";
import { FaThemeco } from "react-icons/fa";
const Experience = () => {
  return (
    <>
      <div className="experience--tab">
        <div className="header">
          {/* <ScrollAnimation
            name="What I Do?"
            // style={{ float: "right", overflow: "hidden" }}
          /> */}

          <p>WHAT I DO ?</p>

          <h2>HERE ARE SOME OF MY EXPERTISE</h2>
          <br />
          <ScrollAnimation
            name="What I Do?"
            // style={{ float: "right", overflow: "hidden" }}
          />

          <div class="row">
            <div class="column">
              <div class="card" data-aos="fade-up">
                <div>
                  <CgWebsite />
                </div>
                <h3>WEB DEVELPOMENT</h3>
                <p>
                  I am a full stack web developer (MERN) and build websites
                  using HTML, CSS, Javascript, ReactJs. I have also good grasp
                  on Node and NoSQL(MongoDb)
                </p>
              </div>
            </div>

            {/* <div class="column">
              <div class="card">
                <h3>APP DEVELPOMENT</h3>
                <p>
                  I also have knowledge of flutter development and have
                  experience in building android and IOS applications. I also
                  have live app published on Google Play Store.
                </p>
              </div>
            </div> */}

            <div class="column">
              <div class="card" data-aos="fade-up" data-aos-delay="400">
                <div>
                  <AiOutlineCloudServer />
                </div>
                <h3>CLOUD</h3>
                <p>
                  I know amazon aws and google cloud beginner level. I can
                  easily interact with those environment. I got certificate from
                  these two famous cloud companies.
                </p>
              </div>
            </div>

            <div class="column">
              <div class="card" data-aos="fade-up">
                <div>
                  <FaThemeco />
                </div>
                <h3>OTHER'S INTEREST</h3>
                <p>
                  I also have decent hand in developing website with WordPress.
                  Java, Github are my other fields of interest. Currently, I am
                  investing my free time in Web3.js
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
