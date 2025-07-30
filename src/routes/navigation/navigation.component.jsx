import { Outlet } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
// import "./navigation.styles.scss"; // Assuming you have a CSS file for styles
import { ReactComponent as CrownLogo } from "../../assets/crown.svg"; // Adjust the path to your logo image
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectIsCartOpen } from "../store/cart/cart.selector.js";
import { selectCurrentUser } from "../store/user/user.selector";
import { useDispatch } from "react-redux";
import { signOutStart } from "../store/user/user.action"; // Import the action to start sign out
// Import the selector
import {
  LogoContainer,
  NavigationContainer,
  NavLinks,
  NavLink,
} from "./navigation.style.jsx"; // Import styled components
import { useSelector } from "react-redux";
const Navigation = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  // const { isCartOpen } = useContext(CartContext);
  const isCartOpen = useSelector(selectIsCartOpen);
  const signOutUser = () => {
    dispatch(signOutStart()); // Dispatch the signOut action
  };
  return (
    <Fragment>
      <NavigationContainer>
        {/* <div className="navigation"> */}
        <LogoContainer to="/">
          <CrownLogo className="crown" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">Shop</NavLink>
          {currentUser ? (
            <NavLink
              as="span"
              style={{ cursor: "pointer" }}
              onClick={signOutUser} // Dispatch the signOut action
            >
              Sign Out
            </NavLink>
          ) : (
            <NavLink to="/auth">Sign In</NavLink>
          )}
          <CartIcon className="shopping-bag-icon" />
        </NavLinks>
        {isCartOpen && <CartDropdown className="cart-dropdown" />}
        {/* </div> */}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
