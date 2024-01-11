import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Nav from "../../components/Nav";
import Header from "../../components/Header";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import SwiperVertical from "../../components/SwiperVertical";

function Chat() {
  const [chats, setChats] = useState([
    ["openai", "how can i help"],
    ["user", "hey"],
  ]);

  const navigate = useNavigate();
  const { id } = useParams();
  const recipes = JSON.parse(localStorage.getItem("recipes"));
  const selectedRecipe = recipes.find(
    (recipe) => recipe.id === parseInt(id, 10)
  );
  const handleBack = () => {
    navigate(`/cook/${id}`);
  };
  return (
    <div className="flex background">
      <div>
        <Nav />
      </div>

      <div className="landing">
        <Header />

        <div className="flex gap center instructions-wrapper">
          <button className="btn-menu" onClick={handleBack}>
            <FontAwesomeIcon icon={faArrowLeft} size="2xl" />
          </button>
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
        <div className="chat-wrapper flex column center">
          <div className="chat">
            <SwiperVertical chats={chats} />
          </div>
          <div className="flex gap">
            <input type="text" className="input" placeholder="Question?" />
            <button className="btn">
              Send <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
