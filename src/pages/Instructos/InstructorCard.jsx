import { Link } from "react-router-dom";

const InstructorCard = ({ instructor }) => {
  const { className, email, userName, availableSeats } = instructor;
  return (
    <div className="card bg-base-100 shadow-xl">
      <h1 className="text-3xl font-semibold text-gray-800 inline-block py-5 text-center">
        {userName}
      </h1>
      <figure className="px-10">
        <img
          src="https://i.ibb.co/wKycvGF/portrait-smiling-chef-uniform.jpg"
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{className}</h2>
        <p className="text-[#FCC044]">{email}</p>
        <p>Available Seats: {availableSeats}</p>
        <div className="card-actions">
          <Link to="/classes">
            <button className="btn btn-primary btn-sm mt-2">
              See All Class
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InstructorCard;
