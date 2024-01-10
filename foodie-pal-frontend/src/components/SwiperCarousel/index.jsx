import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination } from "swiper/modules";
import Card from "../Card";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

function SwiperCarousel({ recipes, row }) {
  return (
    <Swiper
      slidesPerView={2.2}
      grid={{
        rows: row,
      }}
      pagination={{ dynamicBullets: true, clickable: true }}
      modules={[Grid, Pagination]}
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
