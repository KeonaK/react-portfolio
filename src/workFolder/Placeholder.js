import React from "react";
import Google from "../images/250x250.svg";
import "../App.js";

function Placeholder() {
  return (
    <div>
      <div>
        <img src={Google} alt="project" />
      </div>
      <div>
        <h3>Google-Books-Search</h3>
        <p>
          This app allows the user to search for books using the Google Books
          Api. The user is able to view and save their favorite books!
        </p>
        <button class="project_button btn" type="button">
          {" "}
          <a
            target="_blank"
            href="https://obscure-scrubland-75542.herokuapp.com/"
          >
            View Deployment
          </a>
        </button>
        <button class="project_button btn" type="button">
          {" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/KeonaK//google-books-search"
          >
            View Repository
          </a>
        </button>
      </div>
    </div>
  );
}

export default Placeholder;
