import { FaTrashAlt } from "react-icons/fa";
import SectionTitle from "../../../../components/SectionTitle";
import { useEffect, useState } from "react";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUsers(data);
      });
  }, []);

  const handleRole = (role, id) => {
    console.log(role, id);
    fetch(`http://localhost:5000/users/${id}/role`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ role }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <>
      <SectionTitle title="Manage All Users" />

      <div className="overflow-x-auto mt-12 w-full">
        <table className="table">
          {/* head */}
          <thead className="bg-gray-800 text-white">
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th className="pl-20">Role</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src="https://i.ibb.co/wKycvGF/portrait-smiling-chef-uniform.jpg"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <th>
                  <button
                    onClick={() => handleRole("admin", user._id)}
                    className="btn w-40 btn-xs"
                  >
                    Make An Admin
                  </button>
                  <button className="btn w-40 btn-xs block mt-2">
                    Make An Instructor
                  </button>
                </th>
                <th>
                  <button className="btn btn-ghost btn-xs">
                    <FaTrashAlt className="text-error text-2xl" />
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ManageUsers;
