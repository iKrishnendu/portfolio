// ContactForm.js
import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [notification, setNotification] = useState(null);

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
          // Add your success handling logic here
          displayNotification("success", "Form submitted successfully!");
        },
        (error) => {
          console.error("Email failed to send:", error);
          // Add your error handling logic here
          displayNotification("error", "Form submission failed!");
        }
      );

    // You can reset the form data here if needed
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <>
      {notification && (
        <div className={`notification ${notification.type}`}>
          {notification.message}
        </div>
      )}
      <br />
      <br />
      <br />
      <div className="contact-form-container">
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

          <button type="submit">Submit</button>
        </form>
      </div>
      <br />
      <br />
      <br />
    </>
  );
};

export default ContactForm;
