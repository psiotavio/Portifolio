import HeaderComponent from "../../components/header/Header";
import Typical from "react-typical";
import React, { useState } from "react";
import Atropos from "atropos/react";
import { Link } from 'react-router-dom';

import MR from "../../assets/games/MrArgon/MR..png";
import ARGON from "../../assets/games/MrArgon/ARGON.png";

import "./Projects.scss";

function Projects() {

    const handleClick = () => {
        window.location.href = "/";
      };
      
  return (
    <div className="app">
      <HeaderComponent />
      <h1>
        <Typical
          steps={["", 1000, "Projects"]}
          loop={1}
          wrapper="span"
          className="highlight"
        />
      </h1>

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
          </Atropos>

          <Atropos
            innerClassName="projects-atr"
            className="atropos-projects"
            activeOffset={60}
            shadowScale={1.1}
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
          </Atropos>

          <Atropos
            innerClassName="projects-atr"
            className="atropos-projects"
            activeOffset={60}
            shadowScale={1.1}
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
          </Atropos>

          <Atropos
            innerClassName="projects-atr"
            className="atropos-projects"
            activeOffset={60}
            shadowScale={1.1}
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
          </Atropos>

          
        </div>
      </div>
    </div>
  );
}

export default Projects;
