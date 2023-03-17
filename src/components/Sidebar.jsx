import React from "react";
import "./styles1.css";
import { Link } from "react-router-dom";

export default function Nav(){

    return(
          <div className="navbar">
            <div className="logo"></div>
             <ul className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/calendar">About Us</Link>
                <Link to="/cards">Categories</Link>
                <Link to="/desktop-1">Contact Us</Link>
                <Link to="/blog">Blog</Link>
             </ul>
          </div>
    );
  
  }