import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebaseauth";
import { FormInput } from "../../utils/Form-input/form-input.component";
import Button from "../../utils/button/button.component";

const SignUpForm = () => {
  let defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  let [formFields, setFormFields] = useState(defaultFormFields);
  let { displayName, email, password, confirmPassword } = formFields;

  let requestFormReset = async () => {
    await setFormFields(defaultFormFields);
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
      let {user} = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      if (!user) {
        console.error("User creation failed");
        return;
      }

      // Optionally, you can also save the displayName to the user profile
      // This can be done using a function like createUserDocumentFromAuth(userCredential.user, { displayName });
      // For now, we will just log the userCredential
      await createUserDocumentFromAuth(user, { displayName });
      await requestFormReset();
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
        <Button type="submit" buttonType="default">
          Sign Up
        </Button>
      </form>
    </div>
  );
};
export default SignUpForm;
