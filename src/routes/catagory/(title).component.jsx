import { use, useContext } from "react";
import { CategoriesContext } from "../../context/catagories.context"; // Import the CategoriesContext
import ProductCard from "../product-card/product-card.component"; // Import the ProductCard component
import "./category.styles.scss"; // Import the styles for the category component
import { useParams } from "react-router-dom"; // Import useParams to access URL parameters
const Category = () => {
  const { title } = useParams(); // Extract the title from the URL parameters
  const { categoriesMap } = useContext(CategoriesContext);
  const products = categoriesMap[title];

  return (
    <div className="category">
      <h1 className="category-title">{title.toUpperCase()}</h1>
      <div className="products-container">
        {products &&
          products?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default Category;
