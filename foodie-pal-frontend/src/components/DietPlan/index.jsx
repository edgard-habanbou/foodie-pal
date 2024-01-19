import React from "react";
import SwiperVertical from "../SwiperVertical";
import "./index.css";

function DietPlan() {
  const user = JSON.parse(localStorage.getItem("user"));
  const dietPlan = user.DietPlan;
  const mappedDietPlan = Object.entries(dietPlan);
  return (
    <div className="diet-plan">
      <div className="flex center column">
        <h3 className="color-white margin ">Diet Plan</h3>
        <p className="color-white">Choose one of each</p>
      </div>
      <SwiperVertical mappedDietPlan={mappedDietPlan} slidesPerView={2.5} />
    </div>
  );
}

export default DietPlan;
