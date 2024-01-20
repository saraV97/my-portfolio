import React from "react";
import "./qualification.scss";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  titleVariants,
  staggerVariants,
  staggerVariantsRight,
  topDownVariants,
} from "../animation/Animation";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <motion.section
      className="qualification section"
      id="qualification"
      variants={titleVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <motion.h2 className="section__title" variants={titleVariants}>
        Qualification
      </motion.h2>
      <motion.span className="section__subtitle" variants={titleVariants}>
        My personel journey
      </motion.span>

      <div className="qualification__container container">
        <motion.div className="qualification__tabs" variants={titleVariants}>
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Experience
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Education
          </div>
        </motion.div>
        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <motion.div variants={staggerVariants}>
                <h3 className="qualification__title">Catalog Associate</h3>
                <span className="qualification__subtitle">
                  Amazon - Chennai
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"> </i>
                  2019 - 2021
                </div>
              </motion.div>

              <motion.div variants={topDownVariants}>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </motion.div>
            </div>

            <div className="qualification__data">
              <div></div>
              <motion.div variants={topDownVariants}>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </motion.div>
              <motion.div variants={staggerVariantsRight}>
                <h3 className="qualification__title">Automation Engineer</h3>
                <span className="qualification__subtitle">
                  Amazon - Chennai
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"> </i>
                  2021 - 2022
                </div>
              </motion.div>
            </div>

            <div className="qualification__data">
              <motion.div variants={staggerVariants}>
                <h3 className="qualification__title">Application Engineer</h3>
                <span className="qualification__subtitle">
                  Amazon - Chennai
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"> </i>
                  2022 - 2023
                </div>
              </motion.div>
              <motion.div variants={topDownVariants}>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </motion.div>
            </div>

            <div className="qualification__data">
              <div></div>
              <motion.div variants={topDownVariants}>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </motion.div>
              <motion.div variants={staggerVariantsRight}>
                <h3 className="qualification__title">Web Developer</h3>
                <span className="qualification__subtitle">Freelance</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"> </i>
                  2023 - Present
                </div>
              </motion.div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <motion.div variants={staggerVariants}>
                <h3 className="qualification__title">10th Class</h3>
                <span className="qualification__subtitle">
                  St.Patrick Hr. Sec. School - Pondicherry
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"> </i>
                  2011 - 2012
                </div>
              </motion.div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <motion.div variants={staggerVariantsRight}>
                <h3 className="qualification__title">12th Class</h3>
                <span className="qualification__subtitle">
                  St.Patrick Hr. Sec. School - Pondicherry
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"> </i>
                  2013 - 2014
                </div>
              </motion.div>
            </div>

            <div className="qualification__data">
              <motion.div variants={staggerVariants}>
                <h3 className="qualification__title">B.E - EEE</h3>
                <span className="qualification__subtitle">
                  St.Joseph's College of Engineering - Chennai
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"> </i>
                  2014 - 2018
                </div>
              </motion.div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Qualification;
