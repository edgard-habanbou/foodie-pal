import React, { useState, useEffect } from "react";
import Nav from "../../components/Nav";
import Header from "../../components/Header";
import Loading from "../../components/Loading";
import { userApi } from "../../network/axios";
import checkIfLoggedIn from "../../assets/checkIfLoggedIn";
import { useNavigate } from "react-router-dom";

import "./index.css";
import ItemsByPhoto from "../../components/ItemsByPhoto";
import YourItems from "../../components/YourItems";
import AddItem from "../../components/AddItem";

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
  const [Load, setLoading] = useState(false);

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
            <AddItem />
            <ItemsByPhoto addBtnHandler={addBtnHandler} />
            <YourItems
              setLoading={setLoading}
              handleGetItems={handleGetItems}
              items={items}
            />
          </div>
        </div>
      </div>
      {Load && <Loading />}
    </div>
  );
};

export default Items;
