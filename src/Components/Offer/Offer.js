import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { offer } from "../../assets/Data";
import "./Offer.css";
function Offer() {
  return (
    <section className="Offer-Section" id="Offer">
      <h2 className="section-title Offer-header" data-title="Offer">
        Special Offer For You
      </h2>

      <Swiper
        spaceBetween={30}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="container"
      >
        {offer.map(({ img, title, discount, description }, index) => {
          return (
            <SwiperSlide className="Offer-Item" key={index}>
              <div className="Offer-Img-Wrapper">
                <img src={img} alt="" className="Offer-Image" />
              </div>
              <div className="Offer-Content">
                <h3 className="Offer-Title">{title}</h3>
                <span className="Offer-discount">{discount}</span>
                <p className="Offer-desc">{description}</p>
                <a href="/" className="btn">
                  Order Now
                </a>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default Offer;
