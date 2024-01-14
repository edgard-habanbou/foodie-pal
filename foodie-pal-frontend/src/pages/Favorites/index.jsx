import React from "react";
import Nav from "../../components/Nav";
import Header from "../../components/Header";
function Favorites() {
  return (
    <div className="flex background">
      <div>
        <Nav />
      </div>
      <div className="landing">
        <Header />
      </div>
    </div>
  );
}

export default Favorites;
