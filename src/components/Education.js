import React from "react";
import { MdWork } from "react-icons/md";
import Logo from "../assets/logo.png";
import Vmas from "../assets/vmas.jpg";
import Lhs from "../assets/lhs.jpg";
import Tib from "../assets/tib.jpg";
import Intern from "../assets/salesforce-logo.png";
import "./Education.css";
import ScrollAnimation from "./ScrollAnimation";

function Education() {
  return (
    <>
      <br />
      <br />
      <br />
      <p className="p-class">THE JOURNEY OF MINE 😃</p>
      <h1>MY JOURNEY</h1>
      <div className="edu--container--main">
        <div className="the--main--edu" data-aos="fade-up">
          <div className="edu--container--left">
            <div className="edu--img" data-aos="fade-up">
              <img src={Intern} className="edu--images" />
            </div>
            <div className="edu--img" data-aos="fade-up">
              <img src={Tib} className="edu--images" />
            </div>
            <div className="edu--img" data-aos="fade-up">
              <img src={Lhs} className="edu--images" />
            </div>
            <div className="edu--img" data-aos="fade-up">
              <img src={Vmas} className="edu--images" />
            </div>
          </div>

          <div className="edu--container--right">
            <div className="edu--wrap--side">
              <div className="card--header">
                <span class="dot red"></span>
                <span class="dot orange"></span>
                <span class="dot green"></span>
              </div>
              <div className="box--rightside">
                <div className="box">
                  <h4>
                    Salesforce Developer Virtual Internship{" "}
                    <span className="edu--lessname">
                      2023 Sept - 2023 Dec , <i>Ongoing..</i>
                    </span>
                  </h4>
                  <p>
                    Internship at Salesforce involved mastering organizational
                    setup, Apex, testing, and Lightning Web Components. Applied
                    expertise in process automation, security, and API
                    integration for a holistic skill set.
                  </p>
                </div>
                <div className="box">
                  <h4>
                    Techno India, Batanagar{" "}
                    <span className="edu--lessname">
                      2021-2025 , <i>currenty 9.5 cgpa</i>
                    </span>
                  </h4>
                  {/* <p>Bachelor of Technology. <span> Computer Science & Engineering</span></p> */}
                  <p>
                    I am currently studing B.Tech CSE at Techno India Batanagar
                    to explore my world & also enjoy my college life. I am also
                    actively participate in college events & Tech Fest.
                  </p>
                </div>
                <div className="box">
                  <h4>
                    Lakshya High School{" "}
                    <span className="edu--lessname">
                      2019-2021 , <i> 78 percent </i>
                    </span>
                  </h4>
                  <p>
                    I have completed my higher education from LHS with major
                    subjects as Physics,Chemistry & Maths with 78% merit in
                    WBCHSE board.
                  </p>
                </div>
                <div className="box">
                  <h4>
                    Vivekananda Mission Asram Sikshayatan{" "}
                    <span className="edu--lessname">
                      2011-2019 , <i> 80 percent </i>
                    </span>
                  </h4>
                  <p className="edu--last--padding">
                    My chilldhood school. I am completed my class 10 board exam
                    from VMAS in 2019. I learn a lot things from there.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Education;
