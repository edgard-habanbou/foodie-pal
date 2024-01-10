import React from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faFire } from "@fortawesome/free-solid-svg-icons";

function Card({ id, title, imageUrl, calories, time, description }) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/home/${id}`);
  };
  return (
    <div>
      <div
        className="card-info flex column center gap "
        onClick={handleCardClick}
      >
        <div>
          <img src={imageUrl} alt="recipeImage" className="recipe-image" />
        </div>
        <div className="card-title">
          <p>{title}</p>
        </div>
        <div className="flex space-between full-width">
          <div className="flex column center time">
            <FontAwesomeIcon icon={faFire} />
            <p>{calories}</p>
          </div>
          <div className="flex column center time">
            <FontAwesomeIcon icon={faClock} />
            <p>{time}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
