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
  const [showCamera, setShowCamera] = useState(false);

  const handleCamerabtn = () => {
    setShowCamera(!showCamera);
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
            <input type="file" name="" id="" />
          </div>
        </div>
        <SwiperVertical instructions={items} />
      </div>
      {Load && <Loading />}
    </div>
  );
}

export default Items;
