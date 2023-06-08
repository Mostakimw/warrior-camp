import { useEffect, useState } from "react";
import SectionTitle from "../../../../components/SectionTitle";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { useAuth } from "../../../../hooks/useAuth";

const MyClasses = () => {
  const { user } = useAuth();
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/classes/instructor?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setClasses(data);
      });
  }, []);
  // TODO: have to use tanstack and refetch
  // useEffect(() => {
  //   fetch("http://localhost:5000/users")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setUsers(data);
  //     });
  // }, []);
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
                <td>{singleClass.className}</td>
                <td>{singleClass.price}</td>
                <td>seat</td>
                <td>todo</td>
                <td>feedback</td>
                <td>
                  <button className="btn  btn-xs">
                    <FaEdit className="text-error text-2xl" />
                  </button>
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
