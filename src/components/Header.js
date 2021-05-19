import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/headerLogo.svg";
import "../scss/style.css";

function Header() {
  return (
    <div className="header">
      <nav>
        <a href="#hero_section">
          <img src="../src/images/headerLogo.svg" alt="logo" />
        </a>

        {/* <a  href="" className="header_mobile_menu hide-for-desktop"> 
           <span></span>
           <span></span>
           <span></span>
       </a> */}

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
    </div>
  );
}

export default Header;
