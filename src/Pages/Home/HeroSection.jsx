import React from "react";

const HeroSection = () => {
  return (
    <section id="HeroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section-content">
          <p className="section--title">Hey, I am Savas</p>
          <h1 className="hero--section--title">
            <span className="hero--section--title--color">Front-End</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section--description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            <br />
            Omnis, harum.
          </p>
        </div>
        <button className="btn btn-primary">Get In Touch</button>
      </div>
      <div className="hero--section--img">
        <img src=".\assets\img\hero_img.jpg" alt="Savas Pamuk" />
      </div>
    </section>
  );
};

export default HeroSection;
