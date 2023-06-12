import SectionTitle from "../../../components/SectionTitle";
import useInstructors from "../../../hooks/useInstructors";
import InstructorCard from "../../Instructos/InstructorCard";

const PopularInstructor = () => {
  const [instructors] = useInstructors();
  console.log(instructors);
  return (
    <div className="mt-28">
      <SectionTitle title="Our Top Instructors"></SectionTitle>
      <div className="mt-16 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {instructors.map((instructor) => (
          <InstructorCard
            key={instructor._id}
            instructor={instructor}
          ></InstructorCard>
        ))}
      </div>
    </div>
  );
};

export default PopularInstructor;
