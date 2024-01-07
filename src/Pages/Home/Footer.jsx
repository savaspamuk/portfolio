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
            smooth={true}
            offset={-70}
            duration={500}
            to="HeroSection"
            className="navbar--content"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
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
            smooth={true}
            offset={-70}
            duration={500}
            to="MySkills"
            className="navbar--content"
          >
            My Skills
          </Link>
        </li>
        <li>
          <Link
            smooth={true}
            offset={-90}
            duration={500}
            to="MyPortfolio"
            className="navbar--content"
          >
            Portfolio
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
