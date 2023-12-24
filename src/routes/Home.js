import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Aboutme from "../components/Aboutme";
import ContactMe from "../components/ContactMe";
// import Theme from "../components/Theme";
import Experience from "../components/Experience";
import MyTools from "../components/MyTools";
import Education from "../components/Education";

const Home = () => {
  return (
    <div>
      <Navbar />
      {/* <Theme /> */}
      <Hero />
      <Aboutme />
      <Experience />
      <MyTools />
      <Education />
      <ContactMe />
      <Footer />
    </div>
  );
};

export default Home;
