import HeaderComponent from "../../components/header/Header";
import React, { useState } from "react";
import Atropos from "atropos/react";
import { Link } from "react-router-dom";

import MR from "../../assets/games/MrArgon/MR..png";
import ARGON from "../../assets/games/MrArgon/ARGON.png";

import "./Projects.scss";

function Projects() {
  const potterdlePage = () => {
    window.location.href = "http://www.potterdle.com.br";
  };

  const handleClick = () => {
    window.location.href = "/";
  };

  return (
   
    <div className="app">
      <HeaderComponent />
      <h1>Projects</h1>

      <div className="projects-container">
        <div className="projects">
          <Atropos
            innerClassName="projects-atr"
            className="atropos-projects"
            activeOffset={60}
            shadowScale={1.1}
            onClick={handleClick}
          >
            <div className="projects-hover">
              <img
                className="mr"
                alt="mrArgon"
                src={MR}
                data-atropos-offset="-8"
              />
              <img
                className="argon"
                alt="mrArgon"
                src={ARGON}
                data-atropos-offset="8"
              />
            </div>
            <button data-atropos-offset="-20" className="download">
              Download
            </button>
          </Atropos>

          <Atropos
            innerClassName="projects-atr-potterdle"
            className="atropos-projects"
            activeOffset={60}
            shadowScale={1.1}
            onClick={potterdlePage}
          >
            <div className="projects-hover">
              <h1 className="potterdle" data-atropos-offset="8">
                Potterdle
              </h1>
            </div>
          </Atropos>
        </div>
      </div>
    </div>
  );
}

export default Projects;
