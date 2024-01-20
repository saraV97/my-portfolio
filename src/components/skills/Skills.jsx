import React from "react";
import Frontend from "./Frontend";
import Backend from "./Backend";
import "./skills.scss";
import { titleVariants, titleVariants1 } from "../animation/Animation";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <motion.h2
        className="section__title"
        variants={titleVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        Skills
      </motion.h2>
      <motion.span
        className="section__subtitle"
        variants={titleVariants1}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        My Technical level
      </motion.span>
      <div className="skills__container container grid">
        <Frontend />
        <Backend />
      </div>
    </section>
  );
};

export default Skills;
