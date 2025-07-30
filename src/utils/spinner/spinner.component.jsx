import { SpinnerContainer, SpinnerOverlay } from "./spinner.styles";

const Spinner = () => {
  return (
    <SpinnerContainer className="spinner">
      <SpinnerOverlay />
    </SpinnerContainer>
  );
};

export default Spinner;
