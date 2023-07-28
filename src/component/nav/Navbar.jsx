import React from "react";
import { Link } from "react-router-dom";

import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/" className="navbar__link" style={{ textDecoration: "none" }}>
        Home
      </Link>
      <Link to="/about" className="navbar__link">
        About
      </Link>
      <Link to="/skills" className="navbar__link">
        skills
      </Link>
      <Link to="/projects" className="navbar__link">
        Projects
      </Link>
      <Link to="/contact" className="navbar__link">
        Contact
      </Link>
    </div>
  );
};

export default Navbar;
