import React, { useEffect, useState } from "react";
import Nav from "../../components/Nav";
import Header from "../../components/Header";
import SwiperCarousel from "../../components/SwiperCarousel";
import { userApi } from "../../network/axios";
import Loading from "../../components/Loading";
import checkIfLoggedIn from "../../assets/checkIfLoggedIn";
import { useNavigate } from "react-router-dom";
function Favorites() {
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);
  const [Load, setLoading] = useState(false);
  const navigate = useNavigate();

  const getFavoriteRecipes = async () => {
    setLoading(true);
    try {
      const response = await userApi.getUser();
      setFavoriteRecipes(response.FavoriteRecipes);
      localStorage.setItem("recipes", JSON.stringify(response.FavoriteRecipes));
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    getFavoriteRecipes();
  }, []);
  const check = async () => {
    if (!(await checkIfLoggedIn())) {
      localStorage.clear();
      navigate("/");
    }
  };
  check();
  return (
    <div className="flex background">
      <div>
        <Nav />
      </div>
      <div className="landing ">
        <Header />
        <div className="margin padding">
          <h3 className="color-white ">Favorites</h3>
          <hr />
        </div>
        <SwiperCarousel recipes={favoriteRecipes} row={3} />
      </div>
      {Load && <Loading />}
    </div>
  );
}

export default Favorites;
