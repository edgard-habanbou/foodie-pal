import React from "react";
import "./index.css";

function CategoriesNav() {
  const categories = [
    "All",
    "Indian",
    "Italian",
    "Chinese",
    "Mexican",
    "Thai",
    "Continental",
    "Desserts",
    "Beverages",
  ];
  const handleCategoryClick = (e) => {
    const selectedCategory = e.target.innerText;
    const catNavItems = document.querySelectorAll(".cat-nav-item");

    catNavItems.forEach((item) => {
      if (item.innerText === selectedCategory) {
        item.classList.add("cat-nav-item-selected");
      } else {
        item.classList.remove("cat-nav-item-selected");
      }
    });
  };
  return (
    <div className="cat-nav">
      <div className="flex wrap center gap">
        {categories?.map((category, i) => (
          <div key={i} className="cat-nav-item" onClick={handleCategoryClick}>
            {category}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoriesNav;
