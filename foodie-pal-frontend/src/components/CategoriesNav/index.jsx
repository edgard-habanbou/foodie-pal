import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking-inline.css";
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
      <div className="flex categories center gap">
        <Flicking renderOnlyVisible={true} align="prev">
          {categories?.map((category, i) => (
            <div key={i} className="cat-nav-item" onClick={handleCategoryClick}>
              {category}
            </div>
          ))}
        </Flicking>
      </div>
    </div>
  );
}

export default CategoriesNav;
