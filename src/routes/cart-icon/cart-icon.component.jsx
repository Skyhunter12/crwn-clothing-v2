import { ReactComponent as ShoppingBagIcon } from "../../assets/shopping-bag.svg";
import { useSelector, useDispatch } from "react-redux";
import { SetIsCartOpen } from "../store/cart/cart.action";
import "./cart-icon.styles.scss"; // Assuming you have a CSS file for styles
import { selectCartCount, selectIsCartOpen } from "../store/cart/cart.selector";

const CartIcon = () => {
  // const { isCartOpen, setIsCartOpen, totalCount } = useContext(CartContext);
  const dispatch = useDispatch();
  const totalCount = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectIsCartOpen);
  console.log("CartIcon isCartOpen:", isCartOpen);
  const toggleCartDropdown = () => dispatch(SetIsCartOpen(!isCartOpen));
  console.log("CartIcon isCartOpen:", isCartOpen);

  return (
    <div className="cart-icon" onClick={toggleCartDropdown}>
      <ShoppingBagIcon className="shopping-bag-icon" />
      <span className="item-count">{totalCount}</span>
    </div>
  );
};

export default CartIcon;
