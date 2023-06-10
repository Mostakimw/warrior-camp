import SectionTitle from "../../../../components/SectionTitle";
import { FaTrashAlt } from "react-icons/fa";
import useSelectedClass from "../../../../hooks/useSelectedClass";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";

const SelectedClass = () => {
  const [selectedClasses, refetch] = useSelectedClass();
  const [axiosSecure] = useAxiosSecure();
  const handleDeleteClass = (id) => {
    console.log("clicked");
    Swal.fire({
      title: "Are you sure?",
      text: `You want to remove this from your select list?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/selected-classes/${id}`).then((res) => {
          console.log(res.data);
          if (res.data.deletedCount > 0) {
            refetch();
            toast.success("Successfully Removed!");
          }
        });
      }
    });
  };
  return (
    <div className="w-full">
      <SectionTitle title="Selected Classes" />
      <div className="flex items-center justify-between mt-10">
        <h1 className="font-semibold text-2xl">
          Total Selected: {selectedClasses.length}
        </h1>
      </div>

      <div className="overflow-x-auto mt-6 w-full">
        <table className="table">
          {/* head */}
          <thead className="bg-gray-800 text-white">
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Class Name</th>
              <th>Instructor Name</th>
              <th>Enrolled Student</th>
              <th>Seats Available</th>
              <th>Delete</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {selectedClasses.map((singleClass, index) => (
              <tr key={singleClass._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-28 h-28">
                        <img
                          src={singleClass.classThumbnail}
                          alt="selected class thumbnail"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{singleClass?.className}</td>
                <td>{singleClass?.userName}</td>
                <td>${singleClass?.price}</td>
                <td>{singleClass?.availableSeats}</td>
                <td>
                  <button
                    onClick={() => handleDeleteClass(singleClass._id)}
                    className="btn  btn-xs"
                  >
                    <FaTrashAlt className="text-error text-2xl" />
                  </button>
                </td>
                <td>
                  <Link
                    to={`/dashboard/selected-class/payment/${singleClass._id}`}
                    className="btn px-8 py-2 text-white font-semibold btn-info"
                  >
                    Pay
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SelectedClass;
