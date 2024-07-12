import React from "react";
import { Footer, Navbar } from "../components/index";

import PDF from "../lib/PDF";
import { Link } from "react-router-dom";

const Resume = () => {
  const pdfUrl =
    "https://drive.google.com/file/d/1jSad_edvJvWoluMimdCsTPdbcoxgHGyW/preview";
  return (
    <div>
      <Navbar />
      <h1>My Resume</h1>

      <h1 style={{ fontSize: "20px" }}>
        <Link style={{ color: "black" }} to="/">
          Back to Home Page
        </Link>
      </h1>

      <PDF pdfUrl={pdfUrl} />

      <Footer />
    </div>
  );
};

export default Resume;
