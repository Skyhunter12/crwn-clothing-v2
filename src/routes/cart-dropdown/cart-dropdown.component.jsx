import Button, {
  BUTTON_TYPE_CLASSES,
} from "../../utils/button/button.component";
import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from "./cart-dropdown.styles.jsx"; // Assuming you have a CSS file for styles
import { useContext } from "react";
import { CartContext } from "../../context/cart.context"; // Import the CartContext
import CartItem from "../cart-item/cart-item.component";
import { useNavigate } from "react-router-dom";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems?.length ? (
          cartItems?.map((item) => (
            <CartItem className="cart-item" key={item.id} cartItem={item} />
          ))
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button
        onClick={goToCheckoutHandler}
        buttonType={BUTTON_TYPE_CLASSES.base}
      >
        GO TO CHECKOUT
      </Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
