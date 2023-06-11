// Import Swiper styles
import { FreeMode, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./Testimonial.css";

// import "./styles.css";

const Testimonial = () => {
  return (
    <div className="mt-20">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="testimonial-item bg-red-200">
            <div className="testimonial-image-container">
              <div className="testimonial-image-wrapper">
                <img
                  src="https://i.ibb.co/wKycvGF/portrait-smiling-chef-uniform.jpg"
                  className="w-32 h-32 rounded-full"
                  alt=""
                />
              </div>
            </div>

            <div className="testimonial-content py-30">
              <p>Name</p>
              <div className="flex justify-between">
                <p>data</p>
                <p>icon</p>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Blanditiis ex velit labore sed nihil animi consequatur tempora
                nulla nesciunt excepturi pariatur dicta saepe numquam, explicabo
                aliquid autem quo ullam alias vitae vero voluptatum. Rerum, enim
                veniam? Adipisci dignissimos magnam fuga.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonial;
