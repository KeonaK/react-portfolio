import React from "react";
import "../scss/style.css";

function Project() {
  return (
    <section class="projects" id="project_section">
      <h2>Projects</h2>
      <div class="projects_container">
        <div>
          <img src="../src/images/Dashboard.png" alt="project image" />
        </div>
        <div>
          <h3>Weather Dashboard</h3>
          <p>
            This project is a weather dashboard. Type in any city and it will
            display the current weather as well as a 5 day forcast.
          </p>
          <button class="project_button btn" type="button">
            {" "}
            <a target="_blank" href=" https://keonak.github.io/WeatherDashApp/">
              View Deployment
            </a>
          </button>
          <button class="project_button btn" type="button">
            {" "}
            <a target="_blank" href="https://github.com/KeonaK/WeatherDashApp">
              View Repository
            </a>
          </button>
        </div>

        <div class="project-img">
          <img src="../src/images/Project2.png" alt="project image" />
        </div>
        <div>
          <h3>Ambience Market Watch and Currency Exchange</h3>
          <p>
            This is a group project that is an application that combines
            different types of market data to allow users to make educated
            decisions on their future investments to their portfolios. With an
            ever-changing world where the dollar is becoming less used for
            international trading; we have also designed into the feature a
            currency exchange list for the most traded world currencies. Also,
            for the user’s convenience our team has introduced a currency
            exchange calculator to make conversions even easier. At the bottom
            of the application we have also included different commodities
            exchange pricing so that the user has a one stop shop to differing
            market portfolio options.
          </p>

          <button class="project_button btn" type="button">
            {" "}
            <a
              target="_blank"
              href="https://cgjones0711.github.io/Market-CE-Group/"
            >
              View Deployment
            </a>
          </button>

          <button class="project_button btn" type="button">
            {" "}
            <a
              target="_blank"
              href="https://github.com/cgjones0711/Market-CE-Group"
            >
              View Repository
            </a>
          </button>
        </div>

        <div class="project-img">
          <img src="../src/images/250x250.svg" alt="project image" />
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

        <div>
          <h3>Employee Directory</h3>
          <p>
            This app allows the user to view the entire employee directory at
            once to have quick access to employee information. The user is also
            able to filter the directory by the employee's name.
          </p>
          <button class="project_button btn" type="button">
            {" "}
            <a
              target="_blank"
              href="https://keonak.github.io/employee-directory/"
            >
              View Deployment
            </a>
          </button>

          <button class="project_button btn" type="button">
            {" "}
            <a
              target="_blank"
              href="https://github.com/KeonaK/employee-directory"
            >
              View Repository
            </a>
          </button>
        </div>
        <div class="project-img">
          <img src="../src/images/employee-directory" alt="project" />
        </div>

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
          <img src="../src/images/250x250.svg" alt="project image" />
        </div>

        <div>
          <h3>Project 6</h3>
          <p>project description</p>
          <button class="project_button btn" type="button">
            <a> View Deployment</a>{" "}
          </button>
          <button class="project_button btn" type="button">
            <a>View Repository</a>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Project;
