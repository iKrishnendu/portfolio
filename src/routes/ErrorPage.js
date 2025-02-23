// src/routes/ErrorPage.js
import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  const errorPageStyles = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    textAlign: "center",
    backgroundColor: "var(--bg-color)",
    color: "var(--text-color)",
  };

  const heading1Styles = {
    fontSize: "5rem",
    margin: "0",
  };

  const heading2Styles = {
    fontSize: "2rem",
    margin: "10px 0",
  };

  const paragraphStyles = {
    fontSize: "1.2rem",
    marginBottom: "20px",
  };

  const linkStyles = {
    padding: "10px 20px",
    backgroundColor: "var(--text-color)",
    color: "var(--card-bg-color)",
    textDecoration: "none",
    borderRadius: "5px",
    boxShadow: "0 4px 8px var(--shadow-color)",
  };

  const linkHoverStyles = {
    backgroundColor: "var(--text-color)",
    color: "var(--bg-color)",
    boxShadow: "0 6px 12px var(--shadow-color)",
  };

  return (
    <div style={errorPageStyles}>
      <h1 style={heading1Styles}>404</h1>
      <h2 style={heading2Styles}>Oops! Page Not Found</h2>
      <p style={paragraphStyles}>
        Sorry, the page you are looking for does not exist or access is denied.
      </p>
      <Link
        to="/"
        style={linkStyles}
        onMouseEnter={(e) => Object.assign(e.target.style, linkHoverStyles)}
        onMouseLeave={(e) => Object.assign(e.target.style, linkStyles)}
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
