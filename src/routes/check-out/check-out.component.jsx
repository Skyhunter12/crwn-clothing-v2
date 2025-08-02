import { useSelector } from "react-redux";
import "./check-out.styles.scss"; // Assuming you have a CSS file for styles
import CheckoutItem from "../checkout-item/checkout-item.component";
import { selectCartItems, selectCartTotal } from "../store/cart/cart.selector";
import PaymentForm from "../../payment-form/payment-form.component"; // Assuming you have a payment form component

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems?.map((item) => (
        <CheckoutItem key={item.id} cartItem={item} />
      ))}
      <div className="total">
        Total:{" "}
        {cartTotal ? <span>{cartTotal}</span> : <span>No items in cart</span>}
      </div>
      <div className="payment-form">
        {/* Here you can include your payment form component */}
        <PaymentForm />
      </div>
    </div>
  );
};

export default Checkout;
