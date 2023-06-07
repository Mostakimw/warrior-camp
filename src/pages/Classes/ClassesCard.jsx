const ClassesCard = ({ singleClass }) => {
  const {
    image,
    className,
    instructorName,
    availableSeats,
    price,
    description,
  } = singleClass;
  return (
    <div
      style={{
        backgroundImage: "linear-gradient(90deg, #848C2F, #83881d)",
      }}
      className="w-9/12 mx-auto flex justify-between items-center gap-8 mb-8 bg- text-white py-10 px-6 mt-10 rounded-md shadow-lg"
    >
      <div className="w-1/2 p-4">
        <h2 className="text-3xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-[#FCC044] via-red-300 to-yellow-500">
          {className}
        </h2>
        <p className="text-gray-200">Instructor: {instructorName}</p>
        <p className="text-gray-200">Available Seats: {availableSeats}</p>
        <p className="text-gray-200">Price: {price}</p>
        <p className="mt-4">{description}</p>
      </div>
      <div className="flex justify-center">
        <img
          className="px-4 rounded-md overflow-hidden"
          style={{ borderRadius: "8px" }}
          src={image}
          alt="Course"
        />
      </div>
    </div>
  );
};

export default ClassesCard;