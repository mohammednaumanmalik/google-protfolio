import React from "react";
import Navbar from "./Navbar";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Map from "./Map";
import Footer from "./Footer";

function Home(){

    return(


        <div className="container-fluid p-0 m-0">
           
         <Navbar />

         <div>

      </div>
      
      <Routes>
        <Route path="/" exact element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element ={<Contact />} />
        <Route path="/map" element ={<Map />} />
        {/* Add other routes with unique paths */}
      </Routes>
      <Footer />
        </div>
     
    )
}
export default Home;