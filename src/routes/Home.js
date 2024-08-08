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
  BlogSection,
} from "../components/index";
import { VisitCounter } from "../components/Visitors/VisitCounter";

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
      {/* <BlogSection /> */}
      <VisitCounter />
      <Footer />
    </div>
  );
};

export default Home;
