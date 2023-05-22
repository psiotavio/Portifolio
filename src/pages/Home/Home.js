import HeaderComponent from "../../components/header/Header";
import Typical from "react-typical";
import React, { useState } from "react";
import Atropos from "atropos/react";
import eu from "../../assets/Eu1.webp";
import stars1 from "../../assets/stars1.png";
import icon1 from "../../assets/icons/abstract1.webp";
import icon2 from "../../assets/icons/abstract2.webp";
import icon3 from "../../assets/icons/abstract3.webp";
import "atropos/css";
import "./Home.scss";
import emailjs from "@emailjs/browser";

const habilidades = ["Web Developer", "Game Developer", "Software Developer"];
const icons = [icon1, icon2, icon3];

function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function sendEmail(e) {
    e.preventDefault();
    if (name === "" || email === "" || message === "") {
      alert("preencha tudo");
      return;
    }

    const templateParams = {
      from_name: name,
      message: message,
      email: email,
    };
    emailjs
      .send(
        "service_teumwqg",
        "template_efqq92p",
        templateParams,
        "JQhkRZXFAWLFjbgZN"
      )
      .then(
        (Response) => {
          console.log("Email Enviado!", Response.status, Response.text);
          setEmail("");
          setMessage("");
          setName("");
        },
        (err) => console.log(err)
      );
  }

  return (
    <div className="app">
      <HeaderComponent />

      <div className="fader">
        <div className="content">
          <div className="photo-parallax">
            <div className="bio">
              <h1 className="intro">
                Hi, I'm{" "}
                <Typical
                  steps={["", 1000, "Otávio Cunha"]}
                  loop={1}
                  wrapper="span"
                  className="highlight"
                />
              </h1>

              <h3 className="short-intro">
                I develop Games, Websites and everything you want.
              </h3>
            </div>
            <div className="atr">
              <Atropos
                innerClassName="container"
                className="atropos-container"
                activeOffset={60}
                shadowScale={1.1}
              >
                <div className="container-hover">
                  <img
                    className="euPhoto"
                    alt="eu"
                    src={eu}
                    data-atropos-offset="5"
                  />
                  <div className="stars">
                    <img
                      className="stars1"
                      alt="stars1"
                      src={stars1}
                      data-atropos-offset="-8"
                    />
                  </div>
                </div>
              </Atropos>
            </div>
          </div>
        </div>
      </div>

      <div className="fader">
        <div className="overview">
          <div className="content">
            <h4 className="subtitle-overview">INTRODUCTION</h4>
            <h1 className="intro-overview">Overview</h1>
            <p className="content-overview">
              I'm a highly dedicated software developer with a passion for
              taking on new challenges. I thrive on pushing my limits and giving
              my best to overcome difficult projects. Even though I'm still in
              the third semester of my software engineering course, I've already
              completed numerous brilliant projects that demonstrate my
              excellent skills. My expertise spans across a wide range of
              programming languages, including Python, C, C++, C#, Java,
              JavaScript, TypeScript, React, HTML, CSS, SCSS, Unreal Engine 5,
              and Game Maker.
            </p>
          </div>
          <div className="atropos-overview">
            {habilidades.map((habilidade, index) => (
              <Atropos
                key={index}
                innerClassName="container-overview"
                className="atropos-container-overview"
                activeOffset={20}
                shadowScale={1.1}
              >
                <div className="container-hover">
                  <img
                    className="hability"
                    alt="hability"
                    src={icons[index]}
                    data-atropos-offset="9"
                  />
                  <h2 className="hability-content" data-atropos-offset="-5">
                    {habilidade}
                  </h2>
                </div>
              </Atropos>
            ))}
          </div>
        </div>
      </div>

      <div className="fader">
        <div className="content">
          <h1 className="title-contact">Contact</h1>

          <form className="form" onSubmit={sendEmail}>
            <input
              className="input"
              type="text"
              placeholder="Name:"
              onChange={(e) => setName(e.target.value)}
              value={name}
            ></input>

            <input
              className="input"
              type="text"
              placeholder="Email:"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            ></input>

            <input
              className="textarea"
              placeholder="Message:"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            ></input>

            <input className="button" type="submit" value="send"></input>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Home;
