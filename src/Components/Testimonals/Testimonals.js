import React from "react";
import "./Testimonals.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { testimonials } from "../../assets/Data";
import { FaStar } from "react-icons/fa";
import { VscTriangleDown } from "react-icons/vsc";
function Testimonals() {
  return (
    <section className="Testimonals-section" id="Testimonals">
      <h2 className="section-title Testimonals-header" data-title="Testimonals">
        What Client Says's
      </h2>

      <Swiper
        spaceBetween={30}
        pagination={{ clickable: true }}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        modules={[Pagination]}
        className="container"
      >
        {testimonials.map(({ img, title, service, description }, index) => {
          return (
            <SwiperSlide className="Testimonals-Item" key={index}>
              <div className="Testimonals-quote">
                <p className="Testimonals-desc">{description} </p>
                <VscTriangleDown className="Testimonal-icon" />
              </div>
              <div className="Testimonals-content">
                <div className="Testimonals-Image-Wrapper">
                  <img src={img} alt="" className="Testimonal-img" />
                </div>
                <div>
                  <h3 className="Testimonals-Title">{title}</h3>
                  <p className="Testimonals-services">{service}</p>
                  <div className="Testimonals-rating">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default Testimonals;
