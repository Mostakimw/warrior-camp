import SectionTitle from "../../components/SectionTitle";
import ClassesCard from "./ClassesCard";
import useClasses from "../../hooks/useClasses";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

const Classes = () => {
  const [classes] = useClasses();
  console.log(classes);

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <SectionTitle title="All Classes"></SectionTitle>
      <h1>class collectopn</h1>
      <div>
        {classes.map((singleClass) => (
          <ClassesCard
            key={singleClass._id}
            singleClass={singleClass}
          ></ClassesCard>
        ))}
      </div>
    </div>
  );
};

export default Classes;
