import React from "react";
import { Link } from "react-router-dom";
import CV from "../../assets/cv.pdf";

const Cta = () => {
  return (
    <div>
      <div className="cta">
        <a href={CV} download className="btn">
          Download CV
        </a>
        <Link to="/contact" className="btn btn-primary">
          Let's chat
        </Link>
      </div>
    </div>
  );
};

export default Cta;
