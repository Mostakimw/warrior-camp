import Swal from "sweetalert2";
import SectionTitle from "../../../../components/SectionTitle";
import { useLoaderData } from "react-router-dom";

const UpdateClass = () => {
  const classDataOld = useLoaderData();
  const {
    _id,
    className,
    classThumbnail,
    price,
    availableSeats,
    description,
    email,
    userName,
  } = classDataOld;
  console.log(className);
  console.log("old class data", classDataOld);
  // handle submit form
  const handleSubmitForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const className = form.className.value;
    const classThumbnail = form.classThumbnail.value;
    const price = form.price.value;
    const availableSeats = form.availableSeats.value;
    const description = form.description.value;

    const classData = {
      _id,
      className,
      classThumbnail,
      price,
      availableSeats,
      description,
    };

    console.log(classData);

    // updating class data to db

    fetch(`http://localhost:5000/classes/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(classData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            icon: "success",
            title: "Great...",
            text: "Your class has been updated!",
          });
        }
      });
  };
  return (
    <div className="w-full px-10">
      <SectionTitle title="Update This Class"></SectionTitle>
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
            defaultValue={className}
          />
        </div>
        <div>
          <label>Image URL:</label>
          <input
            type="text"
            name="classThumbnail"
            className="w-2/3 py-2 add-class-input"
            defaultValue={classThumbnail}
          />
        </div>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="userName"
            value={userName}
            className="w-2/3 py-2 add-class-input"
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="text"
            name="email"
            value={email}
            className="w-2/3 py-2 add-class-input"
          />
        </div>

        <div>
          <label>Price:</label>
          <input
            type="number"
            name="price"
            className="w-2/3 py-2 add-class-input"
            defaultValue={price}
          />
        </div>
        <div>
          <label>Available Seats:</label>
          <input
            type="number"
            name="availableSeats"
            className="w-2/3 py-2 add-class-input"
            defaultValue={availableSeats}
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
            defaultValue={description}
          />
        </div>
        <div className="w-1/3 mx-auto mt-8 pb-6 col-span-2">
          <button className="btn btn-primary w-full">Add Class</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateClass;
