import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Nav from "../../components/Nav";
import Header from "../../components/Header";
import SwiperCarousel from "../../components/SwiperCarousel";
import Loading from "../../components/Loading";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { faClock, faFire, faHeart } from "@fortawesome/free-solid-svg-icons";
import { userApi } from "../../network/axios";

function Recipe() {
  const [Load, setLoading] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const recipes = JSON.parse(localStorage.getItem("recipes"));
  const selectedRecipe = recipes.find(
    (recipe) => recipe.id === parseInt(id, 10)
  );

  const handleFavoriteBtn = async () => {
    setIsFavorite(!isFavorite);
  };
  useEffect(() => {
    const updateFav = async () => {
      const data = {
        subDocument: {
          FavoriteRecipes: {
            id: selectedRecipe.id,
            title: selectedRecipe.title,
            description: selectedRecipe.description,
            calories: selectedRecipe.calories,
            time: selectedRecipe.time,
            instructions: selectedRecipe.instructions,
            imageUrl: selectedRecipe.imageUrl,
          },
        },
      };
      if (isFavorite) {
        setLoading(true);
        try {
          await userApi.updateUser(data);
        } catch (error) {
          console.error(error);
        }
        setLoading(false);
      } else {
        setLoading(true);
        try {
          await userApi.deleteFromUser(data);
        } catch (error) {
          console.error(error);
        }
        setLoading(false);
      }
    };
    updateFav();
  }, [isFavorite]);

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
        <div className="margin padding  favorite-btn">
          <button className="btn-menu" onClick={handleFavoriteBtn}>
            <FontAwesomeIcon
              icon={faHeart}
              size="2xl"
              color={isFavorite ? "red" : "grey"}
            />
          </button>
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
          <div className="recipe-desc flex column margin gap">
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
      {Load && <Loading />}
    </div>
  );
}

export default Recipe;
