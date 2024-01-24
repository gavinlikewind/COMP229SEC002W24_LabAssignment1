import React from "react";

var serviceList = [
    ["../images/WebServer.jpeg", "To set up Web Server"], 
    ["../images/SystemDevelopment.png", "To develop customize system"], 
    ["../images/Bugfix.jpeg", "To bug fix "]
];

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
            <p className="subDetail">I am excited to provide following services.</p>
            <ServiceItems />
        </>
    );
}