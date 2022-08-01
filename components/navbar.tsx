import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const navSlide = () => {
    const navBurger = document.querySelector(".nav-burger") as HTMLElement;
    const nav = document.querySelector(".nav-links") as HTMLElement;
    const navLinks = document.querySelectorAll<HTMLElement>(".nav-links a");

    nav.classList.toggle("nav-active");
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });
    navBurger.classList.toggle("nav-burger-toggle");
  };

  return (
    <div className="navbar">
      <div className="nav-logo-container">
        <div className="nav-logo">
          <h1>IC</h1>
        </div>
      </div>
      <div className="nav-links">
        <Link
          className="nav-link"
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          About
        </Link>
        <Link
          className="nav-link"
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          Projects
        </Link>
        <Link
          className="nav-link"
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          Skills
        </Link>
        <Link
          className="nav-link"
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          Contact
        </Link>
      </div>
      <div className="nav-burger" onClick={() => navSlide()}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </div>
  );
};

export default Navbar;
