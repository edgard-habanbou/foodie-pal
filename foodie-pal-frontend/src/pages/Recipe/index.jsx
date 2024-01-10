import React from "react";
import { useParams } from "react-router-dom";
import Nav from "../../components/Nav";
import Header from "../../components/Header";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination } from "swiper/modules";
import "./index.css";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import Card from "../../components/Card";

function Recipe() {
  const { id } = useParams();
  const recipes = JSON.parse(localStorage.getItem("recipes"));
  const selectedRecipe = recipes.find(
    (recipe) => recipe.id === parseInt(id, 10)
  );

  return (
    <div className="flex ">
      <div>
        <Nav />
      </div>
      <div className="landing ">
        <Header />
        <div className="swiper-div flex center">
          <Swiper
            slidesPerView={2.2}
            grid={{
              rows: 1,
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
        </div>
        <h1>ID: {selectedRecipe?.title}</h1>
      </div>
    </div>
  );
}

export default Recipe;
