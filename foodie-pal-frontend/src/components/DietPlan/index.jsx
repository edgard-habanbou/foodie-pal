import React from "react";
import SwiperVertical from "../SwiperVertical";
import "./index.css";

function DietPlan() {
  const user = JSON.parse(localStorage.getItem("user"));
  const dietPlan = user.DietPlan;
  const mappedDietPlan = Object.entries(dietPlan);
  return (
    <div className="diet-plan">
      <SwiperVertical mappedDietPlan={mappedDietPlan} slidesPerView={2.5} />
    </div>
  );
}

export default DietPlan;
