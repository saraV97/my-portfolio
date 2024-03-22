import React from "react";
import { staggerVariants } from "../animation/Animation";
import { motion } from "framer-motion";

const Frontend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Frontend Development</h3>

      <div className="skills__box">
        <motion.div
          className="skills__group"
          variants={staggerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div className="skills__data" variants={staggerVariants}>
            <i class="bx bxs-badge-check"></i>

            <div>
              <h3 className="skills__name">HTML</h3>
              <span className="skills__level">Basic</span>
            </div>
          </motion.div>

          <motion.div className="skills__data" variants={staggerVariants}>
            <i class="bx bxs-badge-check"></i>

            <div>
              <h3 className="skills__name">CSS</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </motion.div>

          <motion.div className="skills__data" variants={staggerVariants}>
            <i class="bx bxs-badge-check"></i>

            <div>
              <h3 className="skills__name">Javascript</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </motion.div>

          <motion.div className="skills__data" variants={staggerVariants}>
            <i class="bx bxs-badge-check"></i>

            <div>
              <h3 className="skills__name">Git</h3>
              <span className="skills__level">Basic</span>
            </div>
          </motion.div>

          <motion.div className="skills__data" variants={staggerVariants}>
            <i class="bx bxs-badge-check"></i>

            <div>
              <h3 className="skills__name">React</h3>
              <span className="skills__level">Intemediate</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Frontend;
