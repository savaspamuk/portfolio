import React from "react";
import HeroImg from "../../assets/img/hero_img.jpg";

const HeroSection = () => {
  return (
    <section id="HeroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section-content">
          <p className="section--title">Savas Pamuk</p>
          <h1 className="hero--section--title">
            <span className="hero--section--title--color">Front-End</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section--description">Hi, I'm Savas,</p>
          <p className="hero--section--description">
            An emerging Front-End Developer based in Gothenburg, Sweden.
          </p>
        </div>
      </div>
      <div className="hero--section--img">
        <img src={HeroImg} alt="Savas Pamuk" />
      </div>
    </section>
  );
};

export default HeroSection;
