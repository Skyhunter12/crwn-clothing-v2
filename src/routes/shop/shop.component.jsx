import { Fragment, useContext } from "react";
import { CategoriesContext } from "../../context/catagories.context"; // Import the ProductContext
import CategoryPreview from "../../category-preview/category-preview.component"; // Import the CategoryPreview component
import "./shop.styles.scss"; // Import the styles for the shop component

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <div className="">
      <h1 className="shop-title">Shop</h1>
      {/* Render each category using the Category component */}
      {Object.keys(categoriesMap)?.map((title) => (
        <Fragment key={title}>
          <CategoryPreview title={title} products={categoriesMap[title]} />
        </Fragment>
      ))}
    </div>
  );
};

export default Shop;
