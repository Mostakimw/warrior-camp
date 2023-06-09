import { FaTrashAlt } from "react-icons/fa";
import SectionTitle from "../../../../components/SectionTitle";
import useClasses from "../../../../hooks/useClasses";

const ManageClasses = () => {
  const classes = useClasses();
  console.log(classes);

  const handleStatus = (status, id) => {
    console.log(status, id);
    fetch(`http://localhost:5000/classes/${id}/status`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div className="w-full">
      <SectionTitle title="All Classes" />

      <div className="overflow-x-auto mt-12 w-full">
        <table className="table">
          {/* head */}
          <thead className="bg-gray-800 text-white">
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Class Name</th>
              <th>Instructor</th>
              <th>Email</th>
              <th>Available Seats</th>
              <th>Price</th>
              <th>Status</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((singleClass, index) => (
              <tr key={singleClass._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-20 h-20">
                        <img
                          src={singleClass?.classThumbnail}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{singleClass?.className}</td>
                <td>{singleClass?.userName}</td>
                <td>gg.gg.com</td>
                <td>{singleClass?.availableSeats}</td>
                <td>${singleClass?.price}</td>
                <td>
                  {singleClass?.status == "approved" && (
                    <span className="text-success uppercase">Approved</span>
                  )}
                  {singleClass?.status == "denied" && (
                    <span className="text-error uppercase">Denied</span>
                  )}
                  {singleClass?.status == "pending" && (
                    <>
                      <button
                        onClick={() =>
                          handleStatus("approved", singleClass._id)
                        }
                        className="bg-success btn btn-xs"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => handleStatus("pending", singleClass._id)}
                        className="bg-info btn btn-xs"
                      >
                        Pending
                      </button>
                      <button
                        onClick={() => handleStatus("denied", singleClass._id)}
                        className="bg-error btn btn-xs"
                      >
                        Deny
                      </button>
                    </>
                  )}
                </td>
                <td>
                  <button className="btn  btn-xs">
                    <FaTrashAlt className="text-error text-2xl" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageClasses;
