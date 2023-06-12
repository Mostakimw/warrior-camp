import { FaTrashAlt } from "react-icons/fa";
import SectionTitle from "../../../../components/SectionTitle";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";

const ManageUsers = () => {
  const [axiosSecure] = useAxiosSecure();

  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    return res.data;
  });

  // ! handle admin and instructor making
  const handleRole = (role, id) => {
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
        axiosSecure.put(`/users/${id}/role`, { role }).then((response) => {
          const data = response.data;
          if (data.modifiedCount > 0) {
            refetch();
            Swal.fire("Done!", `This is person is now ${role}.`, "success");
          }
        });
      }
    });
  };

  // delete user
  const handleDeleteUser = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: `You want to remove this Person?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${user._id}`).then((response) => {
          const data = response.data;
          if (data.deletedCount > 0) {
            refetch();
            Swal.fire("Deleted!", `This is now removed.`, "success");
          }
        });
      }
    });
  };

  return (
    <>
      <Helmet>
        <title>Manage Users || WarriorCamp</title>
      </Helmet>
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
                          src={user?.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{user?.name}</td>
                <td>{user?.email}</td>
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
                        onClick={() => handleRole("admin", user?._id)}
                        className="btn w-40 btn-xs block"
                      >
                        Make An Admin
                      </button>
                      <button
                        onClick={() => handleRole("instructor", user?._id)}
                        className="btn w-40 btn-xs block mt-2"
                      >
                        Make An Instructor
                      </button>
                    </>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleDeleteUser(user)}
                    className="btn btn-ghost btn-xs"
                  >
                    <FaTrashAlt className="text-error text-2xl" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ManageUsers;
