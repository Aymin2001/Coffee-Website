import React from "react";
import { features } from "../../assets/Data";
import shape from "../../assets/images/shape.png";
import "./Features.css";
function Features() {
  return (
    <section className="Features-Section" id="Features">
      <h2 className="section-title Feature-header" data-title="Features">
        Our Best Features
      </h2>
      <div className="Feature-grid container grid">
        {features.map(({ img, title, description }, index) => {
          return (
            <div className="Features-items" key={index}>
              <img src={img} className="Feature-img" />
              <h3 className="Feature-title">{title}</h3>
              <p className="Feature-desc">{description}</p>
              <img src={shape} className="Feature-shape" />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Features;
