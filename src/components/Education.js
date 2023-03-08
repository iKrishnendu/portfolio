import React from 'react'
import { MdWork } from "react-icons/md";
import Logo from "../assets/logo.png"
import "./Education.css"

function Education() {
  return (
    <>
    <h1>MY JOURNEY</h1>
    <div className='edu--container--main'>
       
       <div className='the--main--edu'>

        <div className='edu--container--left'>
                <div className='edu--img'>
                    <img src={Logo} className='edu--images'/>
                </div>
                <div className='edu--img'>
                    <img src={Logo} className='edu--images'/>
                </div>
                <div className='edu--img'>
                    <img src={Logo} className='edu--images'/>
                </div>
                <div className='edu--img'>
                    <img src={Logo} className='edu--images'/>
                </div>
        </div>

        <div className='edu--container--right'>
                <div className='edu--wrap--side'>
                    <div className='card--header'> 
                        <span class="dot red"></span>
                        <span class="dot orange"></span>
                        <span class="dot green"></span>
                    </div>
                    
                    <div className='box'>
                            <h4>Experience July(2021)-Present</h4>
                            <p>first line</p>
                    </div>
                    <div className='box'>
                            <h4>first line</h4>
                            <p>first line</p>
                    </div>
                    <div className='box'>
                            <h4>first line</h4>
                            <p>first line</p>
                    </div>
                    <div className='box'>
                            <h4>first line</h4>
                            <p>first line</p>
                    </div>
                </div>
            </div>
       </div>
    </div>
    </>
  )
}

export default Education