import React from "react";
import Navbar from "../components/Navbar";
import MyProject from "../components/MyProject";
import Footer from "../components/Footer";
import Github from "../components/Github";

const Project = () => {
  return (
    <>
      <MyProject />
      <Github />
      <Navbar />
      <Footer />
    </>
  );
};

export default Project;
