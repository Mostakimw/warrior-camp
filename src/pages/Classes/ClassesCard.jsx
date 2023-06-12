import Swal from "sweetalert2";
import { useAuth } from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const ClassesCard = ({ singleClass }) => {
  const { user } = useAuth();
  const email = user?.email;

  const [axiosSecure] = useAxiosSecure();
  const [disabled, setDisabled] = useState(false);
  const navigate = useNavigate();

  const {
    _id,
    courseId,
    classThumbnail,
    className,
    userName,
    availableSeats,
    price,
    description,
  } = singleClass;

  useEffect(() => {
    if (availableSeats === 0) {
      setDisabled(true);
    }
  }, [availableSeats]);
  const handleSelect = () => {
    if (!user?.email) {
      Swal.fire({
        title: "Not Logged In!",
        text: "You have to login first!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    } else {
      const selectedClasses = {
        _id,
        courseId,
        classThumbnail,
        className,
        userName,
        availableSeats,
        price,
        description,
        selected: false,
        email: email,
      };

      axiosSecure
        .post("/selected-classes", selectedClasses)
        .then((response) => {
          if (response.data.insertedId) {
            Swal.fire("Done!", "You Select This Classes", "success");
          }
        })
        .catch((error) => {
          if (error.response && error.response.status === 409) {
            Swal.fire("Error!", "This class is already selected", "error");
          } else {
            Swal.fire("Error!", "An error occurred", "error");
          }
        });
    }
  };

  const bgGradientColor =
    availableSeats === 0
      ? "from-red-600 to-red-500"
      : "from-[#848C2F] to-[#83881d]";
  const bgStyle = `bg-gradient-to-r ${bgGradientColor}`;

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1200"
      data-aos-delay="200"
      className={`w-9/12 mx-auto flex justify-between items-center gap-8 mb-8 bg- text-white py-10 px-6 mt-10 rounded-md shadow-lg ${bgStyle}`}
    >
      <div className="w-1/2 p-4">
        <h2 className="text-3xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-[#FCC044] via-red-300 to-yellow-500">
          {className}
        </h2>
        <p className="text-gray-200">Instructor: {userName}</p>
        <p className="text-gray-200">Available Seats: {availableSeats}</p>
        <p className="text-gray-200">Price: {price}</p>
        <p className="mt-4">{description}</p>
        <div className=" mt-6">
          <button
            onClick={handleSelect}
            disabled={disabled}
            className="btn btn-outline text-2l tracking-widest w-full text-gray-100 border-2 border-white hover:bg-[#FCC044]  duration-300 hover:border-none"
          >
            {!disabled ? (
              "Select"
            ) : (
              <span className="text-error">All Seats Are Booked</span>
            )}
          </button>
        </div>
      </div>
      <div className="flex justify-center">
        <img
          className="px-4 rounded-md overflow-hidden"
          style={{ borderRadius: "8px" }}
          src={classThumbnail}
          alt="Course"
        />
      </div>
    </div>
  );
};

export default ClassesCard;
