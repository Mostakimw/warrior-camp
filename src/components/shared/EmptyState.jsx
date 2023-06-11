import { Link } from "react-router-dom";

const EmptyState = ({ message, btnText, destination }) => {
  return (
    <div className="flex flex-col justify-center items-center pb-10 px-16 w-fit mx-auto mt-20 shadow-xl">
      <p className="text-gray-600 text-xl lg:text-3xl">{message}</p>
      <Link to={destination} className="btn btn-outline mt-10">
        {btnText}
      </Link>
    </div>
  );
};

export default EmptyState;
