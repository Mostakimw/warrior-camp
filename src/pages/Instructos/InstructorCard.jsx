import { Link } from "react-router-dom";

const InstructorCard = ({ instructor }) => {
  const { name, email, image, userName } = instructor;
  return (
    <div className="card bg-base-100 shadow-xl rounded-xl ">
      <h1 className="text-3xl font-semibold text-gray-800 inline-block text-center">
        {userName}
      </h1>
      <figure className=" rounded-xl">
        <img
          src={image}
          alt="Instructor image"
          className="rounded-xl w-full h-[300px] object-cover"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p className="text-[#757575]">{email}</p>
        <div className="card-actions">
          <Link to="/classes">
            <button className="btn btn-sm mt-2">
              See All Class
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InstructorCard;
