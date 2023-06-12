import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../../components/SectionTitle";
import EmptyState from "../../../../components/shared/EmptyState";
import usePaymentHistory from "../../../../hooks/usePaymentHistory";

const MyEnrollment = () => {
  const [paymentHistory] = usePaymentHistory();
  return (
    <div className="w-full">
      <Helmet>
        <title>Enrolled Classes || WarriorCamp</title>
      </Helmet>
      <SectionTitle title="Enrolled Classes" />

      {paymentHistory.length > 0 ? (
        <div className="grid md:grid-cols-2 mt-12 gap-12">
          {paymentHistory.map((enrolled) => (
            <div
              key={enrolled?._id}
              className="grid md:grid-cols-2 gap-8 bg-gray-800 px-8 py-6 rounded-md group relative"
            >
              <div>
                <img
                  src={enrolled?.classThumbnail}
                  className="w-60 rounded-md transition duration-300 ease-in-out group-hover:scale-110"
                  alt=""
                />
              </div>
              <div className="flex flex-col text-gray-100">
                <div>
                  <h3 className="text-xl font-semibold">
                    {enrolled?.className}
                  </h3>
                  <p className="text-2xl font-semibold mt-2">
                    {enrolled?.userName}
                  </p>
                </div>
                <h1 className="text-[#d1d1d1] mt-3 ">
                  {enrolled?.description}
                </h1>
              </div>
              <div className="absolute inset-0 bg-yellow-500 opacity-0 group-hover:opacity-25 transition-opacity"></div>
            </div>
          ))}
        </div>
      ) : (
        <>
          <EmptyState
            message="You did not enroll any class yet!"
            btnText="See Classes"
            destination="/classes"
          />
        </>
      )}
    </div>
  );
};

export default MyEnrollment;
