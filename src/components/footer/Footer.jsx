import React from "react";
import "./footer.scss";
// import Clock from "react-live-clock";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Sara</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>

          <li>
            <a href="#services" className="footer__link">
              Services
            </a>
          </li>
        </ul>
        <div className="footer__social">
          <a
            href="https://linkedin.com/"
            className="footer__social-link"
            target="_blank"
          >
            <i class="uil uil-linkedin"></i>
          </a>

          <a
            href="https://github.com/"
            className="footer__social-link"
            target="_blank"
          >
            <i class="uil uil-github"></i>
          </a>

          <a
            href="https://www.instagram.com/"
            className="footer__social-link"
            target="_blank"
          >
            <i class="uil uil-instagram-alt"></i>
          </a>
        </div>
        {/* <div className="footer__time"> */}
        {/* <Clock format={"HH:mm:ss"} ticking={true} timezone={"US/Pacific"} /> */}
        {/* </div> */}
        <span className="footer__copy">
          &#169; {new Date().getFullYear()} Sara. All rigths reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
