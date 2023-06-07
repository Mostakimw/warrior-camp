import { Link } from "react-router-dom";
import { MdFlightClass } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi";

const AdminDashboard = () => {
  return (
    <>
      <li>
        <Link to="/manage-classes">
          <MdFlightClass className="text-[#FCC044] text-2xl" />
          Manage Classes
        </Link>
      </li>
      <li>
        <Link>
          <HiUserGroup className="text-[#FCC044] text-2xl" />
          Manage Users
        </Link>
      </li>
    </>
  );
};

export default AdminDashboard;
