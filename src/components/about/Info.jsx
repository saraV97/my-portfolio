import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <a href="#qualification" className="about__title-link">
        <div className="about__box">
          <i class="bx bx-award about__icon"></i>
          <h3 className="about__title">Experience</h3>
          <span className="about__subtitle">4 Years Working</span>
        </div>
      </a>

      <a href="#portfolio" className="about__title-link">
        <div className="about__box">
          <i class="bx bx-briefcase about__icon"></i>
          <h3 className="about__title">Completed</h3>
          <span className="about__subtitle">5 Projects</span>
        </div>
      </a>

      <a href="#contact" className="about__title-link">
        <div className="about__box">
          <i class="bx bx-support about__icon"></i>
          <h3 className="about__title">Support</h3>
          <span className="about__subtitle">Online 24/7</span>
        </div>
      </a>
    </div>
  );
};

export default Info;
