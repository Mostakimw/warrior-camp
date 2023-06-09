import { NavLink } from "react-router-dom";
import { MdOutlineFlightClass } from "react-icons/md";
import { MdOutlineSportsMartialArts } from "react-icons/md";
// import Profile from "./Profile";

const InstructorDashboard = () => {
  return (
    <>
      <li>
        {/* <Profile /> */}
        <NavLink to="/dashboard/add-class">
          <MdOutlineFlightClass className="text-[#FCC044] text-2xl" />
          Add a Class
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/my-classes">
          <MdOutlineSportsMartialArts className="text-[#FCC044] text-2xl" />
          My Classes
        </NavLink>
      </li>
    </>
  );
};

export default InstructorDashboard;
