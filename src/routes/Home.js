import React from "react";
import {
  AboutMe,
  Contact,
  Education,
  Experience,
  Footer,
  HeroSection,
  Navbar,
  MyTools,
  MyProject,
} from "../components/index";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutMe />
      <Experience />
      <MyTools />
      <MyProject />
      {/* <Education /> */}
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
