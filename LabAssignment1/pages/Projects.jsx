import React from "react";
var projectList = [
    ["../images/VTC.JPG", "To build up and maintain the Content Management System(CRM) of VTC"], 
    ["../images/CLP.JPG", "To upgrade the online customer services of CLP"], 
    ["../images/Orix.JPG", "To help to build up an online loan application form"], 
    ["../images/HKTDC.JPG", "To set an one page style website for HKTDC, and build-up the Content Management System(CRM)"]
];

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
            <p className="subDetail">I take pride in paying attention to the smallest details and making sure my work is pixel perfect.</p>
            <PList />
        </>
    );
    
}