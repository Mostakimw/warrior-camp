import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import "./CheckoutForm.css";
import { useAuth } from "../../../../hooks/useAuth";
import { useEffect } from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { toast } from "react-hot-toast";
import { ImSpinner9 } from "react-icons/im";

const CheckoutForm = ({ classData }) => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  // for getting client secret
  useEffect(() => {
    axiosSecure
      .post("/create-payment-intent", { price: classData?.price })
      .then((res) => {
        setClientSecret(res?.data?.clientSecret);
      });
  }, [axiosSecure, classData?.price]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setCardError(error.message);
    } else {
      setCardError("");
    }
    setProcessing(true);
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "unknown",
            name: user?.displayName || "anonymous",
          },
        },
      });
    if (confirmError) {
      setCardError(confirmError.message);
    }
    // ! store the enrolled classes in db

    if (paymentIntent.status === "succeeded") {
      const enrollmentInfo = {
        ...classData,
        transactionId: paymentIntent.id,
        date: new Date(),
      };
      axiosSecure
        .post("/enroll", enrollmentInfo)
        .then((res) => {
          if (res.data.insertedId) {
            setProcessing(false);
            toast.success("Payment success");
            //update the class data for seats and enrollment

            const classIdForUpdate = enrollmentInfo?.courseId;
            console.log(classIdForUpdate);
            axiosSecure
              .patch(`/classes/${classIdForUpdate}`)
              .then((res) => {
                console.log("seat updated", res.data);
              })
              .catch(() => {});
            // Delete the selected class from the enrollment collection
            const courseIdToDelete = enrollmentInfo._id;
            axiosSecure
              .delete(`/selected-classes/${courseIdToDelete}`)
              .then(() => {})
              .catch(() => {});
          }
        })
        .catch(() => {});
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="mt-6">
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
        <button
          type="submit"
          className="btn px-8 py-2 text-xl text-white font-semibold btn-info mx-auto"
          disabled={!stripe || !clientSecret || processing}
        >
          {processing ? (
            <ImSpinner9 className="m-auto animate-spin" size={24} />
          ) : (
            `Pay ${classData?.price}$`
          )}
        </button>
      </form>
      <p className="text-error mt-5">{cardError}</p>
    </>
  );
};

export default CheckoutForm;
