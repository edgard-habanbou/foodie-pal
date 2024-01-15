import React from "react";
import Nav from "../../components/Nav";
import Header from "../../components/Header";
function Profile() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="flex background">
      <div>
        <Nav />
      </div>
      <div className="landing">
        <Header />
        <div className="flex gap center">
          <div className="flex gap center">
            <img
              className="recipe-image-large"
              src={`${process.env.REACT_APP_BASE_URL}/images/${user.imageUrl}`}
              alt="profile"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
