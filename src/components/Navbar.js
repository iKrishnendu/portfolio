import React from "react";
import { NavLink } from "react-router-dom";
import { BiHomeSmile } from "react-icons/bi";
import { RiContactsLine } from "react-icons/ri";
import { TfiWrite } from "react-icons/tfi";
import { RxAvatar } from "react-icons/rx";
import { BsLaptop } from "react-icons/bs";

import "./Navbar.css";

const Navbar = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
    };
  };
  return (
    <>
      <div className="header">
        {/* <Link to={"/"}><h1 className='nav--top'>K</h1></Link> */}

        <div className="nav--fixed">
          <ul className="nav--bar">
            <li>
              <NavLink style={navLinkStyles} to={"/"}>
                <BiHomeSmile className="nav-pic-color" />
                <p className="nav--names">Home</p>
              </NavLink>
            </li>
            <li>
              <NavLink style={navLinkStyles} to={"/about"}>
                <RxAvatar className="nav-pic-color" />
                <p className="nav--names">About</p>
              </NavLink>
            </li>
            <li>
              <NavLink style={navLinkStyles} to={"/project"}>
                <BsLaptop className="nav-pic-color" />
                <p className="nav--names">Project</p>
              </NavLink>
            </li>
            <li>
              <NavLink style={navLinkStyles} to={"/contact"}>
                <RiContactsLine className="nav-pic-color" />
                <p className="nav--names">Contact</p>
              </NavLink>
            </li>
            <li>
              <NavLink style={navLinkStyles} to={"/blogs"}>
                <TfiWrite className="nav-pic-color" />
                <p className="nav--names">Blog</p>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
