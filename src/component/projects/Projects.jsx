import React from "react";
import "./projects.css";
import counter from "../../assets/counter.png";
import diceGame from "../../assets/dice-game.png";
import pigGame from "../../assets/pig-game.png";
import modalWindow from "../../assets/modal-window.png";
import guessMyNumber from "../../assets/guessMyNumber.png";
import drumKit from "../../assets/Drum-Kit.png";

const Projects = () => {
  return (
    <section className="project">
      <h2>My Projects</h2>

      <div className="container project__container">
        <aritcle className="project__item">
          <div className="project__item-image">
            <img src={counter} alt="project" />
          </div>
          <h3 className="project__item-title">Counter app</h3>
          <div className="project__item-links">
            <a
              href="https://github.com/Dikshant-khadka/JS-Projects"
              className="btn"
            >
              Github
            </a>
            <a href="#" className="btn btn-primary">
              Live demo
            </a>
          </div>
        </aritcle>

        <aritcle className="project__item">
          <div className="project__item-image">
            <img src={diceGame} alt="project" />
          </div>
          <h3 className="project__item-title">Dice game</h3>
          <div className="project__item-links">
            <a
              href="https://github.com/Dikshant-khadka/JS-Projects"
              className="btn"
            >
              Github
            </a>
            <a href="#" className="btn btn-primary">
              Live demo
            </a>
          </div>
        </aritcle>

        <aritcle className="project__item">
          <div className="project__item-image">
            <img src={pigGame} alt="project" />
          </div>
          <h3 className="project__item-title">Race to 100</h3>
          <div className="project__item-links">
            <a
              href="https://github.com/Dikshant-khadka/JS-Projects"
              className="btn"
            >
              Github
            </a>
            <a href="#" className="btn btn-primary">
              Live demo
            </a>
          </div>
        </aritcle>

        <aritcle className="project__item">
          <div className="project__item-image">
            <img src={modalWindow} alt="project" />
          </div>
          <h3 className="project__item-title">modal window</h3>
          <div className="project__item-links">
            <a
              href="https://github.com/Dikshant-khadka/JS-Projects"
              className="btn"
            >
              Github
            </a>
            <a href="#" className="btn btn-primary">
              Live demo
            </a>
          </div>
        </aritcle>

        <aritcle className="project__item">
          <div className="project__item-image">
            <img src={guessMyNumber} alt="project" />
          </div>
          <h3 className="project__item-title">guess my number</h3>
          <div className="project__item-links">
            <a
              href="https://github.com/Dikshant-khadka/JS-Projects"
              className="btn"
            >
              Github
            </a>
            <a href="#" className="btn btn-primary">
              Live demo
            </a>
          </div>
        </aritcle>

        <aritcle className="project__item">
          <div className="project__item-image">
            <img src={drumKit} alt="project" />
          </div>
          <h3 className="project__item-title">
            This is a portifolio item title
          </h3>
          <div className="project__item-links">
            <a
              href="https://github.com/Dikshant-khadka/JS-Projects"
              className="btn"
            >
              Github
            </a>
            <a href="#" className="btn btn-primary">
              Live demo
            </a>
          </div>
        </aritcle>
      </div>
    </section>
  );
};

export default Projects;
