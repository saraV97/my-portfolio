import React from "react";
import "./services.scss";
import { motion } from "framer-motion";
import { titleVariants } from "../animation/Animation";

const Services = () => {
  return (
    <motion.section
      className="services section"
      id="services"
      variants={titleVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <motion.h2 className="section__title" variants={titleVariants}>
        Services
      </motion.h2>
      <motion.span className="section__subtitle" variants={titleVariants}>
        What i offer
      </motion.span>

      <div className="services__container container grid">
        <motion.div
          className="services__content"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <div>
            <i className="uil uil-edit services__icon"></i>
            <h3 className="services__title">
              Website <br /> Development
            </h3>
          </div>
        </motion.div>

        <motion.div
          className="services__content"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">
              Product <br /> Design
            </h3>
          </div>
        </motion.div>

        <motion.div
          className="services__content"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <div>
            <i className="uil uil-arrow services__icon"></i>
            <h3 className="services__title">
              Website <br /> Maintenance
            </h3>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Services;
