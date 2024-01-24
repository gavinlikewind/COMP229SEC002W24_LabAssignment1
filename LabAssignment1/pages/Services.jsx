import React from "react";
import imgWebServer from "../images/WebServer.jpeg";
import imgSystemDevelopment from "../images/SystemDevelopment.png";
import imgBugfix from "../images/Bugfix.jpeg";


/* 2D-Array of my services deatil */
var serviceList = [
    [imgWebServer, "To set up Web Server"], 
    [imgSystemDevelopment, "To develop customize system"], 
    [imgBugfix, "To bug fix "]
];

/* user the 2D-Array of my services deatil to build ul */
const ServiceItems = () => {
    return React.createElement(
        "ul",
        {className: ""},
        serviceList.map((item, i) => 
            React.createElement(
                "li",
                {key: i},
                React.createElement(
                    "div",
                    null,
                    React.createElement(
                        "img",
                        {className : "liImg", "src" : item[0]},
                        null
                    ),
                    React.createElement(
                        "span",
                        {className : "liContent"},
                        item[1]
                    )
                )
            )
        )   
    );
};

export default function Services(){
    return(
        <>
            <h2>Services</h2>
            <h3>I am excited to provide following services.</h3>
            {/* add the services list ul tag */}
            <ServiceItems />
        </>
    );
}