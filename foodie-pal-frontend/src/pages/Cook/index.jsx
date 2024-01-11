import React from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import Nav from "../../components/Nav";
import { useNavigate } from "react-router-dom";

import "./index.css";

import SwiperVertical from "../../components/SwiperVertical";

function Cook() {
  const { id } = useParams();
  const recipes = JSON.parse(localStorage.getItem("recipes"));
  const navigate = useNavigate();
  const selectedRecipe = recipes.find(
    (recipe) => recipe.id === parseInt(id, 10)
  );
  const handleChatbtn = () => {
    navigate(`/chat/${id}`);
  };
  const instructions = selectedRecipe.instructions;
  return (
    <div className="flex background">
      <div>
        <Nav />
      </div>
      <div className="landing ">
        <Header />
        <div className="flex gap center instructions-wrapper">
          <div>
            <img
              className="recipe-image-large"
              src={selectedRecipe.imageUrl}
              alt="recipeImage"
            />
          </div>
          <div className="recipe-desc  ">
            <b>
              <p>{selectedRecipe.title}</p>
            </b>
          </div>
        </div>
        <SwiperVertical instructions={instructions} />
        <div className="flex center">
          <button onClick={handleChatbtn} className="btn">
            Have a question?
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cook;
