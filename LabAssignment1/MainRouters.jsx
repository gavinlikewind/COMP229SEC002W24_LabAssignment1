import React from "react";
import {Route, Routes} from "react-router-dom"
import Home from "./pages/Home"
import AboutMe from "./pages/AboutMe ";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import ContactMe from "./pages/ContactMe";

const MainRouter = () => {
    return (
        <div>
            <Routes>
                <Route extact path="/" element={<Home />} />
                <Route extact path="aboutme" element={<AboutMe />} />
                <Route extact path="projects" element={<Projects />} />
                <Route extact path="services" element={<Services />} />
                <Route extact path="contactme" element={<ContactMe />} />
            </Routes>
        </div>
    );

}

export default MainRouter;