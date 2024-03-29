import React from "react";
import { staggerVariantsRight } from "../animation/Animation";
import { motion } from "framer-motion";

const Backend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Backend Development</h3>

      <div className="skills__box">
        <motion.div
          className="skills__group"
          variants={staggerVariantsRight}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div className="skills__data" variants={staggerVariantsRight}>
            <i class="bx bxs-badge-check"></i>

            <div>
              <h3 className="skills__name">NodeJS</h3>
              <span className="skills__level">Basic</span>
            </div>
          </motion.div>

          <motion.div className="skills__data" variants={staggerVariantsRight}>
            <i class="bx bxs-badge-check"></i>

            <div>
              <h3 className="skills__name">MySQL</h3>
              <span className="skills__level">Intemediate</span>
            </div>
          </motion.div>

          <motion.div className="skills__data" variants={staggerVariantsRight}>
            <i class="bx bxs-badge-check"></i>

            <div>
              <h3 className="skills__name">Firebase</h3>
              <span className="skills__level">Intemediate</span>
            </div>
          </motion.div>

          <motion.div className="skills__data" variants={staggerVariantsRight}>
            <i class="bx bxs-badge-check"></i>

            <div>
              <h3 className="skills__name">Python</h3>
              <span className="skills__level">Intemediate</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Backend;
