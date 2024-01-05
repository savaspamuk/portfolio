import React from "react";
import data from "../../data/index.json";

const Testimonials = () => {
  return (
    <section className="testimonial--section" id="Testimonials">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <p className="sub--title">Clients Feedback</p>
          <h2 className="section--heading">Customer Feedback</h2>
        </div>
      </div>
      <div className="portfolio--section--container">
        {data?.testimonials?.map((item, index) => (
          <div key={index} className="testimonial--section--card">
            <div className="testimonial--section--card--review">
              {Array.from({ length: 5 }, (reviews, index) => (
                <span>X</span>
              ))}
            </div>
            <p className="text-md">{item.description}</p>
            <div className="testimonial--section--card--author--detail">
              <img src={item.src} alt="Avatar" />
              <div>
                <p className="text-md testimonial--author--name">
                  {item.author_name}
                </p>
                <p className="text-md testimonial--author-designation">
                  {item.author_designation}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
