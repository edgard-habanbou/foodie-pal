import React from "react";
import { useParams } from "react-router-dom";
import Nav from "../../components/Nav";
import { useNavigate } from "react-router-dom";

import "./index.css";

import SwiperVertical from "../../components/SwiperVertical";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import checkIfLoggedIn from "../../assets/checkIfLoggedIn";

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
  const handleBack = () => {
    navigate(`/home/${id}`);
  };
  const check = async () => {
    if (!(await checkIfLoggedIn())) {
      localStorage.clear();
      navigate("/");
    }
  };
  check();
  const instructions = selectedRecipe.instructions;
  return (
    <div className="flex background">
      <div>
        <Nav />
      </div>
      <div className="landing ">
        <button className="btn-menu margin " onClick={handleBack}>
          <FontAwesomeIcon icon={faArrowLeft} size="2xl" />
        </button>
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
        <div className="cooking-instrunctions">
          <SwiperVertical instructions={instructions} />
        </div>
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
