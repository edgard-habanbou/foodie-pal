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
        <div className="flex gap column center">
          <div className="flex gap center">
            <img
              className="recipe-image-large"
              src={`${process.env.REACT_APP_BASE_URL}/images/${user.imageUrl}`}
              alt="profile"
            />
          </div>
          <div className="flex gap column">
            <h3 className="color-white">
              {user.firstName + " " + user.lastName}
            </h3>
            <div></div>
            <button className="btn">Change Name</button>
            <button className="btn">Change Profile Photo</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
