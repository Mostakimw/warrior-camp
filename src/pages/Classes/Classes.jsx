import SectionTitle from "../../components/SectionTitle";
import ClassesCard from "./ClassesCard";
import useClasses from "../../hooks/useClasses";

const Classes = () => {
  const classes = useClasses();
  return (
    <div>
      <SectionTitle title="All Classes"></SectionTitle>
      <h1>all classes</h1>
      <div>
        {classes.map((singleClass) => (
          <ClassesCard
            key={singleClass.className}
            singleClass={singleClass}
          ></ClassesCard>
        ))}
      </div>
    </div>
  );
};

export default Classes;
