import React from "react";
import { useParams } from "react-router-dom";
import Nav from "../../components/Nav";
import Header from "../../components/Header";
import SwiperCarousel from "../../components/SwiperCarousel";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { faClock, faFire } from "@fortawesome/free-solid-svg-icons";

function Recipe() {
  const navigate = useNavigate();
  const { id } = useParams();
  const recipes = JSON.parse(localStorage.getItem("recipes"));
  const selectedRecipe = recipes.find(
    (recipe) => recipe.id === parseInt(id, 10)
  );

  return (
    <div className="flex background">
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
          <div className="flex row gap">
            <div className="flex column center time">
              <FontAwesomeIcon icon={faFire} />
              <p>{selectedRecipe.calories}</p>
            </div>
            <div className="flex column center time">
              <FontAwesomeIcon icon={faClock} />
              <p>{selectedRecipe.time}</p>
            </div>
          </div>
          <div className="recipe-desc flex column gap">
            <div>
              <p>
                <b>{selectedRecipe.title}</b>
              </p>
            </div>
            <div>
              <p>{selectedRecipe.description}</p>
            </div>
          </div>
          <div>
            <button
              onClick={() => {
                navigate(`/cook/${id}`);
              }}
              className="btn"
            >
              Start Cooking
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recipe;