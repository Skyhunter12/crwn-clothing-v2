import "./checkout-item.styles.scss"; // Assuming you have a CSS file for styles
import { useSelector, useDispatch } from "react-redux";
import {
  removeItemFromCart,
  addItemToCart,
  clearItemFromCart,
} from "../store/cart/cart.action";
import { selectCartItems } from "../store/cart/cart.selector";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const cartItems = useSelector(selectCartItems); // Get cart items from the Redux store
  const dispatch = useDispatch();

  const handleRemoveItem = () =>
    dispatch(removeItemFromCart(cartItems, cartItem));
  const handleAddItem = () => dispatch(addItemToCart(cartItems, cartItem));
  const handleClearItem = () =>
    dispatch(clearItemFromCart(cartItems, cartItem));

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={handleRemoveItem}>
        &#10094;
      </div>
      <span className="quantity">{quantity}</span>
      <div className="add-button" onClick={handleAddItem}>
        &#10095;
      </div>
      <div className="clear-button" onClick={handleClearItem}>
        &#10006;
      </div>
    </div>
  );
};

export default CheckoutItem;
