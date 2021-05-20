import React from "react";
import "../images/Dashboard.png";
import "../App.scss";

function Weather() {
  return (
    <div>
      <div>
        <img src="../images/Dashboard.png" alt="project image" />
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
    </div>
  );
}

export default Weather;
