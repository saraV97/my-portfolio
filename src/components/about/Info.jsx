import React from "react";
import { motion } from "framer-motion";
const Info = () => {
  return (
    <div className="about__info grid">
      <motion.a
        href="#qualification"
        className="about__title-link"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <div className="about__box">
          <i class="bx bx-award about__icon"></i>
          <h3 className="about__title">Experience</h3>
          <span className="about__subtitle">4 Years Working</span>
        </div>
      </motion.a>

      <motion.a
        href="#portfolio"
        className="about__title-link"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <div className="about__box">
          <i class="bx bx-briefcase about__icon"></i>
          <h3 className="about__title">Completed</h3>
          <span className="about__subtitle">5 Projects</span>
        </div>
      </motion.a>

      <motion.a
        href="#contact"
        className="about__title-link"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <div className="about__box">
          <i class="bx bx-support about__icon"></i>
          <h3 className="about__title">Support</h3>
          <span className="about__subtitle">Online</span>
        </div>
      </motion.a>
    </div>
  );
};

export default Info;
