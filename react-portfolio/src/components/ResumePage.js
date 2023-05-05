import {  BrowserRouter as Router, Route, Routes, Navigate, Link } from "react-router-dom";

const ProjectsPage = () => {
    return (
        <>
        <nav className="navBar">
            <li> <Link to ="/" className="navItem">Home</Link></li>
            <li> <Link to ="/about" className="navItem">About</Link></li>
            <li> <Link to ="/projects" className="navItem">Projects</Link></li>
            <li> <Link to ="/contact" className="navItem">Contact Me</Link></li>
        </nav>
        <div className="body">
            <h1 className="projectTitle">My Projects:</h1>
            <div className="projects">
                <li>Project 1</li>
                <li>Project 2</li>
                <li>Project 3</li>
            </div>
            <h3 className="resumeTitle"> You can Find my Resume below</h3>
            {/* <img src="https://i.ibb.co/W6x0fY3/Screenshot-2023-05-03-at-7-39-49-PM.png" alt="Paris" className="center"></img> */}
        </div>
        </>
    )
};

export default ProjectsPage;