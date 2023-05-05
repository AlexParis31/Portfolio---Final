import {  BrowserRouter as Router, Route, Routes, Navigate, Link } from "react-router-dom";


const ContactPage = () => {
    return (
        <>
        <nav className="navBar">
            <li> <Link to ="/" className="navItem">Home</Link></li>
            <li> <Link to ="/about" className="navItem">About</Link></li>
            <li> <Link to ="/projects" className="navItem">Projects</Link></li>
            <li> <Link to ="/contact" className="navItem">Contact Me</Link></li>
        </nav>
        <h1>Contact Me </h1>
        </>
    )
};

export default ContactPage;