import React from "react";
import "./ContactMe.css";
import { Link } from "react-router-dom";
import { BsGithub } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";

function ContactMe() {
  return (
    <>
      <div className="contact-me-component">
        <h1>Finde Me On</h1>
        <div className="leetcode">
          <Link to="https://leetcode.com/krishnendusahoo">
            <SiLeetcode color="black" />
            LeetCode
          </Link>
        </div>
        <p>Feel Free to connect me</p>
        <div className="Social-contact-me-component">
          <div>
            <Link to="https://github.com/iKrishnendu">
              <BsGithub color="black" />
            </Link>
          </div>
          <div>
            <Link to="https://twitter.com/Krishnendu_in">
              <BsTwitter color="black" />
            </Link>
          </div>
          <div>
            <Link to="https://www.linkedin.com/in/krishnendusahoo/">
              <FaLinkedinIn color="black" />
            </Link>
          </div>
          <div>
            <Link to="https://www.instagram.com/i.m.krishnendu/">
              <BsInstagram color="black" />
            </Link>
          </div>
        </div>
      </div>
      <div className="last-page-msg">
        <p>
          OH NO.. YOU ARE NOT A RECRUTER ? 🥲😓 Oh ! YOU ARE A VISITOR 🙂 THANKS
          FOR VISITING MY WEBSITE 😍. PLEASE TELL THE PEOPLE THAT I HAVE BUILD A
          AWESOME WEBSITE FOR SHOWCASING MY SKILL. ✨
        </p>
      </div>
      <br />
    </>
  );
}

export default ContactMe;
