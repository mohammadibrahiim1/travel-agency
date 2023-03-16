import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/UserContext";

const CheckOutForm = ({ data }) => {
  const { user } = useContext(AuthContext);
  // console.log(user);
  // console.log(data);
  const { price, _id } = data;
  const [cardError, setCardError] = useState("");
  const [paymentSuccess, setPaymentSuccess] = useState("");
  const [processing, setProccesing] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [price]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      // console.log(error);
      setCardError(error.message);
    } else {
      setCardError("");
    }
    setProccesing(true);
    setPaymentSuccess("");
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(
        clientSecret,
        // '{PAYMENT_INTENT_CLIENT_SECRET}',
        {
          payment_method: {
            card: card,
            billing_details: {
              name: user.displayName,
              email: user.email,
            },
          },
        }
      );
    if (confirmError) {
      setCardError(confirmError.message);
      return;
    }
    if (paymentIntent.status === "succeeded") {
      console.log("card info", card);
      // store payment info in the database
      const payment = {
        price,
        transactionId: paymentIntent.id,
        email: user.email,
        bookingId: _id,
      };
      fetch("http://localhost:5000/payments", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.insertedId) {
            setPaymentSuccess("Congrats! your payment completed");
            setTransactionId(paymentIntent.id);
          }
        });
    }
    setProccesing(false);
    console.log("paymentIntent", paymentIntent);
  };
  return (
    <div>
      <section>
        <form className="payment-card" onSubmit={handleSubmit}>
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "15px",
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
          <button
            type="submit"
            className="mt-4 btn btn-primary"
            disabled={!stripe || !clientSecret || processing}
          >
            Pay
          </button>
          <p className="text-danger">{cardError}</p>
          {paymentSuccess && (
            <div>
              <p className="text-success">{paymentSuccess}</p>
              <p className="text-success">
                {" "}
                your transactionId : {transactionId}
              </p>
            </div>
          )}
        </form>
      </section>
    </div>
  );
};

export default CheckOutForm;
