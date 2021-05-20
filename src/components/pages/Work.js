import React from "react";
import Header from "../Header";
import "../../App.scss";
import Project from "../Project";

function Work() {
  return (
    <div>
      <Header />
      <section class="projects" id="project_section">
        <h2>Projects</h2>
        <Project project="weather" />
        <Project project="market" />
        <Project project="portfolio" />
        <Project project="employee" />
        <Project project="placeholder" />
      </section>
    </div>
  );
}

export default Work;
