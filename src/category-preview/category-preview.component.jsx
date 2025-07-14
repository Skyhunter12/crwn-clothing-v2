import ProductCard from "../routes/product-card/product-card.component";
import "./category-preview.styles.scss"; // Import the styles for the category preview component
import { useNavigate } from "react-router-dom"; // Import useNavigate hook from react-router-dom

const CategoryPreview = ({ title, products }) => {
  const navigate = useNavigate();

  const handleRedirect = (title) => {
    navigate(`/shop/${title}`);
  };

  return (
    <div className="category-preview">
      <h2 className="category-title" onClick={() => handleRedirect(title)}>
        {title.toUpperCase()}
      </h2>
      <div className="preview">
        {products
          ?.filter((_, index) => index < 4)
          ?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
