import React from "react";
import GitHub from "../../assets/img/github.png";
import Gmail from "../../assets/img/gmail.png";
import Instagram from "../../assets/img/instagram.png";
import LinkedIn from "../../assets/img/linkedin.png";

const ContactMe = () => {
  return (
    <section className="contact--section" id="Contact">
      <div>
        <h2 className="contact--section--heading">
          Contact<span> Me</span>
        </h2>
        <p className="text-lg">
          You can reach me on the following platforms for contact:
        </p>
      </div>
      <div className="contact--container">
        <div className="contact--section--platform">
          <a
            id="profile-link"
            href="https://github.com/savaspamuk"
            target="_blank"
            class="contact--details"
          >
            <img src={GitHub} alt="GitHub" />
            GitHub
          </a>
        </div>
        <div className="contact--section--platform">
          <a
            href="https://www.linkedin.com/in/savas-pamuk-0140582b/"
            target="_blank"
            class="contact--details"
          >
            <img src={LinkedIn} alt="LinkedIn" />
            LinkedIn
          </a>
        </div>
        <div className="contact--section--platform">
          <a
            href="https://www.instagram.com/svspamuk/"
            target="_blank"
            class="contact--details"
          >
            <img src={Instagram} alt="Instagram" />
            Instagram
          </a>
        </div>
        <div className="contact--section--platform">
          <a href="mailto:savaspamuk@gmail.com" class="contact--details">
            <img src={Gmail} alt="Gmail" />
            Gmail
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
