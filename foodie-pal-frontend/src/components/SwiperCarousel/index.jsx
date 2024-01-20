import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination } from "swiper/modules";
import Card from "../Card";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "./index.css";

function SwiperCarousel({ recipes, row, slidesPerView = 2 }) {
  return (
    <Swiper
      slidesPerView={slidesPerView}
      grid={{
        rows: row,
      }}
      pagination={{ dynamicBullets: true, clickable: true }}
      modules={[Grid, Pagination]}
      className="mySwiper swiper-carousel"
    >
      {recipes.map((recipe, i) => (
        <SwiperSlide key={i}>
          <Card
            id={recipe.id}
            title={recipe.title}
            calories={recipe.calories}
            time={recipe.time}
            imageUrl={recipe.imageUrl}
            description={recipe.description}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default SwiperCarousel;
