import React from "react";
import Nav from "../../components/Nav";
import Header from "../../components/Header";
import Popup from "../../components/Popup";
import DietairyPreferences from "../../components/DietairyPreferences";
import EditProfile from "../../components/EditProfile";
import "./index.css";

function Profile() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [showModal, setShowModal] = React.useState(false);
  const [showEditProfile, setShowEditProfile] = React.useState(false);
  const handleShowModal = () => {
    setShowModal(!showModal);
  };
  const handleshowEditProfile = () => {
    setShowEditProfile(!showEditProfile);
  };
  const handleDelete = (text) => {
    Popup({
      title: `Are you sure you want to delete all your ${text}?`,
      text: `This has no undo!`,
      icon: "error",
      confirmButtonText: "Confirm",
      confirmButtonColor: "#FE8A01",
    });
  };
  return (
    <div className="flex background">
      <div>
        <Nav />
      </div>
      <div className="landing">
        <Header />
        <div className="flex gap  center">
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
          </div>
        </div>
        <div className="credentials padding flex gap column">
          <div>
            <h3 className="color-white">Profile</h3>
            <hr />
          </div>

          <div>
            <button className="btn" onClick={setShowEditProfile}>
              Edit Profile
            </button>
          </div>
        </div>
        <div className="flex gap column credentials padding">
          <div>
            <h3 className="color-white">Dietairy Preferences</h3>
            <hr />
          </div>
          <div className="flex gap">
            <button className="btn" onClick={handleShowModal}>
              Edit Preferences
            </button>
          </div>
        </div>
        <div className="flex gap column credentials padding">
          <div>
            <h3 className="color-white">Danger Zone</h3>
            <hr className="danger" />
          </div>
          <div>
            <button className="btn danger" onClick={() => handleDelete("data")}>
              Delete All Data
            </button>
          </div>
        </div>
      </div>
      {showModal && (
        <DietairyPreferences
          toggleModal={handleShowModal}
          handleDelete={handleDelete}
        />
      )}
      {showEditProfile && (
        <EditProfile toggleEditProfile={handleshowEditProfile} />
      )}
    </div>
  );
}

export default Profile;
