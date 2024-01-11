import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

function SwiperVertical({ instructions }) {
  return (
    <Swiper
      direction={"vertical"}
      slidesPerView={4.5}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="instructions"
    >
      {instructions.map((instruction, i) => {
        return (
          <SwiperSlide key={i}>
            <div className="instruction">{instruction}</div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default SwiperVertical;
