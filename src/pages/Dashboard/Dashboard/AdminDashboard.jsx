import { NavLink } from "react-router-dom";
import { MdFlightClass } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi";
import Profile from "./Profile";

const AdminDashboard = () => {
  return (
    <>
      <Profile />
      <li>
        <NavLink to="/dashboard/manage-classes">
          <MdFlightClass className="text-[#FCC044] text-2xl" />
          Manage Classes
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/manage-users" className="text-blue-500">
          <HiUserGroup className="text-[#FCC044] text-2xl" />
          Manage Users
        </NavLink>
      </li>
    </>
  );
};

export default AdminDashboard;
