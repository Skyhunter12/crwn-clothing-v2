import { Link, Outlet } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
// import "./navigation.styles.scss"; // Assuming you have a CSS file for styles
import { ReactComponent as CrownLogo } from "../../assets/crown.svg"; // Adjust the path to your logo image
import { useContext } from "react";
import { UserContext } from "../../context/user.context"; // Import the UserContext
import { signOutUser } from "../../utils/firebase/firebaseauth"; // Import the signOutUser function
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../context/cart.context"; // Import the CartContext
import {
  LogoContainer,
  NavigationContainer,
  NavLinks,
  NavLink,
} from "./navigation.style.jsx"; // Import styled components
const Navigation = () => {
  const { isCartOpen } = useContext(CartContext);

  let { currentUser } = useContext(UserContext);

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
              onClick={signOutUser}
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
