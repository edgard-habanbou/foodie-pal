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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward, faForward } from "@fortawesome/free-solid-svg-icons";

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
                  <h3 className="margin">{sectionName}</h3>
                  {sectionQuestions.map((question, j) => (
                    <div key={j} className="margin flex padding column gap">
                      <p>{question.Question}</p>
                      {question.type === "text" ? (
                        <input
                          type="text"
                          className="input"
                          placeholder={question.placeholder}
                        />
                      ) : question.type === "select" ? (
                        <select className="input ">
                          <option value="" disabled selected>
                            Select Option
                          </option>
                          {question.options.map((option, o) => (
                            <option key={o} value={option.value}>
                              {option.Name}
                            </option>
                          ))}
                        </select>
                      ) : question.type === "number" ? (
                        <input
                          className="input"
                          type="number"
                          placeholder={question.placeholder}
                        />
                      ) : null}
                    </div>
                  ))}
                </SwiperSlide>
              )
            )}
          </Swiper>
          <div className="flex space-between">
            <button
              className="btn-menu"
              onClick={() => {
                document
                  .getElementsByClassName("swiper-button-prev")[0]
                  .click();
              }}
            >
              <FontAwesomeIcon icon={faBackward} size="2xl" color="#fe8a01" />
            </button>
            <button
              className="btn-menu"
              onClick={() => {
                document
                  .getElementsByClassName("swiper-button-next")[0]
                  .click();
              }}
            >
              <FontAwesomeIcon icon={faForward} size="2xl" color="#fe8a01" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Diet;
