import {  BrowserRouter as Router, Route, Routes, Navigate, Link } from "react-router-dom";
import './App.css';

//components 

import AboutPage from "./components/AboutPage";
import ProjectsPage from "./components/ResumePage";
import ContactPage from "./components/ContactPage";
import HomePage from "./components/HomePage";

function App() {
  return (
    <>
    <Router>
      
      <Routes>

        <Route exact path="/" element = {
          <HomePage/>
        }/>

        <Route exact path="/about" element = {
          <AboutPage/>
        }/>

        <Route exact path="/projects" element = {
          <ProjectsPage/>
        }/>

        <Route exact path="/contact" element = {
          <ContactPage/>
        }/>

      </Routes>

      </Router>
    </>
  );
}

export default App;
