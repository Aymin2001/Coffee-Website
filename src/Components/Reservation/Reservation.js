import React from "react";
import "./Reservation.css";
import { FaRegBookmark } from "react-icons/fa";
import Shape2 from "../../assets/images/shape-2.png";
import Shape3 from "../../assets/images/shape-3.png";

function Reservation() {
  return (
    <section className="Reservation-section container" id="Reservation">
      <h2 className="section-title Reservation-header" data-title="Reservation">
        Book A Table
      </h2>
      <form className="Reservation-form grid">
        <div className="form-input-div">
          <input placeholder="Your Name" type="text" className="form-input" />
        </div>
        <div className="form-input-div">
          <input
            placeholder="Your Email Address"
            type="email"
            className="form-input"
          />
        </div>
        <div className="form-input-div">
          <input placeholder="Your Phone" type="text" className="form-input" />
        </div>
        <div className="form-input-div">
          <input
            placeholder="Date EX : DD/MM/YY"
            type="text"
            className="form-input"
          />
        </div>
        <div className="form-input-div">
          <input
            placeholder="Time Ex : 01:25PM"
            type="text"
            className="form-input"
          />
        </div>
        <div className="form-input-div">
          <input
            placeholder="Number Of People"
            type="text"
            className="form-input"
          />
        </div>
        <div className="form-input-div form-input-textarea">
          <textarea className="form-input" placeholder="Your Message..." />
        </div>
        <button className="btn btn-flex reservation-btn">
          <FaRegBookmark />
          Book A Table
        </button>
      </form>

      <img src={Shape2} alt="" className="Shape-2" />
      <img src={Shape3} alt="" className="Shape-3" />
    </section>
  );
}

export default Reservation;
