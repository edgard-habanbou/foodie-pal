import React, { useState } from "react";
import Nav from "../../components/Nav";
import Card from "../../components/Card";
import Header from "../../components/Header";
import CategoriesNav from "../../components/CategoriesNav";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination } from "swiper/modules";
import "./index.css";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

function Landing() {
  const [recipes, setRecipes] = useState([
    {
      id: 1,
      title:
        "Tamil Nadu Style Poo Kosu Poriyal - Pepper Garlic Cauliflower Poriyal Recipe",
      calories: "417",
      time: "60m",
      imageUrl:
        "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/nithya.anantham/Indian_Masala_Pasta_Recipe_With_Achari_Chicken-6_1600.jpg",
      description: "This is a description",
    },
    {
      id: 2,
      title:
        "Tamil Nadu Style Poo Kosu Poriyal - Pepper Garlic Cauliflower Poriyal Recipe",
      calories: "417",
      time: "60m",
      imageUrl:
        "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/nithya.anantham/Indian_Masala_Pasta_Recipe_With_Achari_Chicken-6_1600.jpg",
      description: "This is a description",
    },
    {
      id: 3,
      title:
        "Tamil Nadu Style Poo Kosu Poriyal - Pepper Garlic Cauliflower Poriyal Recipe",
      calories: "417",
      time: "60m",
      imageUrl:
        "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/nithya.anantham/Indian_Masala_Pasta_Recipe_With_Achari_Chicken-6_1600.jpg",
      description: "This is a description",
    },
    {
      id: 4,
      title:
        "Tamil Nadu Style Poo Kosu Poriyal - Pepper Garlic Cauliflower Poriyal Recipe",
      calories: "417",
      time: "60m",
      imageUrl:
        "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/nithya.anantham/Indian_Masala_Pasta_Recipe_With_Achari_Chicken-6_1600.jpg",
      description: "This is a description",
    },
    {
      id: 5,
      title:
        "Tamil Nadu Style Poo Kosu Poriyal - Pepper Garlic Cauliflower Poriyal Recipe",
      calories: "417",
      time: "60m",
      imageUrl:
        "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/nithya.anantham/Indian_Masala_Pasta_Recipe_With_Achari_Chicken-6_1600.jpg",
      description: "This is a description",
    },
    {
      id: 6,
      title:
        "Tamil Nadu Style Poo Kosu Poriyal - Pepper Garlic Cauliflower Poriyal Recipe",
      calories: "417",
      time: "60m",
      imageUrl:
        "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/nithya.anantham/Indian_Masala_Pasta_Recipe_With_Achari_Chicken-6_1600.jpg",
      description: "This is a description",
    },
    {
      id: 7,
      title:
        "Tamil Nadu Style Poo Kosu Poriyal - Pepper Garlic Cauliflower Poriyal Recipe",
      calories: "417",
      time: "60m",
      imageUrl:
        "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/nithya.anantham/Indian_Masala_Pasta_Recipe_With_Achari_Chicken-6_1600.jpg",
      description: "This is a description",
    },
    {
      id: 8,
      title:
        "Tamil Nadu Style Poo Kosu Poriyal - Pepper Garlic Cauliflower Poriyal Recipe",
      calories: "417",
      time: "60m",
      imageUrl:
        "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/nithya.anantham/Indian_Masala_Pasta_Recipe_With_Achari_Chicken-6_1600.jpg",
      description: "This is a description",
    },
    {
      id: 9,
      title:
        "Tamil Nadu Style Poo Kosu Poriyal - Pepper Garlic Cauliflower Poriyal Recipe",
      calories: "417",
      time: "60m",
      imageUrl:
        "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/nithya.anantham/Indian_Masala_Pasta_Recipe_With_Achari_Chicken-6_1600.jpg",
      description: "This is a description",
    },
    {
      id: 10,
      title:
        "Tamil Nadu Style Poo Kosu Poriyal - Pepper Garlic Cauliflower Poriyal Recipe",
      calories: "417",
      time: "60m",
      imageUrl:
        "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/nithya.anantham/Indian_Masala_Pasta_Recipe_With_Achari_Chicken-6_1600.jpg",
      description: "This is a description",
    },
  ]);

  localStorage.setItem("recipes", JSON.stringify(recipes));
  // const getRecipes = () => {
  // };

  // getRecipes();

  return (
    <div className="flex">
      <div>
        <Nav />
      </div>
      <div className="landing ">
        <Header />
        <div className="flex center">
          <CategoriesNav />
        </div>

        <Swiper
          slidesPerView={2.2}
          grid={{
            rows: 3,
          }}
          pagination={{ dynamicBullets: true, clickable: true }}
          modules={[Grid, Pagination]}
        >
          {recipes.map((recipe, i) => (
            <SwiperSlide key={i}>
              <Card
                id={recipe.id}
                title={recipe.title}
                calories={recipe.calories}
                time={recipe.time}
                imageUrl={recipe.imageUrl}
                description={recipe.description}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Landing;
