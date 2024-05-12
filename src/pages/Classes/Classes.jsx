import SectionTitle from "../../components/SectionTitle";
import ClassesCard from "./ClassesCard";
import useClasses from "../../hooks/useClasses";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Loading from "../../components/Loading/Loading";

const Classes = () => {
  const [classes] = useClasses();
  console.log(classes.length < 0);

  useEffect(() => {
    AOS.init();
  }, []);

  if (classes.length === 0) {
    return <Loading />;
  }

  return (
    <div>
      <Helmet>
        <title>Classes || WarriorCamp</title>
      </Helmet>
      <SectionTitle title="All Classes"></SectionTitle>
      <div className="mt-16">
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
