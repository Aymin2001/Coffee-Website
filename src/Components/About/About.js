import React from "react";
import "./About.css";
import aboutImg from "../../assets/images/about-img.jpg";
import { AiOutlineCheck } from "react-icons/ai";

function About() {
  return (
    <section className="About" id="About">
      <div className="about-grid container grid">
        <div className="Image-wrapper">
          <img className='about-img' src={aboutImg} alt="" />
        </div>
        <div className="About-content">
          <h2 className="section-title" data-title="About Us">
            Fresh Quality And Organic Tasty Coffee House For You
          </h2>
          <p className="About-Desc">
            There are many variations of passages of Lorem Ipsum available,but
            the majority have suffered alteration in some form,by injected
            humour or randomised words which don't even look slightlt
            believable.
          </p>
          <div className="About-detail grid">
            <p className="About-detail-desc">
              <AiOutlineCheck />
              Have Amazing Coffee at reasonable prices.
            </p>

            <p className="About-detail-desc">
              <AiOutlineCheck />
              Have Amazing Offers.
            </p>

            <p className="About-detail-desc">
              <AiOutlineCheck />
              Have Amazing view and work environment.
            </p>
          </div>
          <a href="#team" className="btn">
            Our Experts
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
