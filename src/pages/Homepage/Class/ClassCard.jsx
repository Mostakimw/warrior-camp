import { FaArrowAltCircleRight } from "react-icons/fa";

const ClassCard = ({ singleClass }) => {
  const { image, className, availableSeats, price } = singleClass;
  return (
    <div className="max-w-2xl mx-auto h-[470px] ">
      <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700 h-full relative">
        <img className="rounded-t-lg" src={image} alt="" />

        <div className="p-5 flex flex-col justify-between">
          <div>
            <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">
              {className}
            </h5>
          </div>
          <div className="flex justify-between my-5 text-[#FCC044]">
            <p>Price: {price}</p>
            <p>Available Seat: {availableSeats}</p>
          </div>
          <div
            href="#"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center flex items-center justify-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 max-w-fit absolute bottom-4"
          >
            Explore more classes <FaArrowAltCircleRight className="ml-2 " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
