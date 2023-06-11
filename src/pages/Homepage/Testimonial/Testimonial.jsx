// Import Swiper styles
import { FreeMode, Pagination } from "swiper";
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
  console.log(testimonials);
  return (
    <div className="mt-20">
      <SectionTitle title="Testimonial" className="mb-[150px]" />
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper mt-16"
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