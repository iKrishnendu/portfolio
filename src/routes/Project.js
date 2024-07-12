import React from "react";
import { Navbar, MyProject, Footer } from "../components/index";

import Github from "../lib/Github";

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
