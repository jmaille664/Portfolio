import React from 'react';
import {Link } from "react-router-dom";
import '../App.css';

export default function NavBar(){

    return (
        <div>
          <nav
            style={{
              borderBottom: "solid 1px",
              paddingBottom: "1rem",
            }}
          >
            {/* Navigation Links for the components */}
            <Link to="/">Home</Link> 
            <Link to="/About">About</Link>
            <Link to="/Projects">Projects</Link>
            <Link to="/Work">Work</Link>
            <Link to="/Hobbies">Hobbies</Link>
          </nav>
        </div>
      );
    }
