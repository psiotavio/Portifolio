import HeaderComponent from "../../components/header/Header";
import React from "react";
import Typical from "react-typical";

import "./AboutMe.scss";

function AboutMe() {
  return (
    <div className="app">
      <HeaderComponent />
      <h1>
        <Typical
          steps={["About me", 1400]}
          loop={1}
          wrapper="span"
          className="highlight"
        />
      </h1>
      <section className="about" id="about">
        <p>
          Hello! My name is Otávio da Cunha Pereira de Souza, and I am a
          Software Engineering student at PUCRS (Pontifícia Universidade
          Católica do Rio Grande do Sul). I am currently in my third semester
          and have a deep passion for the world of development.
        </p>
        <p>
          My main skills lie in the field of programming, particularly in game
          development and frontend web development. I have a knack for quickly
          adapting to different programming languages, including HTML, CSS,
          React, Java, JavaScript, and I have also had exposure to C, C++, C#,
          and Python. I believe my ability to adapt quickly is one of my strong
          suits.
        </p>
        <p>
          I have a specific interest in web development, game development using
          the Unreal Engine, and frontend development. Over time, I have
          completed several projects that I am proud of, including independent
          website creations such as{" "}
          <a
            className="links"
            href="http://www.potterdle.com.br"
            target="_blank"
            rel="noreferrer"
          >
            potterdle.com.br
          </a>
          . Furthermore, I have developed a few personal games, although none of
          them have been published.
        </p>
        <p>
          In addition to my academic background, I hold relevant certifications
          and training in (insert your certifications and training here).
        </p>
        <p>
          My personal traits include strong teamwork skills, fluency in English,
          quick adaptability to different environments, genuine interest in
          learning, and being helpful. I am committed to meeting deadlines and
          always strive to exceed expectations.
        </p>
        <p>
          While I do not have formal professional experience yet, I believe the
          projects and personal developments I have worked on so far have helped
          shape my career. I have learned a great deal from these experiences,
          utilizing self-developed games and websites as a hobby to practice and
          enhance my skills.
        </p>
        <p>
          My professional goals and aspirations are to become an excellent
          senior developer with a focus on frontend development and game
          development.
        </p>
        <p>
          I am excited to take on new challenges and continue learning on this
          thrilling development journey. If you would like to learn more about
          me or have any exciting opportunities, please don't hesitate to get in
          touch.
        </p>
      </section>
    </div>
  );
}

export default AboutMe;
