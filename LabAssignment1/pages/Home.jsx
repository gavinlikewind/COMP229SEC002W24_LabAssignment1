import React from "react";
import { Link } from "react-router-dom";

export default function Home(){
    return (
        <>
            <h2>Welcome, everone! I am Gavin, nice to meet you.</h2>
            <br />
            <h3>To graduate in Software Engineer Technology-AI, enjoy my study journey.</h3>
            <br />
            <span className="subDetail">If hope to know more about me, please click <Link to="aboutme">About Me</Link>. You can find what <Link to="projects">Projects</Link> , I have joined in the past. In <Link to="Services">Services</Link> page, you will find services that I able to provide. Please feel free to <Link to="contactme">Contact Me</Link> if necessary</span>
        </>
    );
}