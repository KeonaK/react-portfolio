import React from "react";
import { Link } from "react-router-dom";
import "../images/headerLogo.svg";
import "../App.scss";
import "../images/resume.pdf";

function Header() {
  return (
    <section className="header">
      <nav>
        <a href="#hero_section">
          <img src="../src/images/headerLogo.svg" alt="logo" />
        </a>

        <div className="header_links hide-for-mobile">
          <Link to="/about">About</Link>
          <Link to="/project">Projects</Link>
          <Link to="/contact">Contact</Link>
          <a
            href="../src/images/Keona Kirby Resume - Word.docx.pdf"
            target="_blank"
          >
            Resume
          </a>
        </div>
      </nav>
    </section>
  );
}

export default Header;
