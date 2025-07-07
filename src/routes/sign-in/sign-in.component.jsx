import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthWithEmailAndPassword,
} from "../../utils/firebase/firebaseauth";
import {  useState, useContext } from "react";
import "./sign-in.styles.scss"; // Assuming you have a CSS file for styles
import { FormInput } from "../../utils/Form-input/form-input.component";
import Button from "../../utils/button/button.component";

const defaultFormFields = {
  email: "",
  password: "",
};

const Signin = () => {
  const [loading, setLoading] = useState(false);
  const [formFields, setFormFields] = useState(defaultFormFields);
  
  let signInWithGoogle = async () => {
    setLoading(true);
    try {
      // This will open a popup for Google sign-in
      // and return the user credentials
      let { user } = await signInWithGooglePopup();
      await user.getIdToken(true);
      let userDoc = await createUserDocumentFromAuth(user);

      return userDoc;
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
    setLoading(false);
  };
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;   
    try {
      // Here you would typically call a function to sign in with email and password
      // For example, using Firebase's signInWithEmailAndPassword
      let {user} = await signInAuthWithEmailAndPassword(email, password);

        if (user) {
            await resetFormFields();
        } else {
            console.error("Sign-in failed");
        }

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
          <FormInput label="Email" type="email" id="email" required />
        </div>
        <div>
          <label htmlFor="password"></label>
          <FormInput label="Password" type="password" id="password" required />
        </div>
        <div className="buttons">
          <Button
            buttonType="default"
            type="submit"
          >
            Sign In
          </Button>
          <span className="or">or</span>
          <Button
            buttonType="google"
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
