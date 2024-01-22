import React, { useState, useEffect } from "react";
import Nav from "../../components/Nav";
import Header from "../../components/Header";
import SwiperVertical from "../../components/SwiperVertical";
import Loading from "../../components/Loading";
import { userApi } from "../../network/axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import checkIfLoggedIn from "../../assets/checkIfLoggedIn";
import { useNavigate } from "react-router-dom";

import "./index.css";

const Items = () => {
  const navigate = useNavigate();
  const check = async () => {
    if (!(await checkIfLoggedIn())) {
      localStorage.clear();
      navigate("/");
    }
  };
  check();
  const [items, setItems] = useState([]);
  const [itemsInPic, setItemsInPic] = useState([]);
  const [Load, setLoading] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [itemName, setItemName] = useState("");

  const handleCamerabtn = () => {
    const fileInput = document.getElementById("fileInput");
    if (fileInput) {
      fileInput.click();
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = async () => {
        await userApi.uploadItemsImage({ image: reader.result });
        setUploadedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const addBtnHandler = async (item) => {
    setLoading(true);
    if (item === "") {
      setLoading(false);
      return;
    }
    try {
      const data = {
        subDocument: {
          items: {
            name: item,
          },
        },
      };
      await userApi.updateUser(data);
      handleGetItems();
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  const deleteBtnHandler = async (item) => {
    setLoading(true);
    try {
      const data = {
        subDocument: {
          items: {
            name: item,
          },
        },
      };
      await userApi.deleteFromUser(data);
      handleGetItems();
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  const handleGetItems = async () => {
    setLoading(true);
    try {
      const response = await userApi.getUser();
      setItems(response.items);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    handleGetItems();
  }, []);

  return (
    <div className="flex background">
      <div>
        <Nav />
      </div>
      <div className="landing">
        <Header />
        <div className="flex center column full-width  add-items">
          <div className="items-wraper">
            <div className="flex margin gap  center">
              <input
                type="text"
                className="input"
                placeholder="Item Name"
                value={itemName}
                onChange={(e) => {
                  setItemName(e.target.value);
                }}
              />
              <button
                className="btn"
                onClick={() => {
                  addBtnHandler(itemName);
                  setItemName("");
                }}
              >
                Add Item
              </button>
              <button className="btn" onClick={handleCamerabtn}>
                <FontAwesomeIcon icon={faCamera} />
              </button>
            </div>
            <div className="title">
              <h4 className="color-white">Add By Photo</h4>
              <hr />
            </div>
            <div className="flex center column">
              <div className="camera-items flex">
                <input
                  type="file"
                  name=""
                  hidden
                  id="fileInput"
                  onChange={handleFileChange}
                />
                <img
                  src={
                    uploadedImage
                      ? uploadedImage
                      : `${process.env.REACT_APP_BASE_URL}/default-item.png`
                  }
                  className="items-img"
                  alt="Uploaded"
                />
                <div className=" full-width">
                  <SwiperVertical
                    itemsInPic={itemsInPic}
                    slidesPerView={3}
                    addBtnHandler={addBtnHandler}
                  />
                </div>
              </div>
            </div>
            <div className="title">
              <h4 className="color-white">Your Items</h4>
              <hr />
            </div>
            <div className="title items-added flex column ">
              <SwiperVertical
                items={items}
                deleteBtnHandler={deleteBtnHandler}
                slidesPerView={4.5}
              />
            </div>
          </div>
        </div>
      </div>
      {Load && <Loading />}
    </div>
  );
};

export default Items;
