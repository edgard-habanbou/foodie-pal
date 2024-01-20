import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Nav from "../../components/Nav";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import SwiperVertical from "../../components/SwiperVertical";
import checkIfLoggedIn from "../../assets/checkIfLoggedIn";
import { userApi } from "../../network/axios";

function Chat() {
  const navigate = useNavigate();
  const [userMessage, setUserMessage] = useState([]);

  const check = async () => {
    if (!(await checkIfLoggedIn())) {
      localStorage.clear();
      navigate("/");
    }
  };
  check();

  const { id } = useParams();
  const recipes = JSON.parse(localStorage.getItem("recipes"));
  const selectedRecipe = recipes.find(
    (recipe) => recipe.id === parseInt(id, 10)
  );
  const user = JSON.parse(localStorage.getItem("user"));
  const [chats, setChats] = useState([
    { sender: "openai", chat: "How can i help?" },
    { sender: "openai", chat: "Please send the question in one message!" },
  ]);

  const handleSend = async () => {
    setChats([...chats, { sender: `${user.firstName}`, chat: userMessage }]);
    setUserMessage("");
    const openAiResponse = await userApi.sendQuestion({
      question: userMessage,
      recipe: selectedRecipe,
    });
    setChats([
      ...chats,
      { sender: `openai`, chat: openAiResponse.result[0].answer },
    ]);
  };

  const handleBack = () => {
    navigate(`/cook/${id}`);
  };
  return (
    <div className="flex background">
      <div>
        <Nav />
      </div>

      <div className="landing">
        <button className="btn-menu margin" onClick={handleBack}>
          <FontAwesomeIcon icon={faArrowLeft} size="2xl" />
        </button>
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
        <div className="chat-wrapper flex column center">
          <div className="chat">
            <SwiperVertical chats={chats} />
          </div>
          <div className="flex gap">
            <input
              type="text"
              className="input"
              placeholder="Question?"
              value={userMessage}
              onChange={(e) => {
                setUserMessage(e.target.value);
              }}
            />
            <button className="btn" onClick={handleSend}>
              Send <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
