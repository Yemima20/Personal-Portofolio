import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "../css/Projects.css";

function Projects() {
  return (
    <>
      <main className="projects">
        <h1 className="headingProject">Click me!</h1>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <a href="https://rohana-kuddus.github.io/skilled-women" target="_blank" rel="noreferrer">
              <img src="https://imgur.com/9I8a7m7.png" alt="SkilledWomen" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="http://bmi-calculator-beta-rouge.vercel.app/" target="_blank" rel="noreferrer">
              <img src="https://imgur.com/FYsXJ04.png" alt="BMI Calculator" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="https://todo-list-eight-lake-45.vercel.app/" target="_blank" rel="noreferrer">
              <img src="https://imgur.com/I49AeRv.png" alt="Todo List APP" />
            </a>
          </SwiperSlide>
        </Swiper>
      </main>
    </>
  );
}

export default Projects;
