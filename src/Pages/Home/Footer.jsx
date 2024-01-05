import React from "react";
import { Link } from "react-scroll";
import { useState, useEffect } from "react";

const Footer = () => {
  const [navActive, setNavActive] = useState(false);

  const closeMenu = () => {
    setNavActive(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu();
    }
  }, []);
  return (
    <div className={`navbar--items ${navActive ? "active" : ""}`}>
      <ul>
        <li>
          <Link
            onClick={closeMenu}
            activeClass="navbar--active-content"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            to="heroSection"
            className="navbar--content"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            onClick={closeMenu}
            activeClass="navbar--active-content"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            to="MyPortfolio"
            className="navbar--content"
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link
            onClick={closeMenu}
            activeClass="navbar--active-content"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            to="AboutMe"
            className="navbar--content"
          >
            About Me
          </Link>
        </li>
        <li>
          <Link
            onClick={closeMenu}
            activeClass="navbar--active-content"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            to="Testimonials"
            className="navbar--content"
          >
            Testimonials
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
