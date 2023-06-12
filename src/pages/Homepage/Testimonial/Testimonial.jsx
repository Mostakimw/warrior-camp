// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import SectionTitle from "../../../components/SectionTitle";
import { useEffect, useState } from "react";
import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_LINK}/testimonials`)
      .then((res) => res.json())
      .then((data) => setTestimonials(data));
  }, []);
  return (
    <div className="mt-20">
      <SectionTitle title="Testimonial" className="mb-[150px]" />
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 5000,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
        }}
        className="mySwiper mt-20"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial._id}>
            <TestimonialCard testimonial={testimonial} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
