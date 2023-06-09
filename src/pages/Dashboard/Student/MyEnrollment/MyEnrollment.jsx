import SectionTitle from "../../../../components/SectionTitle";

const MyEnrollment = () => {
  return (
    <div className="w-full">
      <SectionTitle title="Enrolled Classes" />
      <div className="grid md:grid-cols-2 mt-12">
        <div>
          <h1>Image</h1>
        </div>
        <div>
          <p>title</p>
          <h1>details</h1>
        </div>
      </div>
    </div>
  );
};

export default MyEnrollment;
