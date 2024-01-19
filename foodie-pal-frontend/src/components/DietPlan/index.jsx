import React from "react";

function DietPlan() {
  const user = JSON.parse(localStorage.getItem("user"));
  const dietPlan = user.DietPlan;
  const mappedDietPlan = Object.entries(dietPlan);
  console.log(dietPlan);
  return (
    <div className="flex center message-diet column color-white">
      {mappedDietPlan.map(([meal, recipes]) => {
        return (
          <div className="flex column">
            <h1 className="color-white">{meal}</h1>
            {recipes.map((recipe) => {
              return (
                <div className="flex">
                  <p className="color-white">{recipe.title}</p>
                </div>
              );
            })}{" "}
          </div>
        );
      })}
    </div>
  );
}

export default DietPlan;
