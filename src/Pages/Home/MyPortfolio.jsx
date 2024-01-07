import React from "react";
import data from "../../data/index.json";
import GitHub from "../../assets/img/github.png";

const MyPortfolio = () => {
  return (
    <section className="portfolio--section" id="MyPortfolio">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <h2 className="portfolio--section--heading">
            <span>My</span> Portfolio
          </h2>
        </div>
        <div className="portfolio--container--github-button">
          <img src={GitHub} alt="GitHub" />
          <a
            href="https://github.com/savaspamuk"
            target="_blank"
            className="btn btn-github"
          >
            Visit My GitHub
          </a>
        </div>
      </div>
      <div className="portfolio--section--container">
        {data?.portfolio?.map((item, index) => {
          return (
            <div key={index} className="portfolio--section--card">
              <a href={item.link} target="_blank">
                <div className="portfolio--section--card--content">
                  <div>
                    <h3 className="portfolio--section--title">{item.title}</h3>
                    <p className="text-md">{item.description}</p>
                  </div>
                  <div className="portfolio--section--img">
                    <h4>{item.tools}</h4>
                  </div>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default MyPortfolio;
