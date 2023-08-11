import React from "react";
import "./Stats.css";
import coffeeShop from "../../assets/images/coffee-shop.svg";
import coffeeCup from "../../assets/images/coffee-cup.svg";
import chef from "../../assets/images/chef.svg";
function Stats() {
  return (
    <section className="Stats-section" id="Stats">
      <div className="Stats-grid container grid">
        <div className="grid-items">
          <div className="Stats-Image-Wrapper">
            <img src={coffeeShop} alt="" className="Stats-img" />
          </div>
          <div>
            <p className="Stats-no">1500</p>
            <h3 className="Stats-title">Total Branches</h3>
          </div>
        </div>

        <div className="grid-items">
          <div className="Stats-Image-Wrapper">
            <img src={chef} alt="" className="Stats-img" />
          </div>
          <div>
            <p className="Stats-no">250</p>
            <h3 className="Stats-title">Happy Customers</h3>
          </div>
        </div>

        <div className="grid-items">
          <div className="Stats-Image-Wrapper">
            <img src={coffeeCup} alt="" className="Stats-img" />
          </div>
          <div>
            <p className="Stats-no">120</p>
            <h3 className="Stats-title">Professional Chefs</h3>
          </div>
        </div>

        <div className="grid-items">
          <div className="Stats-Image-Wrapper">
            <img src={chef} alt="" className="Stats-img" />
          </div>
          <div>
            <p className="Stats-no">50</p>
            <h3 className="Stats-title">Years Of Experience</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stats;
