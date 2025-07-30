import { useState } from "react";
import "./sign-in.styles.scss"; // Assuming you have a CSS file for styles
import { FormInput } from "../../utils/Form-input/form-input.component";
import Button, {
  BUTTON_TYPE_CLASSES,
} from "../../utils/button/button.component"; // Import the Button component
import { useDispatch } from "react-redux";
import { googleSignInStart, emailSignInStart } from "../store/user/user.action"; // Import the action to start Google sign-in

const defaultFormFields = {
  email: "",
  password: "",
};

const Signin = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [formFields, setFormFields] = useState(defaultFormFields);

  const signInWithGoogle = async () => {
    dispatch(googleSignInStart());
  };
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    try {
      // Here you would typically call a function to sign in with email and password
      // For example, using Firebase's signInWithEmailAndPassword
      dispatch(emailSignInStart(email, password));
    } catch (error) {
      console.error("Error signing in with email and password:", error);
      switch (error.code) {
        case "auth/user-not-found":
          alert("No user found with this email. Please sign up first.");
          break;
        case "auth/wrong-password":
          alert("Incorrect password. Please try again.");
          break;
        case "auth/invalid-email":
          alert("Invalid email format. Please enter a valid email.");
          break;
        case "auth/too-many-requests":
          alert("Too many attempts. Please try again later.");
          break;
        default:
          alert("An error occurred while signing in. Please try again.");
          break;
      }
    }
  };
  return (
    <div className="sign-in-container">
      <form className="sign-in-form" onSubmit={handleSubmit}>
        <h2>Already have an account?</h2>
        <span>Sign in with your email and password</span>
        <div>
          <label htmlFor="email"></label>
          <FormInput
            label="Email"
            type="email"
            id="email"
            required
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password"></label>
          <FormInput
            label="Password"
            type="password"
            id="password"
            required
            onChange={handleChange}
          />
        </div>
        <div className="buttons">
          <Button buttonType={BUTTON_TYPE_CLASSES.base} type="submit">
            Sign In
          </Button>
          <span className="or">or</span>
          <Button
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={signInWithGoogle}
            disabled={loading}
          >
            Sign In with Popup
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Signin;
