import SectionTitle from "../../components/SectionTitle";
import InstructorCard from "./InstructorCard";
import useInstructors from "../../hooks/useInstructors";

const Instructors = () => {
  const [instructors] = useInstructors();
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
