import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./index.css";
import "swiper/css";
import "swiper/css/pagination";
import SwiperCarousel from "../SwiperCarousel";

function SwiperVertical({
  instructions,
  mappedDietPlan,
  items,
  itemsInPic,
  chats,
  slidesPerView = 4.5,
  addBtnHandler = () => {},
  deleteBtnHandler = () => {},
}) {
  return (
    <Swiper
      direction={"vertical"}
      slidesPerView={slidesPerView}
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
      modules={[Pagination]}
      className={mappedDietPlan ? "mapped-diet-plan" : "instructions"}
    >
      {mappedDietPlan?.map(([meal, recipes], index) => {
        if (meal !== "createdAt" && meal !== "updatedAt") {
          return (
            <SwiperSlide
              key={index}
              onClick={() => {
                localStorage.setItem("recipes", JSON.stringify(recipes));
              }}
            >
              <div className="flex column margin">
                <div className="padding margin">
                  <h3 className="color-white">
                    {meal.charAt(0).toUpperCase() + meal.slice(1)}
                  </h3>
                  <hr />
                </div>
                <div className=" flex swiper-div center">
                  <SwiperCarousel
                    slidesPerView={1.8}
                    recipes={recipes}
                    row={1}
                  />
                </div>
              </div>
            </SwiperSlide>
          );
        } else {
          return null;
        }
      })}
      {instructions?.map((instruction, i) => {
        return (
          <SwiperSlide key={i}>
            <div className="instruction">{instruction}</div>
          </SwiperSlide>
        );
      })}
      {items?.map((item, i) => {
        return (
          <SwiperSlide key={i}>
            <div className="instruction flex space-between">
              {item.name}
              <button
                className="btn-delete"
                onClick={() => deleteBtnHandler(item.name)}
              >
                <FontAwesomeIcon icon={faTrash} size="xl" />
              </button>
            </div>
          </SwiperSlide>
        );
      })}
      {itemsInPic?.items?.map((itemInPic, i) => {
        return (
          <SwiperSlide key={i}>
            <div className="items-in-pic flex space-between">
              <div>{itemInPic.name}</div>
              <div>
                <button
                  className="btn-add"
                  onClick={() => addBtnHandler(itemInPic.name)}
                >
                  <FontAwesomeIcon icon={faPlus} size="2xl" />
                </button>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
      {chats?.map(({ sender, chat }, i) => (
        <SwiperSlide key={i}>
          <div className={sender !== "openai" ? "flex right" : ""}>
            <div className={sender !== "openai" ? "message-user" : "message"}>
              {chat && chat}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default SwiperVertical;
