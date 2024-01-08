import React from "react";
import AboutMeImg from "../../assets/img/aboutme.jpg";

const AboutMe = () => {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src={AboutMeImg} alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <h1 className="skills--section--heading">
            About
            <span> Me</span>
          </h1>
          <p className="hero--section--description">
            Passionate front-end web developer with a strong design inclination.
            Organized and skilled in problem-solving with a pedagogy Ph.D.
            background, enhancing learning agility. Proficient at swiftly
            grasping and addressing web development challenges. Excels in
            simplifying complex problems, showcasing creativity through design
            approach.
          </p>
          <h3>Education</h3>
          <p className="about--section--description">
            2023 - Front-End Development from Code2Career BootCamp
          </p>
          <p className="about--section--description">
            2014 - PH.D. in Science Education from Middle East Technical
            University
          </p>
          <p className="about--section--description">
            2007 - M.S. in Science Education from Middle East Technical
            University
          </p>
          <p className="about--section--description">
            2002 - Bachelor’s degree in Science Education from Gazi University
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
