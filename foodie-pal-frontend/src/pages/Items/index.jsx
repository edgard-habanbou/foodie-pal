import React, { useState } from "react";
import Nav from "../../components/Nav";
import Header from "../../components/Header";
import SwiperVertical from "../../components/SwiperVertical";
function Items() {
  const [items, setItems] = useState([]);
  return (
    <div className="flex background">
      <div>
        <Nav />
      </div>
      <div className="landing">
        <Header />
        <SwiperVertical instructions={items} />
      </div>
    </div>
  );
}

export default Items;
