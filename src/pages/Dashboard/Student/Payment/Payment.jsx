import { Elements } from "@stripe/react-stripe-js";
import SectionTitle from "../../../../components/SectionTitle";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useLoaderData } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_PK);
const Payment = () => {
  const classData = useLoaderData();
  console.log("payment from payment page,", classData);
  return (
    <div>
      <SectionTitle title="Complete Your Purchase"></SectionTitle>
      <Elements stripe={stripePromise}>
        <CheckoutForm classData={classData} />
      </Elements>
    </div>
  );
};

export default Payment;
