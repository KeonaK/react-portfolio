import React from "react";
import "../App.scss";
import Weather from "../workFolder/Weather";
import Market from "../workFolder/Market";
import Portfolio from "../workFolder/Portfolio";
import Employee from "../workFolder/Employee";
import Placeholder from "../workFolder/Placeholder";

function Project(props) {
  switch (props.project) {
    case "weather":
      return <Weather />;
    case "market":
      return <Market />;
    case "portfolio":
      return <Portfolio />;
    case "employee":
      return <Employee />;
    case "placeholder":
      return <Placeholder />;
    default:
      <Weather />;
  }
}

export default Project;
