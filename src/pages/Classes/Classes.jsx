import SectionTitle from "../../components/SectionTitle";
import ClassesCard from "./ClassesCard";
import useClasses from "../../hooks/useClasses";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

const Classes = () => {
  const classes = useClasses();

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <SectionTitle title="All Classes"></SectionTitle>
      <div>
        {classes.map((singleClass) => (
          <ClassesCard
            key={singleClass._id}
            singleClass={singleClass}
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="200"
          ></ClassesCard>
        ))}
      </div>
    </div>
  );
};

export default Classes;
