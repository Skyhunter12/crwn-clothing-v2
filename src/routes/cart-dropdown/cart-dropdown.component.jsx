import Button from "../../utils/button/button.component";
import "./cart-dropdown.styles.scss"; // Assuming you have a CSS file for styles

const CartDropdown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {/* Cart items will be rendered here */}
      </div>
      <Button buttonType="inverted">
        GO TO CHECKOUT
      </Button>
    </div>
  );
}

export default CartDropdown;