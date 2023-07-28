import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import Header from "./component/header/Header";
import Nav from "./component/nav/Nav";
import About from "./component/about/About";

import Experience from "./component/experience/Experience";
import Projects from "./component/projects/Projects";

import Contact from "./component/contact/Contact";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Nav />

        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
