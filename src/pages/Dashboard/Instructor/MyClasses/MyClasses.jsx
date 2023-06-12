import SectionTitle from "../../../../components/SectionTitle";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { useAuth } from "../../../../hooks/useAuth";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const MyClasses = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();

  const { data: classes = [], refetch } = useQuery({
    queryKey: ["classes", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/instructor-classes?email=${user?.email}`
      );
      return res.data;
    },
  });

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: `You want to delete this class?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/classes/${id}`).then((response) => {
          const data = response.data;
          if (data.deletedCount > 0) {
            refetch();
            Swal.fire("Deleted!", `This class has been deleted!.`, "success");
          }
        });
      }
    });
  };
  return (
    <div className="w-full">
      <Helmet>
        <title>My Classes || WarriorCamp</title>
      </Helmet>
      <SectionTitle title="All Classes" />

      <div className="overflow-x-auto mt-12 w-full">
        <table className="table">
          {/* head */}
          <thead className="bg-gray-800 text-white">
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Enrolled Student</th>
              <th>Seats Available</th>
              <th>Status</th>
              <th>Feedback</th>
              <th>Update</th>
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
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={singleClass.classThumbnail}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{singleClass?.className}</td>
                <td>{singleClass?.price}</td>
                <td>{singleClass?.availableSeats}</td>
                <td>
                  {singleClass?.status == "approved" && (
                    <span className="text-success uppercase">Approved</span>
                  )}
                  {singleClass?.status == "denied" && (
                    <span className="text-error uppercase">Denied</span>
                  )}
                  {singleClass?.status == "pending" && (
                    <span className="text-info uppercase">Pending</span>
                  )}
                </td>
                <td>feedback</td>
                <td>
                  <Link to={`/dashboard/update-class/${singleClass._id}`}>
                    <button className="btn  btn-xs">
                      <FaEdit className="text-error text-2xl" />
                    </button>
                  </Link>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(singleClass._id)}
                    className="btn  btn-xs"
                  >
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

export default MyClasses;
