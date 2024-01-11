import React from "react";
import { useParams } from "react-router-dom";
import Nav from "../../components/Nav";
import Header from "../../components/Header";

function Chat() {
  const { id } = useParams();
  return (
    <div className="flex">
      <div>
        <Nav />
      </div>
      <div className="landing">
        <Header />
      </div>
    </div>
  );
}

export default Chat;
