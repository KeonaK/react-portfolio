import React from "react";
import PortImg from "../images/portfolioImage.png";
import "../App.js";

function Portfolio() {
  return (
    <div>
      <div class="project-img">
        <img src={PortImg} alt="project" />
      </div>
      <div>
        <h3>Portfolio</h3>
        <p>Portfolio that displays current projects</p>

        <button class="project_button btn" type="button">
          {" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://keonak.github.io/homework2-portfolio/"
          >
            View Deployment
          </a>
        </button>

        <button class="project_button btn" type="button">
          {" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/KeonaK/homework2-portfolio"
          >
            View Repository
          </a>
        </button>
      </div>
    </div>
  );
}

export default Portfolio;
