import Rating from "react-rating";
import { FaQuoteLeft, FaRegStar, FaStar } from "react-icons/fa";
import "./Testimonial.css";
const TestimonialCard = ({ testimonial }) => {
  const { name, avatar, rating, designation, content, date } = testimonial;
  return (
    <div className="testimonial-item  shadow-lg shadow-yellow-500/50 rounded-lg">
      <div className="testimonial-image-container">
        <div className="testimonial-image-wrapper">
          <img
            src={avatar}
            className="w-32 h-32 rounded-full shadow border border-[#FCC044]"
            alt=""
          />
        </div>
      </div>

      <div className="testimonial-content pt-16 px-12 pb-10 border h-[350px] border-purple-200">
        <div className="flex justify-between mt-4">
          <div>
            <p className="text-xl font-bold  text-gray-800">{name}</p>
            <p>{designation}</p>
          </div>
          <p className="text-[#757575 text-sm">{date}</p>
        </div>
        <div className="text-center my-6 text-4xl">
          <Rating
            placeholderRating={rating}
            emptySymbol={<FaRegStar></FaRegStar>}
            placeholderSymbol={<FaStar className="text-[#FCC044]"></FaStar>}
            fullSymbol={<FaStar></FaStar>}
          />
        </div>
        <div className="relative">
          <FaQuoteLeft className="inline-block absolute -top-1 left-0" />{" "}
          <p className="ml-5">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
