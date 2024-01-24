import React from "react";

/* 2D-Array of my services deatil */
var serviceList = [
    ["../images/WebServer.jpeg", "To set up Web Server"], 
    ["../images/SystemDevelopment.png", "To develop customize system"], 
    ["../images/Bugfix.jpeg", "To bug fix "]
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