import React from "react";
import "./styles1.css";
import { Link } from "react-router-dom";

export default function Nav(){

    return(
          <div className="navbar">
            <div className="logo">
             
            </div>

             <ul className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/aboutus">About Us</Link>
                <Link to="/category">Categories</Link>
                <Link to="/contact">Contact Us</Link>
                <Link to="/blog">Blog</Link>
             </ul>
          </div>
    );
  
  }