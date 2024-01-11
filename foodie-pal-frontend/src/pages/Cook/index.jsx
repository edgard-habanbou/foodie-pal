import React from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import Nav from "../../components/Nav";
import { useNavigate } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";

import "./index.css";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

function Cook() {
  const { id } = useParams();
  const recipes = JSON.parse(localStorage.getItem("recipes"));
  const navigate = useNavigate();
  const selectedRecipe = recipes.find(
    (recipe) => recipe.id === parseInt(id, 10)
  );
  const handleChatbtn = () => {
    navigate(`/chat/${id}`);
  };
  const instructions = selectedRecipe.instructions;
  return (
    <div className="flex background">
      <div>
        <Nav />
      </div>
      <div className="landing ">
        <Header />
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
        <Swiper
          direction={"vertical"}
          slidesPerView={4.5}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="instructions"
        >
          {instructions.map((instruction, i) => {
            return (
              <SwiperSlide key={i}>
                <div className="instruction">
                  {i + 1}
                  {") "}
                  {instruction}
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="flex center">
          <button onClick={handleChatbtn} className="btn">
            Have a question?
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cook;
