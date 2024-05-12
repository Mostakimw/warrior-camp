import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Testimonial from "../Testimonial/Testimonial";
import PopularInstructor from "../PopularInstructor/PopularInstructor";
import TopClass from "../TopClass/TopClass";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home || WarriorCamp</title>
      </Helmet>
      {/* <Banner /> */}
      {/* <PopularInstructor /> */}
      <TopClass />
      {/* <Testimonial /> */}
    </div>
  );
};

export default Home;
