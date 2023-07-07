import React, { Children } from "react";
import Navbar from "../components/Navbar";
import Motivation from "../components/Motivation";
import ContactMe from "../components/ContactMe";
import Footer from "../components/Footer";

const Layout = ({ Children }) => {
  return (
    <React.Fragment>
      <Navbar />
      <main>{Children}</main>
      <Motivation />
      <ContactMe />
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
