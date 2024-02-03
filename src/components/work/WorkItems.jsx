import React from "react";
import { motion } from "framer-motion";

const WorkItems = ({ item }) => {
  return (
    <div><a href={item.link}>
  
    <motion.div
      className="work__card"
      key={item.id}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 1 }}
      transition={{ stiffness: 200, damping: 17 }}
    >
      <motion.img
        src={item.image}
        alt=""
        className="work__img"
        whileHover={{ scale: 1.05 }}
        transition={{ damping: 5, stiffness: 100 }}
      />
      <h3 className="work__title">{item.title}</h3>
      <a href={item.link} className="work__button">
        View <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </a>
    </motion.div>
    </a>
    </div>
  );
};

export default WorkItems;
