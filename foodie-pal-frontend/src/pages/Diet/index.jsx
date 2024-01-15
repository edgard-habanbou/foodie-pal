import React, { useState } from "react";
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
  const [formData, setFormData] = useState({});

  const handleInputChange = (sectionName, question, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [sectionName]: {
        ...(prevData[sectionName] || {}),
        [question.Question]: value,
      },
    }));
  };

  const sections = Object.entries(Questions);

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
            {sections.map(([sectionName, sectionQuestions], i) => (
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
                        onChange={(e) =>
                          handleInputChange(
                            sectionName,
                            question,
                            e.target.value
                          )
                        }
                      />
                    ) : question.type === "select" ? (
                      <select
                        className="input"
                        onChange={(e) =>
                          handleInputChange(
                            sectionName,
                            question,
                            e.target.value
                          )
                        }
                      >
                        <option value="" defaultValue>
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
                        onChange={(e) =>
                          handleInputChange(
                            sectionName,
                            question,
                            e.target.value
                          )
                        }
                      />
                    ) : null}
                  </div>
                ))}
                {i === sections.length - 1 && (
                  <div className="flex center ">
                    <button
                      className="btn"
                      onClick={() =>
                        console.log(JSON.stringify(formData, null, 2))
                      }
                    >
                      Submit
                    </button>
                  </div>
                )}
              </SwiperSlide>
            ))}
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
