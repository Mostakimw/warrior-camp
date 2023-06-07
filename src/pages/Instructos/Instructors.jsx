import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import InstructorCard from "./InstructorCard";

const Instructors = () => {
  const [instructors, setInstructors] = useState([]);
  useEffect(() => {
    fetch("/instructor.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setInstructors(data);
      });
  }, []);
  return (
    <div>
      <SectionTitle title="Our Instructors"></SectionTitle>
      <h1>instructors: {instructors.length}</h1>
      <div className="mt-10 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {instructors.map((instructor) => (
          <InstructorCard key={instructor.name}></InstructorCard>
        ))}
      </div>
    </div>
  );
};

export default Instructors;
