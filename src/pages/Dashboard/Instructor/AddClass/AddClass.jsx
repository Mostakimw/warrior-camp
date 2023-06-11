import Swal from "sweetalert2";
import SectionTitle from "../../../../components/SectionTitle";
import { useAuth } from "../../../../hooks/useAuth";
import shortid from "shortid";

const AddClass = () => {
  const { user } = useAuth();

  // handle submit form
  const handleSubmitForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const className = form.className.value;
    const classThumbnail = form.classThumbnail.value;
    const email = form.email.value;
    const userName = form.userName.value;
    const price = parseFloat(form.price.value);
    const availableSeats = parseInt(form.availableSeats.value);
    const description = form.description.value;

    const courseId = shortid.generate();

    const classData = {
      courseId,
      className,
      classThumbnail,
      email,
      userName,
      price,
      availableSeats,
      description,
      status: "pending",
      enroll: 0,
      isEnrolled: false,
    };

    // posting classdata to db

    fetch("http://localhost:5000/classes", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(classData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Great...",
            text: "Your class has been added!",
          });
        }
      });
  };
  return (
    <div className="w-full px-10">
      <SectionTitle title="Add Your Class"></SectionTitle>
      <form
        onSubmit={handleSubmitForm}
        className="grid grid-cols-2 gap-4 my-10 p-16 bg-red-100 rounded-md shadow-lg w-full"
      >
        <div className="m-0 p-0">
          <label>Class Name:</label>
          <input
            type="text"
            name="className"
            className="w-2/3 py-2 add-class-input "
          />
        </div>
        <div>
          <label>Thumbnail URL:</label>
          <input
            type="text"
            name="classThumbnail"
            className="w-2/3 py-2 add-class-input"
          />
        </div>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="userName"
            defaultValue={user?.displayName}
            className="w-2/3 py-2 add-class-input"
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="text"
            name="email"
            defaultValue={user?.email}
            className="w-2/3 py-2 add-class-input"
          />
        </div>

        <div>
          <label>Price:</label>
          <input
            type="number"
            name="price"
            className="w-2/3 py-2 add-class-input"
          />
        </div>
        <div>
          <label>Seats:</label>
          <input
            type="number"
            name="availableSeats"
            className="w-2/3 py-2 add-class-input"
          />
        </div>
        <div className="col-span-2">
          <label>Description:</label>
          <textarea
            type="text"
            name="description"
            className="w-2/3 py-2 add-class-input"
            rows={5}
            cols={5}
          />
        </div>
        <div className="w-1/3 mx-auto mt-8 pb-6 col-span-2">
          <button className="btn btn-primary w-full">Add Class</button>
        </div>
      </form>
    </div>
  );
};

export default AddClass;
