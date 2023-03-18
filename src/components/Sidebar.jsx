import React from "react";
import "./styles1.css";
import { Link } from "react-router-dom";
import Logo from '../images/logo.png';

export default function Nav(){

    return(
          <div className="navbar">
             <div className="logo" data-aos="zoom-in-up" data-aos-delay="200">
            <img className="max-w-full mx-auto md:max-w-none h-auto rounded-full" src={Logo} width="200" height="200" alt="Features 01" />
                         
            </div >
            

            <div className = "list">
           

            
             <ul className="nav-links">

           
                <Link to="/">Home</Link>
                <Link to="/aboutus">About Us</Link>
                <Link to="/category">Categories</Link>
                <Link to="/contact">Contact Us</Link>
                <Link to="/blog">Blog</Link>
             </ul>

            
          </div>
          </div>
    );
  
  }