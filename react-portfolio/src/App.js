import React from 'react';
import About from './components/About.js';
import Home from './components/Home.js';
import NavBar from './components/NavBar.js';
import Work from './components/Work.js';
import Projects from './components/Projects.js';
import Hobbies from './components/Hobbies.js';
import Footer from './components/Footer.js';
import {Routes, Route,} from "react-router-dom";
import './App.css';

function App() {
  return (
    <main>
      <header>
         {/*importing navbar component */}
        <NavBar/>
      </header>
      <div className ="page-container">
      <div className="content-wrap">
    { 
    <Routes>
      {/* React Router for navigation */}
        <Route index element={<Home />} /> 
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="hobbies" element={<Hobbies />} />
        <Route path="work" element={<Work />} />
    </Routes>
    }
     {/*importing footer component */}
    <Footer/>
    </div>
    </div>
    </main>
    
  );
}

export default App;
