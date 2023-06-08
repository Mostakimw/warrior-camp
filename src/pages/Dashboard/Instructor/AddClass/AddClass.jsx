import Swal from "sweetalert2";
import SectionTitle from "../../../../components/SectionTitle";
import { useAuth } from "../../../../hooks/useAuth";

const AddClass = () => {
  const { user } = useAuth();
  const handleSubmitForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const className = form.className.value;
    const classThumbnail = form.classThumbnail.value;
    const email = form.email.value;
    const userName = form.userName.value;
    const price = form.price.value;
    const description = form.description.value;

    const classData = {
      className,
      classThumbnail,
      email,
      userName,
      price,
      description,
      status: "pending",
    };

    console.log(classData);

    fetch("http://localhost:5000/classes", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(classData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
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
    <div className="w-full px-24">
      <SectionTitle title="Add Your Class"></SectionTitle>
      <form
        onSubmit={handleSubmitForm}
        className="grid grid-cols-2 gap-4 mt-10 bg-red-100 p-16 rounded-md shadow-lg"
      >
        <div className="m-0 p-0">
          <label>Class Name:</label>
          <input
            type="text"
            name="className"
            className="w-2/3 add-class-input "
          />
        </div>
        <div>
          <label>Image URL:</label>
          <input
            type="text"
            name="classThumbnail"
            className="w-2/3 add-class-input"
          />
        </div>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="userName"
            defaultValue={user?.displayName}
            className="w-2/3 add-class-input"
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="text"
            name="email"
            defaultValue={user?.email}
            className="w-2/3 add-class-input"
          />
        </div>

        <div>
          <label>Price:</label>
          <input type="text" name="price" className="w-2/3 add-class-input" />
        </div>
        <div>
          <label>Available Seats:</label>
          <input
            type="text"
            name="availableSeats"
            className="w-2/3 add-class-input"
          />
        </div>
        <div className="col-span-2">
          <label>Description:</label>
          <textarea
            type="text"
            name="description"
            className="w-2/3 add-class-input"
            rows={5}
            cols={5}
          />
        </div>
        <div className="w-1/3 mx-auto mt-10 pb-6">
          <button className="btn btn-primary w-full">Add Class</button>
        </div>
      </form>
    </div>
  );
};

export default AddClass;
