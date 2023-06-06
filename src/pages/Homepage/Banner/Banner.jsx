import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

const Banner = () => {
  return (
    <>
      <AwesomeSlider className="h-[80vh]">
        <div data-src="https://i.ibb.co/j51RzV7/banner-1.jpg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ex
          assumenda blanditiis deleniti perspiciatis quod maiores quasi pariatur
          repellendus animi.
        </div>

        <div data-src="https://i.ibb.co/j51RzV7/banner-1.jpg">
          <p className="bg-red-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ex
            assumenda blanditiis deleniti perspiciatis quod maiores quasi
            pariatur repellendus animi.
          </p>
        </div>
        <div data-src="https://i.ibb.co/j51RzV7/banner-1.jpg">
          <p className="bg-red-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ex
            assumenda blanditiis deleniti perspiciatis quod maiores quasi
            pariatur repellendus animi.
          </p>
        </div>
      </AwesomeSlider>
    </>
  );
};

export default Banner;
