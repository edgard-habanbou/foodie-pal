import React, { useEffect, useState } from "react";
import Nav from "../../components/Nav";
import Header from "../../components/Header";
import SwiperVertical from "../../components/SwiperVertical";
import Loading from "../../components/Loading";
import { userApi } from "../../network/axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import "./index.css";

function Items() {
  const [items, setItems] = useState([]);
  const [Load, setLoading] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleCamerabtn = () => {
    // Trigger a click on the file input
    const fileInput = document.getElementById("fileInput");
    if (fileInput) {
      fileInput.click();
    }
  };

  const handleFileChange = (event) => {
    // Handle the file change event and set the uploaded image
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGetItems = async () => {
    setLoading(true);
    try {
      const response = await userApi.getUser();
      setItems(response.items);
    } catch (error) {
      setLoading(false);
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
        <div className="flex margin gap center">
          <input type="text" className="input" placeholder="Item Name" />
          <button className="btn">Add Item</button>
          <button className="btn" onClick={handleCamerabtn}>
            <FontAwesomeIcon icon={faCamera} />
          </button>
        </div>
        <div className=" flex center">
          <div className="camera-items">
            <input
              type="file"
              name=""
              hidden
              id="fileInput"
              onChange={handleFileChange}
            />
            {uploadedImage && (
              <img src={uploadedImage} className="items-img" alt="Uploaded" />
            )}
          </div>
        </div>
        <SwiperVertical instructions={items} />
      </div>
      {Load && <Loading />}
    </div>
  );
}

export default Items;
