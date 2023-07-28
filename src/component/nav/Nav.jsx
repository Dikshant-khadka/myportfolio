import React from "react";
import { Link } from "react-router-dom";

import "./nav.css";

import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlinePaperClip,
} from "react-icons/ai";
import { BsCodeSlash } from "react-icons/bs";
import { MdContactMail } from "react-icons/md";

import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("/");

  return (
    <nav>
      <Link
        to="/"
        onClick={() => setActiveNav("/")}
        className={activeNav === "/" ? "active" : ""}
      >
        <AiOutlineHome />
      </Link>
      <Link
        to="/about"
        onClick={() => setActiveNav("/about")}
        className={activeNav === "/about" ? "active" : ""}
      >
        <AiOutlineUser />
      </Link>

      <Link
        to="/skills"
        onClick={() => setActiveNav("/skills")}
        className={activeNav === "/skills" ? "active" : ""}
      >
        <BsCodeSlash />
      </Link>

      <Link
        to="/projects"
        onClick={() => setActiveNav("/projects")}
        className={activeNav === "/projects" ? "active" : ""}
      >
        <AiOutlinePaperClip />
      </Link>

      <Link
        to="/contact"
        onClick={() => setActiveNav("/contact")}
        className={activeNav === "/contact" ? "active" : ""}
      >
        <MdContactMail />
      </Link>
    </nav>
  );
};

export default Nav;
