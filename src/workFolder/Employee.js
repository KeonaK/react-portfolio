import React from "react";
import Directory from "../images/employee-directory.png";
import "../App.js";

function Employee() {
  return (
    <div>
      <div>
        <div class="project-img">
          <img src={Directory} alt="project" />
        </div>
        <h3>Employee Directory</h3>
        <p>
          This app allows the user to view the entire employee directory at once
          to have quick access to employee information. The user is also able to
          filter the directory by the employee's name.
        </p>
        <button class="project_button btn" type="button">
          {" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://keonak.github.io/employee-directory/"
          >
            View Deployment
          </a>
        </button>

        <button class="project_button btn" type="button">
          {" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/KeonaK/employee-directory"
          >
            View Repository
          </a>
        </button>
      </div>
    </div>
  );
}

export default Employee;
