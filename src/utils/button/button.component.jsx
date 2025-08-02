import {
  BaseButton,
  googleSignInButton,
  invertedButton,
  ButtonContainer
} from "./button.style.jsx";

export const BUTTON_TYPE_CLASSES = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: googleSignInButton,
    [BUTTON_TYPE_CLASSES.inverted]: invertedButton,
  }[buttonType]);

const Button = ({ children, isLoading, buttonType, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  return <CustomButton isLoading={isLoading} {...otherProps}>{isLoading ? <ButtonContainer /> : children}</CustomButton>;
};

export default Button;
