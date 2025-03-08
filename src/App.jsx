// import { useState } from 'react'
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//  importing pages here
import Home from "./Pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import CaseStudy from "./Pages/CaseStudy";

//  importing componenets
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ReadBlog from "./Pages/ReadBlog";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/case-study/:index" element={<CaseStudy />} />
          <Route path="/read-blogs/:index" element={<ReadBlog />} />

        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
