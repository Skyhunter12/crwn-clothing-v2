import { useState } from "react";
import { FormInput } from "../../utils/Form-input/form-input.component";
import Button, {
  BUTTON_TYPE_CLASSES,
} from "../../utils/button/button.component";
import { useDispatch } from "react-redux";
import { signUpStart } from "../store/user/user.action"; // Import the action to start

const SignUpForm = () => {
  let defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const dispatch = useDispatch();
  let [formFields, setFormFields] = useState(defaultFormFields);
  let { displayName, email, password, confirmPassword } = formFields;

  let requestFormReset = () => {
    setFormFields(defaultFormFields);
  };
  console.log("SignUpForm rendered with formFields:", formFields);
  let handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  let handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Form submitted with values:", formFields);
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      dispatch(signUpStart(email, password, displayName));
    } catch (error) {
      console.error("Error creating user:", error);
      if (error.code === "auth/email-already-in-use") {
        // Proceed with form submission (e.g., create user)
        alert("Email already in use. Please use a different email.");
      } else {
        alert("An error occurred while creating the user. Please try again.");
      }
    }
  };
  return (
    <div>
      <h2>Don't have an account?</h2>
      <span>Please sign up as a new user.</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <div>
          <FormInput
            label="Display Name"
            type="text"
            id="displayName"
            name="displayName"
            value={displayName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <FormInput
            label="Email"
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <FormInput
            label="Password"
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <FormInput
            label="Confirm Password"
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <Button type="submit" buttonType={BUTTON_TYPE_CLASSES.base}>
          Sign Up
        </Button>
      </form>
    </div>
  );
};
export default SignUpForm;
