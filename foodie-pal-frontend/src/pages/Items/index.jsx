import React, { useState } from "react";
import Nav from "../../components/Nav";
import Header from "../../components/Header";
import SwiperVertical from "../../components/SwiperVertical";
import Loading from "../../components/Loading";
function Items() {
  const [items, setItems] = useState([]);
  const [Load, setLoading] = useState(false);

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
