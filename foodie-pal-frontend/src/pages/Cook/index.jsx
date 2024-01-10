import React from "react";
import { useParams } from "react-router-dom";

function Cook() {
  const { id } = useParams();
  const recipes = JSON.parse(localStorage.getItem("recipes"));
  const selectedRecipe = recipes.find(
    (recipe) => recipe.id === parseInt(id, 10)
  );
  return <div>ID: {selectedRecipe.id}</div>;
}

export default Cook;
