import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { PaymentFormContainer, FormContainer, PaymentHeader, PaymentFormGroup, PaymentButton } from "./payment-form.style";
import  {BUTTON_TYPE_CLASSES} from "../utils/button/button.component";
import { useSelector } from "react-redux";
import { useState } from "react";
import { selectCurrentUser } from "../routes/store/user/user.selector";
import { selectCartTotal } from "../routes/store/cart/cart.selector";

const PaymentForm = () => {
    const stripe = useStripe();
  const elements = useElements();
  const endpoint = 'http://localhost:8888/.netlify/functions/stripe-payment-content';
  const currentUser = useSelector(selectCurrentUser);
  const amount = useSelector(selectCartTotal);      
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (event) => {
    setIsProcessing(true);
    event.preventDefault();
    // Handle payment submission logic here
    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      return;
    }

    let response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount }), // Example amount in cents
    }).then(res => res.json()).catch(err => console.error(err));
    if (!response) {
      console.error("Payment submission failed");
      return;
    }
    const { paymentIntent:{client_secret}, error } = response;
    console.log("secret", client_secret);
    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method:{
        card:elements.getElement(CardElement),
        billing_details: {
          name: currentUser ? currentUser.displayName : 'Guest',
          email: currentUser ? currentUser.email : 'guest@example.com',
        }
      }
    }).then(res => {
      setIsProcessing(false);
      console.log("result", res);
      return res;
    }).catch(err => {
      setIsProcessing(false);
      console.error(err);
      return;
    });
  };

  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={handleSubmit}>
        <PaymentHeader>Card Payment</PaymentHeader>
        <PaymentFormGroup>
          <CardElement />
        </PaymentFormGroup>
        <PaymentButton isLoading={isProcessing} type={BUTTON_TYPE_CLASSES.inverted}>Pay Now</PaymentButton>
      </FormContainer>
    </PaymentFormContainer>
  );
}

export default PaymentForm;