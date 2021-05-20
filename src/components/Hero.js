import React from "react";
import Header from "../components/Header";
import HeroImage from "../images/heroImg.svg";
import Arrow from "../images/Vectorarrow.svg";
import "../App.scss";

function Hero() {
  return (
    <div>
      <Header />
      <section className="hero">
        <div className="hero_container">
          <div className="hero_box1">
            <h1>Hello!</h1>
            <h2>
              I'm Keona Kirby a <br />
              <span>Web Developer </span> .
            </h2>
            <p>Front-End Developer | Freelancer</p>
          </div>

          <div className="hero_box2">
            <img className="hide-for-mobile" src={HeroImage} alt="shapes" />
          </div>
        </div>
        <a href="#aboutme_section">
          <img
            src={Arrow}
            className="arrow_animation hero_arrow "
            alt="down arrow"
          />
        </a>
      </section>
    </div>
  );
}

export default Hero;
