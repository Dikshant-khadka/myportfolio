import React from "react";
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
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#skills"
        onClick={() => setActiveNav("#skills")}
        className={activeNav === "#skills" ? "active" : ""}
      >
        <BsCodeSlash />
      </a>
      <a
        href="#resume"
        onClick={() => setActiveNav("#resume")}
        className={activeNav === "#resume" ? "active" : ""}
      >
        {" "}
        <AiOutlinePaperClip />{" "}
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <MdContactMail />{" "}
      </a>
    </nav>
  );
};

export default Nav;
