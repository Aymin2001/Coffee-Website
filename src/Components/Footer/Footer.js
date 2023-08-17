import React from "react";
import "./Footer.css";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaCaretRight,
  FaLocationDot,
} from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";
import logo from "../../assets/images/logo.png";


function Footer() {
  return (
    <section className="Footer-section" id="Footer">
      <div className="Footer-grid grid container">
        <div className="Footer-content">
          <a href="" className="Footer-logo">
            <img src={logo} alt="" className="Footer-logo-img" />
          </a>
          <p className="Footer-desc">
            There are many variations of passages of Lorem Ipsum available,but
            the majority have suffered alteration in some form, by injected
            humour or randomised words which don't even look slightlt
            believable.
          </p>
          <ul className="Footer-Contact">
            <li className="Footer-item">
              <AiOutlinePhone className="footer-icon" /> +923776544987
            </li>
            <li className="Footer-item">
              <AiOutlineMail className="footer-icon" /> Coffee456@gmail.com
            </li>
            <li className="Footer-item">
              <MdOutlineLocationOn className="footer-icon" /> Gulzar-e-Quaid
              Rawalpindi
            </li>
          </ul>
        </div>

        <div className="Footer-content">
          <h3 className="Footer-title">Quick Links</h3>
          <ul className="Footer-Links">
            <li>
              <a href="#About" className="Footer-link">
                <FaCaretRight className="footer-icon" /> About Us
              </a>
            </li>

            <li>
              <a href="#Menu" className="Footer-link">
                <FaCaretRight className="footer-icon" /> Menu
              </a>
            </li>
            <li>
              <a href="#Features" className="Footer-link">
                <FaCaretRight className="footer-icon" /> Features
              </a>
            </li>
            <li>
              <a href="#Gallery" className="Footer-link">
                <FaCaretRight className="footer-icon" /> Gallery
              </a>
            </li>
            <li>
              <a href="#Team" className="Footer-link">
                <FaCaretRight className="footer-icon" /> Team
              </a>
            </li>
            <li>
              <a href="#Reservation" className="Footer-link">
                <FaCaretRight className="footer-icon" /> Reservation
              </a>
            </li>
          </ul>
        </div>

        <div className="Footer-content">
          <h3 className="Footer-title">Opening Hours</h3>
          <div className="Footer-Opening-Hours">
            <ul className="Footer-Opening-List">
              <li className="Footer-Opening-item">
                <span>Saturday</span>
                <span>09AM - 06PM</span>
              </li>
              <li className="Footer-Opening-item">
                <span>Monday</span>
                <span>09AM - 06PM</span>
              </li>
              <li className="Footer-Opening-item">
                <span>Tuesday</span>
                <span>09AM - 06PM</span>
              </li>
              <li className="Footer-Opening-item">
                <span>Wednesday</span>
                <span>09AM - 06PM</span>
              </li>
              <li className="Footer-Opening-item">
                <span>Thursday</span>
                <span>09AM - 06PM</span>
              </li>
              <li className="Footer-Opening-item">
                <span>Friday</span>
                <span>09AM - 06PM</span>
              </li>
              <li className="Footer-Opening-item">
                <span>Sunday</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="Footer-content">
          <h3 className="Footer-title">Newsletter</h3>
          <p className="Footer-desc">
            Subscribe Our Newsletter To Get Latest Updates And News.
          </p>
          <form className="Subscribe-form">
            <input
              placeholder="Your Email"
              type="email"
              className="form-input subscribe-input"
            />
            <button className="btn btn-flex subscribe-btn">
              <AiOutlineMail />
              Subscribe Now
            </button>
          </form>
          <div className="Footer-Socials">
            <h3 className="Footer-Social">Follow Us:</h3>

            <div className="Footer-Social-Links">
              <a href="" className="Footer-Social-Link">
                <FaLinkedinIn />
              </a>
              <a href="" className="Footer-Social-Link">
                <FaFacebookF />
              </a>
              <a href="" className="Footer-Social-Link">
                <FaTwitter />
              </a>
              <a href="" className="Footer-Social-Link">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
      </div>

      <p className="CopyRight-text">
        Copyright 2023 <span>Coffero</span> All Rights Reserved.
      </p>
    </section>
  );
}

export default Footer;
