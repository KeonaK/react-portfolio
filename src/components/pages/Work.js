import React from "react";
import "../../App.scss";
import Project from "../Project";

function Work() {
  return (
    <div>
      <section className="projects" id="project_section">
        <h2>My Work</h2>
        <div className="projects_container">
          <Project project="weather" />
          <Project project="market" />
          <Project project="portfolio" />
          <Project project="employee" />
          <Project project="placeholder" />
        </div>
      </section>
    </div>
  );
}

export default Work;
