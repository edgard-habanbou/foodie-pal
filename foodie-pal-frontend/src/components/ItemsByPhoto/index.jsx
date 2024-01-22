import React from "react";

function ItemsByPhoto() {
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
