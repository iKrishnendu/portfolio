import React from "react";
import {
  AboutMe,
  Contact,
  Experience,
  Footer,
  HeroSection,
  Navbar,
  MyTools,
  MyProject
} from "../components/index";
import { VisitCounter } from "../components/common/Visitors/VisitCounter";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutMe />
      <Experience />
      <MyTools />
      <MyProject />
      <Contact />
      <VisitCounter />
      <Footer />
    </div>
  );
};

export default Home;
