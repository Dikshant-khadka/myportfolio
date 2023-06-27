import React from "react";
import "./about.css";

import { MdWork } from "react-icons/md";
import { GoProjectSymlink } from "react-icons/go";
import { TbZodiacCapricorn } from "react-icons/tb";

import ME from "../../assets/me-about.jpg";

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <MdWork className="about__icon" />
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>
            <article className="about__card">
              <TbZodiacCapricorn className="about__icon" />
              <h5>Zodiac</h5>
              <small>Capricon</small>
            </article>

            <article className="about__card">
              <GoProjectSymlink className="about__icon" />
              <h5>Projects</h5>
              <small>20+</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Perferendis enim doloremque incidunt animi tempora voluptates rerum
            aliquam. Obcaecati similique tempore ipsam modi praesentium
            temporibus? Vero ipsam iste, non sunt beatae magnam cum provident
            minima suscipit inventore saepe dolorum sed, totam, velit expedita
            maiores debitis. Quas numquam fugiat deleniti velit sit.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
