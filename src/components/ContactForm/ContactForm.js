import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { Link } from "react-router-dom";
import { BsGithub, BsTwitter, BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import "./ContactForm.css";

export const ContactForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [notification, setNotification] = useState(null);

  useEffect(() => {
    // Disable scrolling
    document.body.classList.add("no-scroll");

    // Enable scrolling on cleanup
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const displayNotification = (type, message) => {
    setNotification({ type, message });

    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_piwkaoh",
        "template_m53b1vz",
        formData,
        "JOTMIUxaYKddTAfz4"
      )
      .then(
        (response) => {
          console.log("Email sent successfully:", response);
          displayNotification("success", "Form submitted successfully!");
        },
        (error) => {
          console.error("Email failed to send:", error);
          displayNotification("error", "Form submission failed!");
        }
      );

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="contact-form-overlay">
      <div className="contact-form-container">
        {notification && (
          <div className={`notification ${notification.type}`}>
            {notification.message}
          </div>
        )}
        <button className="close-button" onClick={onClose}>
          X
        </button>
        <div className="main-content">
          <h2>Contact Me</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button className="submit-button" type="submit">
              Submit
            </button>
          </form>
          <div className="social-media-buttons">
            <Link to="https://github.com/iKrishnendu" target="_blank">
              <BsGithub />
            </Link>
            <Link to="https://twitter.com/Krishnendu_in" target="_blank">
              <BsTwitter />
            </Link>
            <Link
              to="https://www.linkedin.com/in/krishnendusahoo/"
              target="_blank"
            >
              <FaLinkedinIn />
            </Link>
            <Link
              to="https://www.instagram.com/i.m.krishnendu/"
              target="_blank"
            >
              <BsInstagram />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
