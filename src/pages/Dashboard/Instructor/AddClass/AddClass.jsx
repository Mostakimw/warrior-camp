import SectionTitle from "../../../../components/SectionTitle";

const AddClass = () => {
  return (
    <div className="w-full px-24">
      <SectionTitle title="Add Your Class"></SectionTitle>
      <form className="grid grid-cols-2 gap-4 mt-10 bg-red-100 p-16 rounded-md shadow-lg">
        <div className="m-0 p-0">
          <label>Class Name:</label>
          <input type="text" name="class" className="w-2/3 add-class-input " />
        </div>
        <div>
          <label>Image URL:</label>
          <input type="text" name="class" className="w-2/3 add-class-input" />
        </div>
        <div>
          <label>Email:</label>
          <input type="text" name="class" className="w-2/3 add-class-input" />
        </div>
        <div>
          <label>Name:</label>
          <input type="text" name="class" className="w-2/3 add-class-input" />
        </div>
        <div>
          <label>Price:</label>
          <input type="text" name="class" className="w-2/3 add-class-input" />
        </div>
        <div>
          <label>Available Seats:</label>
          <input type="text" name="class" className="w-2/3 add-class-input" />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            type="text"
            name="class"
            className="w-2/3 add-class-input"
            rows={5}
            cols={5}
          />
        </div>
      </form>
      <div className="w-1/3 mx-auto mt-10">
        <input
          type="submit"
          value="Add Class"
          className="btn btn-primary w-full"
        />
      </div>
    </div>
  );
};

export default AddClass;
