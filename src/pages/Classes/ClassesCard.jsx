import Swal from "sweetalert2";
import { useAuth } from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
// import "aos/dist/aos.css";
// import AOS from "aos";

const ClassesCard = ({ singleClass }) => {
  const { user } = useAuth();
  const email = user?.email;

  const [axiosSecure] = useAxiosSecure();
  const [disabled, setDisabled] = useState(false);
  const navigate = useNavigate();

  const {
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

  // selection handle
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
      // storing this values in db
      const selectedClasses = {
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

      // posting data to backend
      axiosSecure
        .post("/selected-classes", selectedClasses)
        .then((response) => {
          if (response.data.insertedId) {
            Swal.fire("Done!", "You Select This Classes", "success");
          }
        })
        .catch((error) => {
          console.log(error);
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
      className={`w-full md:w-9/12 mx-auto grid grid-cols-2 lg:grid-cols-12 gap-8 mb-8 bg- text-white py-10 px-6 mt-10 rounded-md shadow-lg ${bgStyle}`}
    >
      {/* text div */}
      <div className="col-span-5 p-0 md:p-4 order-2 lg:order-1">
        <h2 className="text-4xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-[#FCC044] via-red-300 to-yellow-500">
          {className}
        </h2>
        <p className="font-semibold text-xl text-gray-200">
          Instructor: <span className="font-mono font-light">{userName}</span>
        </p>
        <div className="flex justify-between">
          <p className="font-semibold text-xl text-gray-200">
            Seats: <span className="font-mono font-light">{availableSeats}</span>
          </p>
          <p className="font-semibold text-xl text-gray-200 ">
            Price: <span className="font-mono font-light">${price}</span>
          </p>
        </div>
        <p className="mt-4 text-gray-100 font-light">{description}</p>
        <div className=" mt-6">
          <button
            onClick={handleSelect}
            disabled={disabled}
            className="btn btn-outline text-2l tracking-widest w-full text-gray-100 border-2 border-white hover:bg-[#FCC044]  duration-300 hover:border-none"
          >
            {!disabled ? (
              "Select this class"
            ) : (
              <span className="text-error">All Seats Are Booked</span>
            )}
          </button>
        </div>
      </div>
      {/* image div */}
      <div className=" col-span-7 flex justify-center order-1 lg:order-2">
        <img
          data-aos="fade-left"
          data-aos-duration="1200"
          className="px-4 rounded-md overflow-hidden object-cover"
          style={{ borderRadius: "8px" }}
          src={classThumbnail}
          alt="Course"
        />
      </div>
    </div>
  );
};

export default ClassesCard;
