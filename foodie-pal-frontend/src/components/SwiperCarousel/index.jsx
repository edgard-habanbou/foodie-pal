import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination } from "swiper/modules";
import Card from "../Card";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "./index.css";

function SwiperCarousel({ recipes, row }) {
  const [slidesPerView, setSlidesPerView] = useState(2);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const calculateSlidesPerView = (width) => {
    if (width >= 1200) {
      setSlidesPerView(5);
    } else if (width >= 992) {
      setSlidesPerView(4);
    } else if (width >= 768) {
      setSlidesPerView(3);
    } else if (width >= 400) {
      setSlidesPerView(2);
    } else {
      setSlidesPerView(1);
    }
  };
  useEffect(() => {
    calculateSlidesPerView(screenWidth);
  }, [screenWidth]);
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
