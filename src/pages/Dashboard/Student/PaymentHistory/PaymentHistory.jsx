import SectionTitle from "../../../../components/SectionTitle";
import usePaymentHistory from "../../../../hooks/usePaymentHistory";
import moment from "moment";

const PaymentHistory = () => {
  const [paymentHistory] = usePaymentHistory();
  console.log(paymentHistory);
  return (
    <div className="w-full">
      <SectionTitle title="Selected Classes" />
      <div className="flex items-center justify-between mt-10">
        <h1 className="font-semibold text-2xl">
          Total Payment: {paymentHistory.length}
        </h1>
      </div>

      <div className="overflow-x-auto mt-6 w-full">
        <table className="table">
          {/* head */}
          <thead className="bg-gray-800 text-white">
            <tr>
              <th>#</th>
              <th>Class Name</th>
              <th>TransactionId</th>
              <th>Price</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {paymentHistory.map((singlePayment, index) => (
              <tr key={singlePayment?._id}>
                <td>{index + 1}</td>
                <td>{singlePayment?.className}</td>
                <td>{singlePayment?.transactionId}</td>
                <td>${singlePayment?.price}</td>
                <td>{moment(singlePayment?.date).format("D MMMM YYYY")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
