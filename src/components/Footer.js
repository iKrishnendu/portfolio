import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <div className="footer">
      <div className="footer--container">
        <div className="sitemap">
          <p>SiteMap</p>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/project">Project</Link>
          <Link to="/resume">Resume</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/blog">Blog</Link>
        </div>

        <div className="right">
          <p>Designed and Developed by Krishnendu Sahoo</p>
        </div>
        <div className="left">
          <p>Copyright © {year}</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
