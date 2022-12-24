import "./index.css";
import React from "react";
import Home from "./Routes/Home";
import Sandbox from "./Routes/Sandbox";
import About from "./Routes/About";
import Project from "./Routes/Project";
import NavBar from './Component/NavBar'
import Footer from './Component/Footer'

import {Route, Routes} from 'react-router-dom';



function App() {
  return (
    <div>
      <NavBar/>
      <div className='page-contents'>
      <Routes>
        <Route path="/nancyxie97" element={<Home />} />
        <Route path="/sandbox" element={<Sandbox />} />
        <Route path="/about" element={<About />} />
        <Route path='/project' element={<Project />} />
    </Routes>
    
      </div>  
      <Footer/>
      
    </div>

    
  );
}

export default App;
