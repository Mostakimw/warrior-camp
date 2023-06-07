import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
SwiperCore.use([Navigation, Pagination]);

const Banner = () => {
  return (
    <div>
      <Swiper
        navigation
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
      >
        <SwiperSlide>
          <div className="relative h-[80vh] w-full bg-gradient-to-r">
            <img
              src="https://i.ibb.co/j51RzV7/banner-1.jpg"
              className="object-cover h-full w-full"
              alt=""
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center">
              <h3 className="text-white text-2xl font-bold">Title</h3>
              <p className="text-white text-lg">Description</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-[80vh] w-full bg-gradient-to-r">
            <img
              src="https://i.ibb.co/j51RzV7/banner-1.jpg"
              className="object-cover h-full w-full"
              alt=""
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center">
              <h3 className="text-white text-2xl font-bold">Title</h3>
              <p className="text-white text-lg">Description</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-[80vh] w-full bg-gradient-to-r">
            <img
              src="https://i.ibb.co/j51RzV7/banner-1.jpg"
              className="object-cover h-full w-full"
              alt=""
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center">
              <h3 className="text-white text-2xl font-bold">Title</h3>
              <p className="text-white text-lg">Description</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
