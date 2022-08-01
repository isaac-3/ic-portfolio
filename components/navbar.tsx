import React from "react";
import { Link } from "react-scroll";

type Props = {};

const Navbar = (props: Props) => {
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
    </div>
  );
};

export default Navbar;
