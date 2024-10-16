import React from "react";
import "./LandingPage.css";
import MASS_LOGO from "./MASS_LOGO.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
// import Footer from "./Footer";
const LandingPage = () => {
  return (
    <>
      <div className="landing-container">
        {/* Floating and spinning background symbols */}
        <div
          className="symbol"
          style={{ top: "10%", left: "70%", color: "red" }}
        >
          ♡
        </div>
        <div
          className="symbol"
          style={{ top: "10%", left: "10%", color: "blue" }}
        >
          ☀️
        </div>
        <div
          className="symbol"
          style={{ top: "20%", left: "75%", color: "green" }}
        >
          ★
        </div>
        <div
          className="symbol spin"
          style={{ top: "20%", left: "30%", color: "orange" }}
        >
          ✿
        </div>
        <div
          className="symbol"
          style={{ top: "40%", left: "10%", color: "purple" }}
        >
          ✦
        </div>
        <div
          className="symbol spin"
          style={{ top: "40%", left: "85%", color: "pink" }}
        >
          ⚡
        </div>
        <div
          className="symbol"
          style={{ top: "50%", left: "20%", color: "yellow" }}
        >
          ❄️
        </div>
        <div
          className="symbol spin"
          style={{ top: "60%", left: "80%", color: "cyan" }}
        >
          ✪
        </div>
        <div
          className="symbol"
          style={{ top: "85%", left: "85%", color: "magenta" }}
        >
          ❀
        </div>
        <div
          className="symbol spin"
          style={{ top: "80%", left: "45%", color: "lime" }}
        >
          🔮
        </div>
        <div
          className="symbol"
          style={{ top: "80%", left: "10%", color: "brown" }}
        >
          ⚽
        </div>
        <div
          className="symbol"
          style={{ top: "15%", left: "90%", color: "teal" }}
        >
          ☂️
        </div>
        <div
          className="symbol"
          style={{ top: "85%", left: "60%", color: "magenta" }}
        >
          ❀
        </div>

        <img src={MASS_LOGO} alt="Company Logo" className="logo" />
        <h1 className="message heartbeat">Something Big is Coming Soon</h1>
        <h2 className="companyName">Mass Weighing and Bagging Pvt Ltd.</h2>
        <p className="address">
          <b>Gat No 63, Ranje Tal-Bhor,</b>
          <br />
          <span>
            <b>Dist - Pune Maharashtra - 412205</b>
          </span>
        </p>
        <div className="help-line">
          <p>
            <span>
              <b>Our Help Line Number</b>
            </span>
          </p>
          <p>
            <b>9823192366 / 9860556033</b>
          </p>
        </div>

        <div className="social-media">
          <span style={{ cursor: "default" }}>
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </span>
          <span style={{ cursor: "default" }}>
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </span>
          <span style={{ cursor: "default" }}>
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </span>
          <span style={{ cursor: "default" }}>
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </span>
        </div>
        <div className="footer-section">
          <footer className="footer">
            <p>
              <span>Copyright &copy; 2024 Designed by </span>
              <a
                href="https://i2s2world.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "blue", textDecoration: "underline" }}
              >
                Instant Information Software Service Pvt. Ltd.
              </a>
            </p>
          </footer>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
