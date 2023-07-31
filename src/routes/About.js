import React from "react";
import Navbar from "../components/Navbar";
import Aboutme from "../components/Aboutme";
import Footer from "../components/Footer";
import Experience from "../components/Experience";
import ExperienceData from "../components/ExperienceData";
import Education from "../components/Education";
import MyTools from "../components/MyTools";
import Motivation from "../components/Motivation";

const About = () => {
  return (
    <>
      <Navbar />
      <Aboutme />
      <Experience />
      <MyTools />
      <Education />
      {/* <Motivation /> */}
      <Footer />
    </>
  );
};

export default About;
