import { toast } from "react-hot-toast";
import SectionTitle from "../../../../components/SectionTitle";
import useAllClasses from "../../../../hooks/useAllClasses";
import { Helmet } from "react-helmet-async";

const ManageClasses = () => {
  const [classes, refetch] = useAllClasses();

  const handleStatus = (status, id) => {
    fetch(`${import.meta.env.VITE_API_LINK}/classes/${id}/status`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status }),
    })
      .then((res) => res.json())
      .then(() => {
        refetch();
        if (status === "approved") {
          toast(`Class has been ${status}`, {
            icon: "👏",
            style: {
              borderRadius: "10px",
              background: "#848C2F",
              color: "#fff",
            },
          });
        } else if (status === "denied") {
          toast(`Class has been ${status}`, {
            icon: "👏",
            style: {
              borderRadius: "10px",
              background: "#FF4545",
              color: "#fff",
            },
          });
        }
      });
  };

  return (
    <div className="w-full">
      <Helmet>
        <title>Manage Classes || WarriorCamp</title>
      </Helmet>
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
              {/* // TODO: have to work with feedback */}
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
                        <img src={singleClass?.classThumbnail} alt="" />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{singleClass?.className}</td>
                <td>{singleClass?.userName}</td>
                <td>{singleClass?.email}</td>
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
                        onClick={() => handleStatus("denied", singleClass._id)}
                        className="bg-error btn btn-xs"
                      >
                        Deny
                      </button>
                    </>
                  )}
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
