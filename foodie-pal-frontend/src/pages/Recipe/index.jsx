import React from "react";
import { useParams } from "react-router-dom";

function Recipe() {
  const { id } = useParams();
  const recipes = JSON.parse(localStorage.getItem("recipes"));
  const selectedRecipe = recipes.find(
    (recipe) => recipe.id === parseInt(id, 10)
  );

  return (
    <div>
      <h1>ID: {selectedRecipe?.title}</h1>
    </div>
  );
}

export default Recipe;
