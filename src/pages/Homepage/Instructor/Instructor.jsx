import SectionTitle from "../../../components/SectionTitle";
import useInstructors from "../../../hooks/useInstructors";
import InstructorCard from "../../Instructos/InstructorCard";

const Instructor = () => {
  const instructors = useInstructors();
  return (
    <div className="mt-20">
      <SectionTitle title="Our Top Instructors"></SectionTitle>
      <div className="mt-10 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {instructors.map((instructor) => (
          <InstructorCard key={instructor.name}></InstructorCard>
        ))}
      </div>
    </div>
  );
};

export default Instructor;
