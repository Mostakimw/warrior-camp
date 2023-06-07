import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Instructor from "../Instructor/Instructor";
import Class from "../Class/Class";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home || WarriorCamp</title>
      </Helmet>
      <Banner />
      <Instructor />
      <Class />
    </div>
  );
};

export default Home;
