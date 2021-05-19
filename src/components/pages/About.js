import React from "react";
import "../../scss/style.scss";
import "../../images/250x250.svg";

function About() {
  return (
    <section className="aboutme" id="aboutme_section">
      <div className="aboutme_container">
        <div className="aboutme_left">
          <h2>About Me</h2>

          <img src="../../images/250x250.svg" alt="placeholder" />
        </div>

        <div className="aboutme_skill">
          <div className="flex flex-w">
            <div className="skills">Html</div>
            <div className="skills">CSS</div>
            <div className="skills">SASS</div>
            <div className="skills">Figma</div>
            <div className="skills">MERN</div>
            <div className="skills">Bootstrap</div>
            <div className="skills">React</div>
            <div className="skills">JavaScript</div>
          </div>
          <p>
            {" "}
            I am a web developer based in Dallas, TX with a passion for creating
            elegant user interfaces and unique experiences from scratch.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
