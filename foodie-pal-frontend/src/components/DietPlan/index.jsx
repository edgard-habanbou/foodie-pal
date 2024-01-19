import React from "react";
import SwiperCarousel from "../SwiperCarousel";
import SwiperVertical from "../SwiperVertical";
import "./index.css";

function DietPlan() {
  const user = JSON.parse(localStorage.getItem("user"));
  const dietPlan = user.DietPlan;
  const mappedDietPlan = Object.entries(dietPlan);
  return (
    <div className="diet-plan">
      <SwiperVertical
        instructions={mappedDietPlan.map(([meal, recipes], index) => {
          return (
            <div className="flex column gap" key={index}>
              <h3 className="color-white">{meal}</h3>
              <div className=" flex swiper-div center">
                <SwiperCarousel recipes={recipes} row={1} />
              </div>
            </div>
          );
        })}
        slidesPerView={2}
      />
    </div>
  );
}

export default DietPlan;
