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
          <div className="relative h-[80vh] w-full bg-gradient-to-r ">
            <img
              src="https://i.ibb.co/xL5T31s/group-boys-girl-fighting-aikido-training-martial-arts-school-healthy-lifestyle-sports-concept-1.jpg"
              className="object-cover h-full w-full"
              alt=""
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-center ">
              <h3 className="text-white text-4xl font-bold section-title">
                Discover the Way of Martial Arts
              </h3>
              <p className="text-[#d7c8c8] text-lg max-w-xl mt-3">
                Embark on a journey of self-discovery through martial arts. Join
                our Summer Camp Learning School to cultivate discipline, build
                strength, and foster personal growth. Start your martial arts
                adventure now!
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-[80vh] w-full bg-gradient-to-r ">
            <img
              src="https://i.ibb.co/1mxM3tj/pexels-rdne-stock-project-7045594.jpg"
              className="object-cover h-full w-full"
              alt=""
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-center ">
              <h3 className="text-white text-4xl font-bold section-title">
                Empowering Minds and Bodies
              </h3>
              <p className="text-[#d7c8c8] text-lg max-w-xl mt-3">
                Experience the power of martial arts at our Summer Camp Learning
                School. Develop mental fortitude, enhance physical fitness, and
                boost self-confidence. Join our community and empower yourself
                today!
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-[80vh] w-full bg-gradient-to-r ">
            <img
              src="https://i.ibb.co/Sc74RSt/active-sporty-girl-kimono-kicking-with-leg-studio.jpg"
              className="object-cover h-full w-full"
              alt=""
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-center ">
              <h3 className="text-white text-4xl font-bold section-title">
                Ignite Your Inner Warrior
              </h3>
              <p className="text-[#d7c8c8] text-lg max-w-xl mt-3">
                Unleash your inner warrior at our Summer Camp Learning School.
                Learn martial arts, develop resilience, and unlock your full
                potential. Join us on this transformative journey today!
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
