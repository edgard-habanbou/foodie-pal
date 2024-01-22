import React from "react";
import { userApi } from "../../network/axios";

function YourItems({ setLoading, handleGetItems }) {
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
