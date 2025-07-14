import { useNavigate } from "react-router-dom";
const { useEffect } = require("react");

const SignOut = () => {
  // This component can be used to handle sign-out logic
  // For example, you can clear user data or redirect to a different page
  // Here, we will just log a message for demonstration purposes
  console.log("User has signed out");

  // You can also redirect the user to the home page or login page after sign-out
  // For example, using useNavigate from react-router-dom:
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div>
      <h1>You have signed out successfully.</h1>
      {/* Optionally, you can add a button to redirect to the home page */}
    </div>
  );
};

export default SignOut;
