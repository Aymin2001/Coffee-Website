import React from "react";
import "./Menu.css";
import { menu } from "../../assets/Data";
function Menu() {
  return (
    <section className="Menu-section" id="Menu">
      <h2 className="section-title Menu-header" data-title="Our Menu">
        Let's Check Our Menu
      </h2>
      <div className="Menu-grid container grid">
        {menu.map(({ img, title, description, price }, index) => {
          return (
            <div className="Menu-items grid" key={index}>
              <div className="Menu-Image-Wrapper">
                <img src={img} alt="" className="menu-img" />
              </div>
              <div className="Menu-data">
                <div>
                  <h3 className="Menu-title">{title}</h3>
                  <p className="Menu-desc">{description}</p>
                </div>
                <span className="Menu-price">${price}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Menu;
