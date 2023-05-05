import {  BrowserRouter as Router, Route, Routes, Navigate, Link } from "react-router-dom";

const AboutPage = () => {
    return (
        <>
        <div className="body">

            <nav className="navBar">
                <li> <Link to ="/" className="navItem">Home</Link></li>
                <li> <Link to ="/about" className="navItem">About</Link></li>
                <li> <Link to ="/projects" className="navItem">Projects</Link></li>
                <li > <Link to ="/contact" className="navItem">Contact Me</Link></li>
            </nav>
        
            <div className="aboutChild">
                <h1 className="aboutName">About me</h1>
                <p className="paragraph">I’m a driven software engineer with expertise in programming languages, frameworks, and databases, including JavaScript, Python, React, Django, Java, PostgreSQL, and MongoDB. My collaborative nature and strong problem-solving skills enable me to work well in a team environment and approach challenges with a strategic mindset.
                <br/>
                <br/>
                As a self-motivated and adaptable individual, I thrive in dynamic work environments and welcome opportunities to expand my knowledge and skill set. With a positive attitude and a commitment to excellence, I am eager to contribute to innovative software development projects that make a real impact.
                </p>
            </div>
            
        </div>
        </>
    )
};

export default AboutPage;