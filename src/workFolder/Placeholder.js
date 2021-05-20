import React from "react";
import "../images/250x250.svg";
import "../App.js";

function Placeholder() {
  return (
    <div>
      <div>
        <h3>Project 5</h3>
        <p>project description</p>
        <button class="project_button btn" type="button">
          <a> View Deployment</a>{" "}
        </button>
        <button class="project_button btn" type="button">
          <a>View Repository</a>
        </button>
      </div>
      <div class="project-img">
        <img src="../images/250x250.svg" alt="project image" />
      </div>
    </div>
  );
}

export default Placeholder;
