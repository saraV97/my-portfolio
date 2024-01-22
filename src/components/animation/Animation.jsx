import { easeIn } from "framer-motion";

const topDownVariants = {
  initial: {
    y: -50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      //   staggerChildren: 0.1,
    },
  },
};

const topDownVariants1 = {
  initial: {
    y: -50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.8,
      ease: easeIn,
      //   staggerChildren: 0.1,
    },
  },
};

const staggerVariants = {
  initial: {
    x: -50,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const staggerVariantsRight = {
  initial: {
    x: 50,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const titleVariants = {
  initial: {
    opacity: 0,
    y: 30,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      //   delay: 0.25,
      staggerChildren: 0.3,
    },
  },
};

const titleVariants1 = {
  initial: {
    opacity: 0,
    y: 30,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: 0.25,
      // staggerChildren: 0.3,
    },
  },
};

const fadeInAnimationVariants1 = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3,
    },
  },
};

// const selectZoomVariants = {
//   whileHover: { scale: 1.1 },
//   transition: { type: "spring", stiffness: 400, damping: 10 },
// };

export {
  titleVariants,
  fadeInAnimationVariants1,
  titleVariants1,
  staggerVariants,
  staggerVariantsRight,
  topDownVariants,
  topDownVariants1,
};
