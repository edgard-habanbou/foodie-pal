import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "./index.css";
import { Autoplay } from "swiper/modules";
function SwiperCarousel({ texts }) {
  return (
    <Swiper
      centeredSlides={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
    >
      {texts.map((text, i) => (
        <SwiperSlide key={i}>
          <div className="text-center flex gap column">
            <h2>{text.tilte}</h2>
            <p>{text.description}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default SwiperCarousel;
