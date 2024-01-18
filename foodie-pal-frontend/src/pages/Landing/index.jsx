import React, { useEffect, useState } from "react";
import Nav from "../../components/Nav";
import Header from "../../components/Header";
import Loading from "../../components/Loading";
import CategoriesNav from "../../components/CategoriesNav";
import "./index.css";

import SwiperCarousel from "../../components/SwiperCarousel";
import checkIfLoggedIn from "../../assets/checkIfLoggedIn";
import { useNavigate } from "react-router-dom";
import { userApi } from "../../network/axios";

function Landing() {
  const navigate = useNavigate();
  const check = async () => {
    if (!(await checkIfLoggedIn())) {
      localStorage.clear();
      navigate("/");
    }
  };
  check();
  const [recipes, setRecipes] = useState(null);
  const [Load, setLoading] = useState(false);

  useEffect(() => {
    const getRecipes = async () => {
      setLoading(true);
      const recipes = await userApi.getRecipes();
      localStorage.setItem("recipes", JSON.stringify(recipes?.recipes));
      setRecipes(recipes?.recipes);
      setLoading(false);
    };
    if (localStorage.getItem("token") !== null) {
      console.log(localStorage.getItem("token"));
      getRecipes();
    }
  }, []);

  return (
    <div className="flex background">
      <div>
        <Nav />
      </div>
      <div className="landing ">
        <Header />
        <div className="flex center">
          <CategoriesNav />
        </div>

        {recipes && <SwiperCarousel recipes={recipes} row={3} />}
      </div>
      {Load && <Loading />}
    </div>
  );
}

export default Landing;
