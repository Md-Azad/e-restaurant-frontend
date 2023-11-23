import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import useCart from "../../../hooks/useCart";

// TODO: 
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_KEY);
const Payment = () => {
  const [cart] = useCart();
  const total = cart.reduce((sum,item)=>sum+item.price,0)
  console.log("reduce ",total);
  const price = parseFloat(total.toFixed(2))
  console.log("reduce price",price);
  return (
    <div className="w-full">
      <SectionTitle
        subHeading="please process"
        heading="payment"
      ></SectionTitle>
      <Elements stripe={stripePromise}>
        <CheckoutForm price={price}></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Payment;
