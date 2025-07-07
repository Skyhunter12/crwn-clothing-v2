import { Link, Outlet } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import "./navigation.styles.scss"; // Assuming you have a CSS file for styles
import { ReactComponent as CrownLogo } from "../../assets/crown.svg"; // Adjust the path to your logo image

const Navigation = () => {
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
          <Link className="nav-link" to="/auth">
            Sign In
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
