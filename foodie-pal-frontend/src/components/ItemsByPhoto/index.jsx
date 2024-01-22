import React, { useState } from "react";
import { userApi } from "../../network/axios";
import SwiperVertical from "../SwiperVertical";

function ItemsByPhoto({ addBtnHandler }) {
  const [itemsInPic, setItemsInPic] = useState([]);
  const [uploadedImage, setUploadedImage] = useState(null);
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = async () => {
        const result = await userApi.uploadItemsImage({ image: reader.result });
        setItemsInPic(result);
        setUploadedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <>
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
    </>
  );
}

export default ItemsByPhoto;
