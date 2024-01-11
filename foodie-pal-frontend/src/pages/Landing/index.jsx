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
      title: "Potato and Egg Breakfast Skillet",
      description:
        "A hearty breakfast skillet with potatoes, eggs, and a touch of cheese.",
      calories: 350,
      time: "20m",
      instructions: [
        "Dice 2 cups of potatoes into small cubes.",
        "Sauté potatoes in a skillet with olive oil until golden brown.",
        "In the same skillet, crack 4 eggs and scramble until fully cooked.",
        "Sprinkle 1/2 cup of shredded cheese over the eggs and potatoes.",
        "Let the cheese melt, then serve hot.",
        "Let the cheese melt, then serve hot.",
      ],
      imageUrl:
        "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/nithya.anantham/Indian_Masala_Pasta_Recipe_With_Achari_Chicken-6_1600.jpg",
    },
    {
      id: 2,
      title: "Tomato and Cheese Stuffed Potatoes",
      description: "Baked potatoes filled with a cheesy tomato mixture.",
      calories: 280,
      time: "45m",
      instructions: [
        "Bake 4 medium-sized potatoes until tender.",
        "In a bowl, mix 1 cup of diced tomatoes with 1/2 cup of shredded cheese.",
        "Cut a slit in each baked potato and stuff with the tomato and cheese mixture.",
      ],
      imageUrl:
        "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/nithya.anantham/Indian_Masala_Pasta_Recipe_With_Achari_Chicken-6_1600.jpg",
    },
    {
      id: 3,
      title: "Ham and Potato Casserole",
      description: "A classic ham and potato casserole for a comforting meal.",
      calories: 420,
      time: "1hr",
      instructions: [
        "Preheat your oven to 375°F (190°C).",
        "Layer 4 cups of sliced potatoes and 1 cup of diced ham in a baking dish.",
        "In a saucepan, mix 1 cup of cheese sauce and pour it over the potato and ham layers.",
        "Bake until bubbly and golden brown.",
      ],
      imageUrl:
        "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/nithya.anantham/Indian_Masala_Pasta_Recipe_With_Achari_Chicken-6_1600.jpg",
    },
    {
      id: 4,
      title: "Cheese and Tomato Omelette",
      description: "A delicious omelette with cheese and tomatoes.",
      calories: 320,
      time: "15m",
      instructions: [
        "Whisk 3 eggs in a bowl.",
        "Pour the eggs into a hot skillet.",
        "Add 1/2 cup of diced tomatoes and 1/4 cup of shredded cheese to one half of the omelette.",
        "Fold the omelette and cook until eggs are set.",
      ],
      imageUrl:
        "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/nithya.anantham/Indian_Masala_Pasta_Recipe_With_Achari_Chicken-6_1600.jpg",
    },
    {
      id: 5,
      title: "Ham and Cheese Potato Bake",
      description:
        "Baked potatoes with layers of ham and cheese for a satisfying dish.",
      calories: 380,
      time: "50m",
      instructions: [
        "Preheat your oven to 375°F (190°C).",
        "Slice 4 potatoes and layer them with 1 cup of diced ham and 1 cup of shredded cheese in a baking dish.",
        "Bake until potatoes are tender and cheese is melted.",
      ],
      imageUrl:
        "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/nithya.anantham/Indian_Masala_Pasta_Recipe_With_Achari_Chicken-6_1600.jpg",
    },
    {
      id: 6,
      title: "Tomato and Potato Salad",
      description: "A refreshing salad with tomatoes and potatoes.",
      calories: 150,
      time: "30m",
      instructions: [
        "Boil 2 cups of potatoes until tender.",
        "Mix the potatoes with 1 cup of diced tomatoes and your favorite dressing.",
        "Chill in the refrigerator before serving.",
      ],
      imageUrl:
        "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/nithya.anantham/Indian_Masala_Pasta_Recipe_With_Achari_Chicken-6_1600.jpg",
    },
    {
      id: 7,
      title: "Cheese and Potato Croquettes",
      description: "Crispy croquettes made with a cheesy potato filling.",
      calories: 220,
      time: "40m",
      instructions: [
        "Mash 2 cups of potatoes and mix with 1 cup of grated cheese.",
        "Shape the mixture into croquettes.",
        "Fry the croquettes in oil until golden brown.",
      ],
      imageUrl:
        "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/nithya.anantham/Indian_Masala_Pasta_Recipe_With_Achari_Chicken-6_1600.jpg",
    },
    {
      id: 8,
      title: "Ham and Potato Soup",
      description: "A hearty soup with ham and potatoes for a comforting meal.",
      calories: 300,
      time: "35m",
      instructions: [
        "In a pot, sauté 1 cup of diced ham and 2 cups of sliced potatoes until lightly browned.",
        "Add 4 cups of broth and simmer until potatoes are tender.",
      ],
      imageUrl:
        "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/nithya.anantham/Indian_Masala_Pasta_Recipe_With_Achari_Chicken-6_1600.jpg",
    },
    {
      id: 9,
      title: "Egg and Tomato Breakfast Wrap",
      description:
        "A quick breakfast wrap with scrambled eggs and fresh tomatoes.",
      calories: 200,
      time: "10m",
      instructions: [
        "Scramble 3 eggs and spoon onto a tortilla.",
        "Add sliced tomatoes and roll into a wrap.",
      ],
      imageUrl:
        "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/nithya.anantham/Indian_Masala_Pasta_Recipe_With_Achari_Chicken-6_1600.jpg",
    },
    {
      id: 10,
      title: "Cheese and Potato Fritters",
      description: "Delicious fritters made with a cheesy potato mixture.",
      calories: 250,
      time: "25m",
      instructions: [
        "Grate 2 cups of potatoes and mix with 1 cup of cheese.",
        "Form the mixture into fritters and fry in oil until golden brown.",
      ],
      imageUrl:
        "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/nithya.anantham/Indian_Masala_Pasta_Recipe_With_Achari_Chicken-6_1600.jpg",
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
