import { useState } from "react";
import "./header.scss";
import { motion } from "framer-motion";
// import { topDownVariants1 } from "../animation/Animation";
import { useMediaQuery } from "@mui/material";

const Header = () => {
  const useIsMedium = () => useMediaQuery("(min-width: 768px)");
  const isSmall = useIsMedium();
  const topDownVariants1 = isSmall
    ? {
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
            ease: [0.42, 0, 1, 1],
            //   staggerChildren: 0.1,
          },
        },
      }
    : {
        initial: {
          y: 0,
          opacity: 0,
        },
        animate: {
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.5,
            delay: 0.8,
            ease: [0.42, 0, 1, 1],
            //   staggerChildren: 0.1,
          },
        },
      };
  /*-----togle menu-----*/
  const [Toggle, showMenu] = useState(false);

  return (
    <header className="header">
      <motion.nav
        className="nav container"
        variants={topDownVariants1}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <a href="index.html" className="nav__logo">
          Sara
        </a>

        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home" className="nav__link">
                <i className="uil uil-estate nav__icon" />

                <span className="fill-up">Home</span>
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link">
                <i className="uil uil-user nav__icon" />
                <span className="fill-up">About</span>
              </a>
            </li>
            <li className="nav__item">
              <a href="#skills" className="nav__link">
                <i className="uil uil-file-alt nav__icon" />
                <span className="fill-up">Skills</span>
              </a>
            </li>

            <li className="nav__item">
              <a href="#portfolio" className="nav__link">
                <i className="uil uil-scenery nav__icon" />
                <span className="fill-up">Portfolio</span>
              </a>
            </li>
            <li className="nav__item">
              <a href="#services" className="nav__link">
                <i className="uil uil-briefcase-alt nav__icon" />
                <span className="fill-up">Services</span>
              </a>
            </li>
            {/* <li className="nav__item">
              <a href="#testimonials" className="nav__link">
                <i className="uil uil-users-alt nav__icon"> Testimonials</i>
              </a> 
            </li>*/}
            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <i className="uil uil-message nav__icon" />
                <span className="fill-up">Contact</span>
              </a>
            </li>
          </ul>
          <i
            className="uil uil-times nav__close"
            onClick={() => showMenu(!Toggle)}
          ></i>
        </div>
        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </motion.nav>
    </header>
  );
};

export default Header;
