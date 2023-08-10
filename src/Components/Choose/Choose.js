import React from "react";
import coffeeMug from "../../assets/images/coffee-mug.svg";
import coffeeBeans2 from "../../assets/images/coffee-beans-2.svg";
import coffeeBeans3 from "../../assets/images/coffee-beans-3.svg";
import chooseImg from "../../assets/images/choose.jpg";
import "./Choose.css";
function Choose() {
  return (
    <section className="Choose-us-section" id="Choose-Us">
      <div className="Choose-grid container grid">
        <div className="choose-content">
          <h2 className="section-title " data-title="Why Choose Us">
            Coffero Most OF Your Favorite & Tasty Coffee House
          </h2>
          <p className="Choose-desc">
            There are many variations of passages of Lorem Ipsum available,but
            the majority have suffered alteration in some form,by injected
            humour or randomised words which don't even look slightlt
            believable.{" "}
          </p>
          <div className="choose-detail ">
            <div className="choose-detail-items">
              <div className="choose-item">
                <div className="choose-img-wrapper">
                  <img src={coffeeMug} alt="" className="choose-img" />
                </div>
                <div className="Choose-content">
                  <h3 className="choose-content-title">Awesome Aroma</h3>
                  <p className="choose-content-desc">
                    There are many variations of passages of Lorem Ipsum
                    available,but the majority have suffered alteration in some
                    form,by injected humour or randomised words which don't even
                    look slightlt believable.
                  </p>
                </div>
              </div>

              <div className="choose-item">
                <div className="choose-img-wrapper">
                  <img src={coffeeBeans2} alt="" className="choose-img" />
                </div>
                <div className="Choose-content">
                  <h3 className="choose-content-title">Pure Grades</h3>
                  <p className="choose-content-desc">
                    There are many variations of passages of Lorem Ipsum
                    available,but the majority have suffered alteration in some
                    form,by injected humour or randomised words which don't even
                    look slightlt believable.
                  </p>
                </div>
              </div>

              <div className="choose-item">
                <div className="choose-img-wrapper">
                  <img src={coffeeBeans3} alt="" className="choose-img" />
                </div>
                <div className="Choose-content">
                  <h3 className="choose-content-title">Healthy Coffee</h3>
                  <p className="choose-content-desc">
                    There are many variations of passages of Lorem Ipsum
                    available,but the majority have suffered alteration in some
                    form,by injected humour or randomised words which don't even
                    look slightlt believable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <img src={chooseImg} alt="" className="choose Img" />
      </div>
    </section>
  );
}

export default Choose;
