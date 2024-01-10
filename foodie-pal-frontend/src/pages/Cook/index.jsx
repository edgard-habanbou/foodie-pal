import React from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import Nav from "../../components/Nav";
function Cook() {
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
      </div>
    </div>
  );
}

export default Cook;
