import React from "react";
import "../App.scss";

function Footer() {
  return (
    <div className="contact_icons">
      <a
        target="_blank"
        rel="noreferrer"
        href="http://linkedin.com/in/keona-kirby"
      >
        <div
          className="iconify"
          data-inline="false"
          data-icon="akar-icons:linkedin-fill"
          style={{ color: "black", fontSize: 45 }}
        ></div>
      </a>

      <a target="_blank" rel="noreferrer" href="https://github.com/KeonaK">
        <div
          className="iconify"
          data-inline="false"
          data-icon="fa-brands:github-square"
          style={{ color: "black", fontSize: 45 }}
        ></div>{" "}
      </a>

      <a href="mailto:keonakirbydev@gmail.com">
        <div
          className="iconify"
          data-inline="false"
          data-icon="clarity:email-solid"
          style={{ color: "black", fontSize: 50 }}
        ></div>
      </a>
    </div>
  );
}

export default Footer;
