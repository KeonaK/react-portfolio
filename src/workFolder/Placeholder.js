import React from "react";
import X from "../images/250x250.svg";
import "../App.js";

function Placeholder() {
  return (
    <div>
      <div>
        <div class="project-img">
          <img src={X} alt="project" />
        </div>
        <h3>Project 5</h3>
        <p>project description</p>
        <button class="project_button btn" type="button">
          View Deployment{" "}
        </button>
        <button class="project_button btn" type="button">
          View Repository
        </button>
      </div>
    </div>
  );
}

export default Placeholder;
