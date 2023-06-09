import SectionTitle from "../../../components/SectionTitle";
import useClasses from "../../../hooks/useClasses";
import ClassCard from "./ClassCard";

const Class = () => {
  const classes = useClasses();

  return (
    <div className="mt-20">
      <SectionTitle title="Our Top Classes"></SectionTitle>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
        {classes.map((singleClass) => (
          <ClassCard
            key={singleClass._id}
            singleClass={singleClass}
          ></ClassCard>
        ))}
      </div>
    </div>
  );
};

export default Class;
