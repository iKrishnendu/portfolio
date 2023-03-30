import React from 'react'
import { NavLink } from "react-router-dom"
import { BiHomeSmile } from "react-icons/bi";
import { MdContacts } from "react-icons/md";
import { TfiWrite } from "react-icons/tfi";
import { RxAvatar } from "react-icons/rx";
import { BsLaptop } from "react-icons/bs";


import "./Navbar.css"

const Navbar = () => {
  
  const navLinkStyles = ({isActive}) => {
    return {
      fontWeight: isActive ? 'bold' : 'normal'
    }
  }
  return (
    <>
    <div className='header'>
      {/* <Link to={"/"}><h1 className='nav--top'>K</h1></Link> */}
      
      <div className='nav--fixed'>
        <ul className='nav--bar'>
          <li><NavLink style={navLinkStyles}
          
           to={"/"}><BiHomeSmile 
            color="black"
        /><p className='nav--names'>Home</p></NavLink></li>
          <li><NavLink style={navLinkStyles}
          to={"/about"}><RxAvatar 
            color="black"
            
           /><p className='nav--names'>About</p></NavLink></li>
          <li><NavLink style={navLinkStyles} 
          
          to={"/project"}><BsLaptop 
            color="black"
            /><p className='nav--names'>Project</p></NavLink></li>
          <li><NavLink style={navLinkStyles}
      
           to={"/contact"}><MdContacts 
            color="black"
            
           /><p className='nav--names'>Contact</p></NavLink></li>
          <li><NavLink style={navLinkStyles} 
         
           to={"/blogs"}><TfiWrite 
            color="black"
            
           /><p className='nav--names'>Blog</p></NavLink></li>
        </ul>
      </div>
      
    </div>
    </>
    
  )
}

export default Navbar