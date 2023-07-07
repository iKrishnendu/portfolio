import React from "react";
import Navbar from "../components/Navbar";
import MyProject from "../components/MyProject";
import Footer from "../components/Footer";
import Github from "../components/Github";
import Motivation from "../components/Motivation";

const Project = () => {
  return (
    <>
      <MyProject />
      <Github />
      <Navbar />
      <Motivation />
      <Footer />
    </>
  );
};

export default Project;
