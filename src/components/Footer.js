import React from "react";
import "../App.js";

function Footer() {
  return (
    <div className="contact_icons">
      <a target="_blank" href="http://linkedin.com/in/keona-k-218079188">
        <div
          className="iconify"
          data-inline="false"
          data-icon="akar-icons:linkedin-fill"
          style="color: white; font-size: 45px;"
        ></div>
      </a>

      <a target="_blank" href="https://github.com/KeonaK">
        <div
          className="iconify"
          data-inline="false"
          data-icon="fa-brands:github-square"
          style="color: white; font-size: 45px;"
        ></div>{" "}
      </a>

      <a href="mailto:keonakirbydev@gmail.com">
        <div
          className="iconify"
          data-inline="false"
          data-icon="clarity:email-solid"
          style="color: white; font-size: 50px;"
        ></div>
      </a>
    </div>
  );
}

export default Footer;
