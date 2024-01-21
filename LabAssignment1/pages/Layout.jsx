import React from "react";
import { Link } from "react-router-dom";


export default function Layout(){
    return(
        <>
            <p>
            
            <h1><img src="./images/myLogo.png" alt="My Logo" />My Profolio</h1>
            </p>
            <nav>
                <Link to="/">Home</Link> | 
                <Link to="aboutme">About Me</Link> | 
                <Link to="projects">Projects</Link> | 
                <Link to="Services">Services</Link> | 
                <Link to="contactme">Contact Me</Link>
            </nav>
            <br />
            <hr />
        </>
    );
}