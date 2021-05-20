import React from "react";
import "../../App.scss";

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
