import Button from "../../utils/button/button.component.jsx";
import "./product-card.styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../store/cart/cart.action";
import { selectCartItems } from "../store/cart/cart.selector.js"; // Import the selector for cart items
const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <Button buttonType="inverted" onClick={addProductToCart}>
        Add to Cart
      </Button>
    </div>
  );
};

export default ProductCard;
