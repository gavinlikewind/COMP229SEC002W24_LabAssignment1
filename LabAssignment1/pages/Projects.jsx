import React from "react";
import imgVTC from "../images/VTC.JPG";
import imgCLP from "../images/CLP.JPG";
import imgOrix from "../images/Orix.JPG";
import imgHKTDC from "../images/HKTDC.JPG";

/* 2D-Array of my projects deatil */
var projectList = [
    [imgVTC, "Beging a main system developer to build up and maintain the Content Management System(CRM) of VTC"], 
    [imgCLP, "To upgrade the online customer services of CLP as API connector role"], 
    [imgOrix, "Being a System Analyst to help to build up an online loan application form"], 
    [imgHKTDC, "To set an one page style website for HKTDC, and build-up the Content Management System(CRM) as a back-end developer role"]
];

/* user the 2D-Array of my projects deatil to build ul */
const PList = () => {
    return React.createElement(
        "ul",
        { className: "listCls" },
        projectList.map((item, i) =>
            React.createElement(
                "li", 
                { key: i }, 
                React.createElement(
                    "div", 
                    null, 
                    React.createElement(
                        "img", 
                        {"src": item[0], "className" : "liImg"}, 
                        null
                    ), 
                    React.createElement(
                        "span", 
                        {"className" : "liContent"}, 
                        item[1]
                    )
                )
            )
        )
    );
}

export default function Projects(){
    return(
        <>
            <h2>Projects</h2>
            <h3>I take pride in paying attention to the smallest details and making sure my work is pixel perfect.</h3>
            {/* show the project list ul tag */}
            <PList />
        </>
    );
    
}