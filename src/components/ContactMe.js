import React from 'react'
import "./ContactMe.css"
import { Link } from 'react-router-dom';
import { BsGithub } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
// import { BsGithub } from "react-icons/bs";

function ContactMe() {
  return (
    <div className='contact-me-component'>
        <h1>Finde Me On</h1>
        <p>Feel Free to connect me</p>
        <div className='Social-contact-me-component'>
            <div><Link to='https://github.com/iKrishnendu'><BsGithub/></Link></div>
            <div><Link to='https://twitter.com/Krishnendu_in'><BsTwitter/></Link></div>
            <div><Link to='https://www.linkedin.com/in/krishnendusahoo/'><FaLinkedinIn/></Link></div>  
            <div><Link to='https://www.instagram.com/i.m.krishnendu/'><BsInstagram/></Link></div>
            
        </div>

    </div>
  )
}

export default ContactMe