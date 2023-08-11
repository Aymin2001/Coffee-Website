import React from "react";
import "./Gallery.css";
import { gallery } from "../../assets/Data";
import { AiOutlinePlus } from "react-icons/ai";
function Gallery() {
  return (
    <section className="Gallery-section" id="Gallery">
      <h2 className="section-title Gallery-header" data-title="Gallery">
        Our Photo Gallery
      </h2>

      <div className="Gallery-grid container grid">
        {gallery.map(({ img, title }, index) => {
          return (
            <div className="Gallery-items" key={index}>
              <img src={img} className="Gallery-img" />
              <a href="/" className="Gallery-icon">
                <AiOutlinePlus />
              </a>
              <h3 className="Gallery-title">{title}</h3>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Gallery;
