import React from "react";
import { useParams } from "react-router-dom";

function Recipe() {
  const { id } = useParams();
  return (
    <div>
      <h1>ID: {id}</h1>
    </div>
  );
}

export default Recipe;
