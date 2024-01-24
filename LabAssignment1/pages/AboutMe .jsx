import React from "react";
import aboutMeImg from  "../images/IMG_0702.PNG";
import myResumeFile from "../src/myResume.pdf";

export default function AboutMe(){
    return(
        <>
            <h2>About Me</h2>
            <br />
            <img class="myImage" src={aboutMeImg} />
            <br />
            <span className="subDetail">My name Kang Chuen Tse. I am an student in Software Engineer Techonology-AI. I have over 10 years experiences in System development. I can use C#, PHP, JS, Jquery language. For Database, I use MySQL and MSSQL server.</span>
            <br />
            <br />
            <span className="aboutmeLinkText">Click to get <a href={myResumeFile} download >My Resume</a></span>
        </>
        
    );
}