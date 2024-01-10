import React from "react";
import { useParams } from "react-router-dom";
import Nav from "../../components/Nav";
import Header from "../../components/Header";
import SwiperCarousel from "../../components/SwiperCarousel";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faFire } from "@fortawesome/free-solid-svg-icons";

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
        <div className="recipe-info full-width">
          <div>
            <img
              className="recipe-image-large"
              src={selectedRecipe.imageUrl}
              alt="recipeImage"
            />
          </div>

          <div>
            <p>{selectedRecipe.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recipe;
