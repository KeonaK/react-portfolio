import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/headerLogo.svg";
import "../App.scss";
import Resume from "../images/resume.pdf";

function Header() {
  return (
    <section className="header">
      <nav>
        <a to="/">
          <img src={Logo} alt="logo" />
        </a>

        <div className="header_links hide-for-mobile">
          <Link to="/about">About</Link>
          <Link to="/project">Projects</Link>
          <Link to="/contact">Contact</Link>
          <a href={Resume} target="_blank">
            Resume
          </a>
        </div>
      </nav>
    </section>
  );
}

export default Header;
