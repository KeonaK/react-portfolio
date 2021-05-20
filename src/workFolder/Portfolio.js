import React from "react";
import "../images/portfolioImage.png";
import "../App.js";

function Portfolio() {
  return (
    <div>
      <div class="project-img">
        <img src="../images/portfolioImage.png" alt="project" />
      </div>
      <div>
        <h3>Portfolio</h3>
        <p>Portfolio that displays current projects</p>

        <button class="project_button btn" type="button">
          {" "}
          <a
            target="_blank"
            href="https://keonak.github.io/homework2-portfolio/"
          >
            View Deployment
          </a>
        </button>

        <button class="project_button btn" type="button">
          {" "}
          <a
            target="_blank"
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
