import React from "react";
import "./work.scss";
import Works from "./Works";
import { motion } from "framer-motion";
import { titleVariants, titleVariants1 } from "../animation/Animation";

const Work = () => {
  return (
    <section className="work section" id="portfolio">
      <motion.h2
        className="section__title"
        variants={titleVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        Portfolio
      </motion.h2>
      <motion.span
        className="section__subtitle"
        variants={titleVariants1}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        My Recent Works
      </motion.span>

      <Works />
    </section>
  );
};

export default Work;
