import React, { useState } from "react";
import Nav from "../../components/Nav";
import Header from "../../components/Header";
import CategoriesNav from "../../components/CategoriesNav";
import "./index.css";

import SwiperCarousel from "../../components/SwiperCarousel";

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

        <SwiperCarousel recipes={recipes} row={3} />
      </div>
    </div>
  );
}

export default Landing;
