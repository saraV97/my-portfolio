import React from "react";
import "./testimonial.scss";
import { Data } from "./Data";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { delay, motion } from "framer-motion";
import { titleVariants, titleVariants1 } from "../animation/Animation";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

const Testimonial = () => {
  return (
    <section className="testimonial container section">
      <motion.h2
        className="section__title"
        variants={titleVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        My clients say
      </motion.h2>
      <motion.span
        className="section__subtitle"
        variants={titleVariants1}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        Testimonial
      </motion.span>

      <Swiper
        className="testimonial__container"
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
        }}
        modules={[Pagination, Autoplay]}
      >
        {Data.map(({ id, image, title, description }) => {
          return (
            <SwiperSlide className="testimonial__card" id={id}>
              <img src={image} alt="" className="testimonial__img" />
              <h3 className="testimonial__name">{title}</h3>
              <p className="testimonial__description">{description}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonial;
