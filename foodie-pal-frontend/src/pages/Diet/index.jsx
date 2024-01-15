import React from "react";
import Nav from "../../components/Nav";
import Header from "../../components/Header";
import Questions from "./questions";
import "./index.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/navigation";

function Diet() {
  console.log(Questions);
  return (
    <div className="flex background">
      <div>
        <Nav />
      </div>
      <div className="landing">
        <Header />
        <div className="questions-section">
          <Swiper
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {Object.entries(Questions).map(
              ([sectionName, sectionQuestions], i) => (
                <SwiperSlide key={i}>
                  <h3>{sectionName}</h3>
                  {sectionQuestions.map((question, j) => (
                    <div key={j} className="margin flex  column gap">
                      <p>{question.Question}</p>
                      {question.type === "text" ? (
                        <input type="text" className="input" />
                      ) : null}
                    </div>
                  ))}
                </SwiperSlide>
              )
            )}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Diet;
