import React, { useEffect, useState } from "react";
import Nav from "../../components/Nav";
import Header from "../../components/Header";
import Questions from "./questions";
import "./index.css";
import { useNavigate } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward, faForward } from "@fortawesome/free-solid-svg-icons";
import checkIfLoggedIn from "../../assets/checkIfLoggedIn";
import { userApi } from "../../network/axios";
import Loading from "../../components/Loading";

function Diet() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [Load, setLoad] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const check = async () => {
    if (!(await checkIfLoggedIn())) {
      localStorage.clear();
      navigate("/");
    }
  };
  check();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.DietQuestions) {
      setShowMessage(true);
    }
  }, []);

  const handleInputChange = (sectionName, question, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [sectionName]: {
        ...(prevData[sectionName] || {}),
        [question.Question]: value,
      },
    }));
  };

  const handleSubmit = async () => {
    setLoad(true);
    let addData = true;
    const form = document.getElementById("questionsSection");
    const inputs = form.getElementsByClassName("input");
    const spans = form.getElementsByClassName("span-error");
    for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].value.trim() === "") {
        inputs[i].classList.add("input-error");
        spans[i].classList.remove("hidden");
        addData = false;
      } else {
        inputs[i].classList.remove("input-error");
        spans[i].classList.add("hidden");
      }
    }
    if (addData) {
      const data = {
        subDocument: {
          DietQuestions: formData,
        },
      };
      await userApi.updateUser(data);
      userApi.makeDietPlan();
      setLoad(false);
      setShowMessage(true);
    }
  };

  const sections = Object.entries(Questions);

  return (
    <div className="flex background">
      <div>
        <Nav />
      </div>
      <div className="landing">
        <Header />
        {!showMessage && (
          <div className="questions-section" id="questionsSection">
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
                  <h3 className="margin">
                    {sectionName} <hr />
                  </h3>
                  <div className="flex gap center column margin padding ">
                    {sectionQuestions.map((question, j) => (
                      <div key={j} className="flex column full-width">
                        <p>{question.Question}</p>
                        <div className="flex center">
                          {question.type === "text" ? (
                            <div className="full-width">
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
                              <span className="color-red span-error hidden">
                                This field cannot be empty!
                              </span>
                            </div>
                          ) : question.type === "select" ? (
                            <div className="full-width  column">
                              <div className="flex center">
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
                              </div>
                              <span className="color-red span-error hidden">
                                This field cannot be empty!
                              </span>
                            </div>
                          ) : question.type === "number" ? (
                            <div className="full-width  column">
                              <div className="flex center">
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
                              </div>
                              <span className="color-red span-error hidden">
                                This field cannot be empty!
                              </span>
                            </div>
                          ) : null}
                        </div>
                      </div>
                    ))}
                    {i === sections.length - 1 && (
                      <div className="flex center ">
                        <button className="btn" onClick={handleSubmit}>
                          Submit
                        </button>
                      </div>
                    )}
                  </div>
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
        )}
        {showMessage && (
          <div className="flex center message-diet column color-white">
            <h3 className="margin ">
              Thank you for providing all this information.
            </h3>
            <p className="text-center margin padding">
              We will carefully review your responses and work on creating a
              personalized nutrition plan for you. We appreciate your patience,
              and we'll get back to you soon with the details. If you have any
              additional questions or concerns in the meantime, feel free to
              reach out. Thank you!
            </p>
          </div>
        )}
      </div>
      {Load && <Loading />}
    </div>
  );
}

export default Diet;
