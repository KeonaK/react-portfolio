import React from "react";
import "../App.scss";

function Footer() {
  return (
    <div className="contact_icons">
      <a target="_blank" href="http://linkedin.com/in/keona-k-218079188">
        <div
          className="iconify"
          data-inline="false"
          data-icon="akar-icons:linkedin-fill"
          style={{ color: "white", fontSize: 45 }}
        ></div>
      </a>

      <a target="_blank" href="https://github.com/KeonaK">
        <div
          className="iconify"
          data-inline="false"
          data-icon="fa-brands:github-square"
          style={{ color: "white", fontSize: 45 }}
        ></div>{" "}
      </a>

      <a href="mailto:keonakirbydev@gmail.com">
        <div
          className="iconify"
          data-inline="false"
          data-icon="clarity:email-solid"
          style={{ color: "white", fontSize: 50 }}
        ></div>
      </a>
    </div>
  );
}

export default Footer;
