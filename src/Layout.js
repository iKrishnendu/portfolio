import React, { Children } from "react";
import { ContactMe, Footer, Navbar } from "./components/index";

const Layout = ({ Children }) => {
  return (
    <React.Fragment>
      <Navbar />
      <main>{Children}</main>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
