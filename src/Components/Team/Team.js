import React from "react";
import "./Team.css";
import chef1 from "../../assets/images/team-1.jpg";
import chef2 from "../../assets/images/team-2.jpg";
import chef3 from "../../assets/images/team-3.jpg";
import chef4 from "../../assets/images/team-4.jpg";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
function Team() {
  return (
    <section className="Team-section" id="Team">
      <h2 className="section-title Team-header" data-title="Chefs">
        Meet Our Experts
      </h2>
      <div className="Team-grid container grid">
        <div className="Team-Item">
          <img src={chef1} alt="" className="Team-img" />
          <div className="Team-data">
            <h3 className="Team-title">Aymin Bashir</h3>
            <p className="Team-job">Senior Chef</p>
          </div>
          <div className="Social-links">
            <a href="/" className="Team-social-links">
              <FaFacebookF />
            </a>
            <a href="/" className="Team-social-links">
              <FaTwitter />
            </a>
            <a href="/" className="Team-social-links">
              <FaLinkedinIn />
            </a>
            <a href="/" className="Team-social-links">
              <FaYoutube />
            </a>
          </div>
        </div>

        <div className="Team-Item">
          <img src={chef2} alt="" className="Team-img" />
          <div className="Team-data">
            <h3 className="Team-title">Asia Perveen</h3>
            <p className="Team-job">Senior Chef</p>
          </div>
          <div className="Social-links">
            <a href="/" className="Team-social-links">
              <FaFacebookF />
            </a>
            <a href="/" className="Team-social-links">
              <FaTwitter />
            </a>
            <a href="/" className="Team-social-links">
              <FaLinkedinIn />
            </a>
            <a href="/" className="Team-social-links">
              <FaYoutube />
            </a>
          </div>
        </div>

        <div className="Team-Item">
          <img src={chef3} alt="" className="Team-img" />
          <div className="Team-data">
            <h3 className="Team-title">Aliza Tahir</h3>
            <p className="Team-job">Senior Chef</p>
          </div>
          <div className="Social-links">
            <a href="/" className="Team-social-links">
              <FaFacebookF />
            </a>
            <a href="/" className="Team-social-links">
              <FaTwitter />
            </a>
            <a href="/" className="Team-social-links">
              <FaLinkedinIn />
            </a>
            <a href="/" className="Team-social-links">
              <FaYoutube />
            </a>
          </div>
        </div>

        <div className="Team-Item">
          <img src={chef4} alt="" className="Team-img" />
          <div className="Team-data">
            <h3 className="Team-title">Fatima Zunaira</h3>
            <p className="Team-job">Senior Chef</p>
          </div>
          <div className="Social-links">
            <a href="/" className="Team-social-links">
              <FaFacebookF />
            </a>
            <a href="/" className="Team-social-links">
              <FaTwitter />
            </a>
            <a href="/" className="Team-social-links">
              <FaLinkedinIn />
            </a>
            <a href="/" className="Team-social-links">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
