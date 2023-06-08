import { FaTrashAlt } from "react-icons/fa";
import SectionTitle from "../../../../components/SectionTitle";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  // TODO: have to use tanstack and refetch
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUsers(data);
      });
  }, []);

  // ! handle admin and instructor making
  const handleRole = (role, id) => {
    console.log(role, id);
    Swal.fire({
      title: "Are you sure?",
      text: `You want to make this Person ${role}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes!",
    }).then((result) => {
      if (result.isConfirmed) {
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
        Swal.fire("Done!", `This is person is now ${role}.`, "success");
      }
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
              <th className="pl-[82px] lg:pl-[100px]">Role</th>
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
                          src={user.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td className=" flex flex-col items-center justify-center">
                  {user?.role == "admin" && (
                    <span className="text-success font-semibold pt-4">
                      Admin
                    </span>
                  )}
                  {user?.role == "instructor" && (
                    <span className=" text-center text-info font-semibold pt-4">
                      Instructor
                    </span>
                  )}
                  {user?.role == "student" && (
                    <>
                      <button
                        onClick={() => handleRole("admin", user._id)}
                        className="btn w-40 btn-xs block"
                      >
                        Make An Admin
                      </button>
                      <button
                        onClick={() => handleRole("instructor", user._id)}
                        className="btn w-40 btn-xs block mt-2"
                      >
                        Make An Instructor
                      </button>
                    </>
                  )}
                </td>
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
