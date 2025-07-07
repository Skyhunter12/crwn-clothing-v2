import { Link, Outlet } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import "./navigation.styles.scss"; // Assuming you have a CSS file for styles
import { ReactComponent as CrownLogo } from "../../assets/crown.svg"; // Adjust the path to your logo image
import { useContext } from "react";
import { UserContext } from "../../context/user.context"; // Import the UserContext
import { signOutUser } from "../../utils/firebase/firebaseauth"; // Import the signOutUser function

const Navigation = () => {
  
  let {currentUser, setCurrentUser} = useContext(UserContext);
  console.log("Current User in Navigation:", currentUser);
  return (
    <Fragment>
      <div className="navigation">
        <Link to="/" className="logo-container">
          <CrownLogo className="crown" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          {currentUser ? (
            <span className="nav-link" style={{ cursor: "pointer" }} onClick={signOutUser}>
              Sign Out
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              Sign In
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
