import {  BrowserRouter as Router, Route, Routes, Navigate, Link } from "react-router-dom";

const HomePage = () => {
    return (
        <>
       <nav className="navBar">
            <li> <Link to ="/" className="navItem">Home</Link></li>
            <li> <Link to ="/about" className="navItem">About</Link></li>
            <li> <Link to ="/projects" className="navItem">Projects</Link></li>
            <li> <Link to ="/contact" className="navItem">Contact Me</Link></li>
        </nav>
        <div className="body">
            <div className="homeParent">
                <div className="homeChildOne">
                    <div className="homeChild">
                        <h1 className="name">Alex Parisi</h1>
                        <h2 className="nameTwo">Software Engineer</h2>
                    </div>
                    <div></div>
                </div>
                <div></div>
            </div>
        </div>
        </>
    )
};

export default HomePage;