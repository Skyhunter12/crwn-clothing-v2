import SignUpForm from "../sign-up/sign-up.component";
import "./authentication.styles.scss"; // Assuming you have a CSS file for styles
import Signin from "../sign-in/sign-in.component";

const Authenticate = () => {
  return (
    <div className="sign-in-and-sign-up-container">
      <div className="sign-in-container">
        <Signin />
      </div>
      <div className="sign-up-container">
        <SignUpForm />
      </div>
    </div>
  );
};

export default Authenticate;
