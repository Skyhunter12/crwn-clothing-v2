import ProductCard from "../product-card/product-card.component"; // Import the ProductCard component
import "./category.styles.scss"; // Import the styles for the category component
import { useParams } from "react-router-dom"; // Import useParams to access URL parameters
import {
  selectCategoriesMap,
  selectCategoriesIsLoading,
} from "../store/category/category.selector";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import Spinner from "../../utils/spinner/spinner.component";

const Category = () => {
  const { title } = useParams(); // Extract the title from the URL parameters
  const categoriesMap = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState(categoriesMap[title]);
  const isLoading = useSelector(selectCategoriesIsLoading);
  console.log(categoriesMap, "istriggered");
  useEffect(() => {
    console.log("effect fired calling setProducts");
    setProducts(categoriesMap[title]);
  }, [title, categoriesMap]);

  return (
    <div className="category">
      <h1 className="category-title">{title.toUpperCase()}</h1>
      <div className="products-container">
        {isLoading ? (
          <Spinner />
        ) : (
          products &&
          products?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </div>
    </div>
  );
};

export default Category;
