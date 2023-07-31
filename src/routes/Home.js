import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Aboutme from "../components/Aboutme";
import ContactMe from "../components/ContactMe";
// import Theme from "../components/Theme";
import Motivation from "../components/Motivation";

const Home = () => {
  return (
    <div>
      <Navbar />
      {/* <Theme /> */}
      <Hero />
      <Aboutme />
      <ContactMe />
      {/* <Motivation /> */}
      <Footer />
    </div>
  );
};

export default Home;
