import React, { useEffect, useState } from "react";
import Nav from "../../components/Nav";
import Header from "../../components/Header";
import SwiperVertical from "../../components/SwiperVertical";
import Loading from "../../components/Loading";
import { userApi } from "../../network/axios";
function Items() {
  const [items, setItems] = useState([]);
  const [Load, setLoading] = useState(false);

  const handleGetItems = async () => {
    setLoading(true);
    try {
      const response = await userApi.getUser();
      console.log(response);
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
        <SwiperVertical instructions={items} />
      </div>
      {Load && <Loading />}
    </div>
  );
}

export default Items;
