import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "./index.css";
import "swiper/css";
import "swiper/css/pagination";

function SwiperVertical({ instructions, chats, slidesPerView = 4.5 }) {
  return (
    <Swiper
      direction={"vertical"}
      slidesPerView={slidesPerView}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="instructions"
    >
      {instructions?.map((instruction, i) => {
        return (
          <SwiperSlide key={i}>
            <div className="instruction">{instruction}</div>
          </SwiperSlide>
        );
      })}
      {chats?.map(([sender, chat], i) => (
        <SwiperSlide key={i}>
          <div className={sender !== "openai" && "flex right"}>
            <div className="message">{chat}</div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default SwiperVertical;
