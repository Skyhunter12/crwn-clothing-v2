import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import "./checkout-item.styles.scss"; // Assuming you have a CSS file for styles

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { removeItemFromCart, clearItemFromCart, addItemToCart } =
    useContext(CartContext);

  const handleRemoveItem = () => removeItemFromCart(cartItem);
  const handleAddItem = () => addItemToCart(cartItem);
  const handleClearItem = () => clearItemFromCart(cartItem);

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
