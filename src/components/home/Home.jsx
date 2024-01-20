import React from "react";
import "./home.scss";

import Social from "./Social";
import Data from "./Data";
import ScrollDown from "./ScrollDown";
import { motion } from "framer-motion";

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 10,
    },
  },
};

// variants={fadeInAnimationVariants1}
//           initial="initial"
//           whileInView="animate"
//           viewport={{ once: true }}

const imagePopVariant = {
  initial: { opacity: 0, scale: 0.5 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: 1,
      ease: [0, 0.71, 0.2, 1.01],
    },
  },
};
const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <Social />
          <motion.div
            className="home__img"
            variants={imagePopVariant}
            initial="initial"
            animate="animate"
          ></motion.div>
          <Data />
        </div>
        <ScrollDown />
        {/* <motion.div
          className="slidingText__container"
          variants={sliderVariants}
          initial="initial"
          animate="animate"
        >
          Web Developer Designer
        </motion.div> */}
      </div>
    </section>
  );
};

export default Home;
