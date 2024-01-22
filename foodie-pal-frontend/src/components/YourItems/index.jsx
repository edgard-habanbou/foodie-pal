import React from "react";

function YourItems() {
  return (
    <>
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
    </>
  );
}

export default YourItems;
