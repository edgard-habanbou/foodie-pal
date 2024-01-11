import React from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import Nav from "../../components/Nav";
import "./index.css";
function Cook() {
  const { id } = useParams();
  const recipes = JSON.parse(localStorage.getItem("recipes"));
  const selectedRecipe = recipes.find(
    (recipe) => recipe.id === parseInt(id, 10)
  );
  const instructions = selectedRecipe.instructions;
  return (
    <div className="flex ">
      <div>
        <Nav />
      </div>
      <div className="landing ">
        <Header />
        <div>
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
          <div className="instructions">
            {instructions.map((instruction) => {
              return <li>{instruction}</li>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cook;
