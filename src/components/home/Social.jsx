import React from "react";
import { motion } from "framer-motion";
const socialVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Social = () => {
  return (
    <motion.div
      className="home__social"
      variants={socialVariants}
      initial="initial"
      animate="animate"
    >
      <motion.a
        href="https://www.linkedin.com/in/saravanan-velou"
        className="home__social-icon"
        target="_blank"
        variants={socialVariants}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <i class="uil uil-linkedin"></i>
      </motion.a>

      <motion.a
        href="https://github.com/saraV97"
        className="home__social-icon"
        target="_blank"
        variants={socialVariants}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <i class="uil uil-github"></i>
      </motion.a>

      <motion.a
        href="https://www.instagram.com/saravanan__vs/"
        className="home__social-icon"
        target="_blank"
        variants={socialVariants}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <i class="uil uil-instagram-alt"></i>
      </motion.a>
    </motion.div>
  );
};

export default Social;
