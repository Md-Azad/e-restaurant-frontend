import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";

const CheckoutForm = ({cart,price}) => {
  const stripe = useStripe();
  const elements = useElements();
  const {user} = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const [cardError, setCardError] = useState('');
  const [clientSecret,setClientSecret] = useState('');
  const [processing , setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState('');

  useEffect(()=>{
    axiosSecure.post('/create-payment-intent',{price})
    .then(res=>{
      console.log(res.data.clientSecret)
      setClientSecret(res.data.clientSecret);
    
    })
  
  },[])


  const handleSubmit = async(event) =>{
    event.preventDefault();
    if (!stripe || !elements) {
      
        return;
      }
      const card = elements.getElement(CardElement);

      if (card == null) {
        return;
      }
      const {error} = await stripe.createPaymentMethod({
        type: 'card',
        card
      })
      if(error){
        console.log("error",error);
        setCardError(error.message);
      }else{
        setCardError('');
        // console.log('payment method',paymentMethod);
      }
      setProcessing(true);
      const {paymentIntent, error:confirmError} = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: card,
            billing_details: {
              email: user?.email || 'Unknown Email',
              name: user?.displayName || 'Unknown Name',
            },
          },
        },
      );
      if(confirmError){
        console.log(confirmError);
      }
      
      console.log("payment intent",paymentIntent)
      setProcessing(false);
      if(paymentIntent.status === 'succeeded'){
        setTransactionId(paymentIntent.id)
        // const transactionId = paymentIntent.id;
        // save payment information to the server.

        const payment = {
          email: user?.email,
          transactionId: paymentIntent.id,
          price,
          quantity: cart.length,
          items: cart.map(item=>item._id),
          itemName: cart.map(item=>item.name)
        }
        axiosSecure.post('/payment',payment)
        .then(res=>{
          console.log(res.data);
          if(res.data.insertedId){
            console.log('')
          }
        })
      }
  }
  return (
    <>
    <form className="w-2/3 m-8" onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button  className="btn btn-primary btn-sm mt-4" type="submit" disabled={!stripe ||!clientSecret ||processing}>
        Pay
      </button>
    </form>
    { cardError && <><p className="ml-8 text-red-600">{cardError}</p></>}
    {transactionId && <p className="text-green-600 ml-8">Transaction complete with transactionId: {transactionId}</p>}
    </>
  );
};

export default CheckoutForm;