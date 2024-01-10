import React from "react";
import { useParams } from "react-router-dom";
import Nav from "../../components/Nav";
import Header from "../../components/Header";
import SwiperCarousel from "../../components/SwiperCarousel";
import "./index.css";

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
          <SwiperCarousel recipes={recipes} row={1} />
        </div>
        <h1>ID: {selectedRecipe?.title}</h1>
      </div>
    </div>
  );
}

export default Recipe;
