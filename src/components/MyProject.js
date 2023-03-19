import React from 'react'
import "./MyProject.css"
import project from "../assets/logo.png"
import { BsGithub } from "react-icons/bs";
import { SiDarkreader } from "react-icons/si";
import { CgWebsite } from "react-icons/cg";


function MyProject() {
  return (
    <div className='myproject--component'>
        <h1>My Recent Works</h1>
        <p>Here are a few projects I worked on recently </p>
        <div className='myproject--cards'>
            <div className='myproject--card'>
                <img src={project} className='project--image'/>
                <p>1st project</p>
                <p>I am a full stack web developer (MERN) and build websites using HTML, CSS, Javascript, ReactJs. I have also good grasp on Node and NoSQL(MongoDb)</p>
                <div className='myproject--buttons'>
                    <button className='myproject--button'><BsGithub/> Github</button>
                    <button className='myproject--button'><SiDarkreader/> Demo</button>
                </div>
            </div>
            <div className='myproject--card'>
                <img src={project} className='project--image'/>
                <p>1st project</p>
                <p>I am a full stack web developer (MERN) and build websites using HTML, CSS, Javascript, ReactJs. I have also good grasp on Node and NoSQL(MongoDb)</p>
                <div className='myproject--buttons'>
                    <button className='myproject--button'><BsGithub/> Github</button>
                    <button className='myproject--button'><SiDarkreader/> Demo</button>
                </div>
            </div>
            <div className='myproject--card'>
                <img src={project} className='project--image'/>
                <p>1st project</p>
                <p>I am a full stack web developer (MERN) and build websites using HTML, CSS, Javascript, ReactJs. I have also good grasp on Node and NoSQL(MongoDb)</p>
                <div className='myproject--buttons'>
                    <button className='myproject--button'><BsGithub/> Github</button>
                    <button className='myproject--button'><SiDarkreader/> Demo</button>
                </div>
            </div>
           
        </div>
    </div>
  )
}

export default MyProject