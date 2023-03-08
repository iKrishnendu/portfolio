import React from 'react'
import "./Aboutme.css"
import Logo from "../assets/logo.png"
import Myphoto from "../assets/myphotofb.jpg"
import Krish from "../assets/krish1.jpeg"

const Aboutme = () => {
  return (
    <>
    <br/>
    <h2 className='about--text'>About Me</h2>
    <div className='aboutme'>
    
        <div className='about--image'><img src={Krish} alt="Krishnendu Sahoo" /></div>
    
        <div className='about--card'>



            <div className='card--header'> 
                <span class="dot red"></span>
                <span class="dot orange"></span>
                <span class="dot green"></span>
            </div>

            <div className='about--body'>

                Hi :) <br/> <br/>

                &nbsp;&nbsp; 👋 I'm Krishnendu Sahoo. I am Currently studing as Computer Science
                Engineering at Techno India, Batanagar (Kolkata) :) 
                I'm working with newest front-end frameworks 
                like React. What you are seeing now is my portfolio 
                website. If you like this portfolio, plz also cheeck my
                Projects ⭐ If You like my Project then lets talk.
                Thank you 💜 For visiting..

            </div>

        </div>
    </div>
    </>
  )
}

export default Aboutme