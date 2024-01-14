import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./index.css";
import "swiper/css";
import "swiper/css/pagination";

function SwiperVertical({
  instructions,
  items,
  itemsInPic,
  chats,
  slidesPerView = 4.5,
  addBtnHandler = () => {},
}) {
  return (
    <Swiper
      direction={"vertical"}
      slidesPerView={slidesPerView}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="instructions"
    >
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
            <div className="instruction">{item.name}</div>
          </SwiperSlide>
        );
      })}
      {itemsInPic?.map((itemInPic, i) => {
        return (
          <SwiperSlide key={i}>
            <div className="items-in-pic flex space-between">
              <div>{itemInPic}</div>
              <div>
                <button
                  className="btn-add"
                  onClick={() => addBtnHandler(itemInPic)}
                >
                  <FontAwesomeIcon icon={faPlus} size="2xl" />
                </button>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
      {chats?.map(([sender, chat], i) => (
        <SwiperSlide key={i}>
          <div className={sender !== "openai" && "flex right"}>
            <div className="message">{chat}</div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default SwiperVertical;
