import React from 'react'
import { Link } from "react-router-dom"
import { BiHomeSmile } from "react-icons/bi";
import { MdContacts } from "react-icons/md";
import { TfiWrite } from "react-icons/tfi";
import { RxAvatar } from "react-icons/rx";
import { BsLaptop } from "react-icons/bs";


import "./Navbar.css"

const Navbar = () => {
  return (
    <>
    <div className='header'>
      {/* <Link to={"/"}><h1 className='nav--top'>K</h1></Link> */}
      
      <div className='nav--fixed'>
        <ul className='nav--bar'>
          <li><Link to={"/"}><BiHomeSmile 
            color="black"
            onMouseOver={({target})=>target.style.color="Red"}
            onMouseOut={({target})=>target.style.color="black"}/><p className='nav--names'>Home</p></Link></li>
          <li><Link to={"/about"}><RxAvatar 
            color="black"
            
            onMouseOver={({target})=>target.style.color="Red"}
            onMouseOut={({target})=>target.style.color="black"}/><p className='nav--names'>About</p></Link></li>
          <li><Link to={"/project"}><BsLaptop 
            color="black"
            
            onMouseOver={({target})=>target.style.color="Red"}
           onMouseOut={({target})=>target.style.color="black"}/><p className='nav--names'>Project</p></Link></li>
          <li><Link to={"/contact"}><MdContacts 
            color="black"
            
            onMouseOver={({target})=>target.style.color="Red"}
            onMouseOut={({target})=>target.style.color="black"}/><p className='nav--names'>Contact</p></Link></li>
          <li><Link to={"/blogs"}><TfiWrite 
            color="black"
            
            onMouseOver={({target})=>target.style.color="Red"}
            onMouseOut={({target})=>target.style.color="black"}/><p className='nav--names'>Blog</p></Link></li>
        </ul>
      </div>
      
    </div>
    </>
    
  )
}

export default Navbar