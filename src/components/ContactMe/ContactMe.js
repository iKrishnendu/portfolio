import React, { useState } from "react";
import { BsEnvelope } from "react-icons/bs";
import "./Contact.css";
import { ContactForm } from "../ContactForm/ContactForm";

export const Contact = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div id="contact" className="wrapper">
      <div className="contact-container">
        <h1>04. What’s Next?</h1>
        <h2>Get In Touch</h2>
        <p>
          Yeah. I am a final-year student and a full-stack developer intern
          actively looking for new opportunities to contribute more. My inbox is
          always open. Whether you have a question or just want to say hi, I’ll
          try my best to get back to you!
        </p>
        <button className="contact-button" onClick={togglePopup}>
          <BsEnvelope /> Say Hello
        </button>
      </div>
      {isPopupOpen && <ContactForm onClose={togglePopup} />}
    </div>
  );
};
