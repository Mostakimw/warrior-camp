import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import ClassCard from "./ClassCard";

const Classes = () => {
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    fetch("/classes.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setClasses(data);
      });
  }, []);
  return (
    <div>
      <SectionTitle title="All Classes"></SectionTitle>
      <h1>all classes</h1>
      <div>
        {classes.map((singleClass) => (
          <ClassCard
            key={singleClass.className}
            singleClass={singleClass}
          ></ClassCard>
        ))}
      </div>
    </div>
  );
};

export default Classes;
