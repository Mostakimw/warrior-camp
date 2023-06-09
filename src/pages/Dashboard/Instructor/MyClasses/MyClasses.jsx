import { useEffect, useState } from "react";
import SectionTitle from "../../../../components/SectionTitle";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { useAuth } from "../../../../hooks/useAuth";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const MyClasses = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  // const [classes, setClasses] = useState([]);
  // useEffect(() => {
  //   fetch(`http://localhost:5000/classes/instructor?email=${user?.email}`, {
  //     headers: {
  //       Authorization: `Bearer ${localStorage.getItem("access-token")}`,
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setClasses(data);
  //     });
  // }, [user]);

  const { data: classes = [], refetch } = useQuery({
    queryKey: ["classes", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/classes?email=${user?.email}`);
      return res.data;
    },
  });
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

export default MyClasses;
