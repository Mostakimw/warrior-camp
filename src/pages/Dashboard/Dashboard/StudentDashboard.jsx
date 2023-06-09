import { NavLink } from "react-router-dom";
import { BiSelectMultiple } from "react-icons/bi";
import { CgEreader } from "react-icons/cg";
import { MdPayment } from "react-icons/md";
import Profile from "./Profile";

const StudentDashboard = () => {
  return (
    <>
      <Profile />
      <li>
        <NavLink to="/dashboard/selected-class">
          <BiSelectMultiple className="text-[#FCC044] text-2xl" />
          Selected Classes
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/enrollment">
          <CgEreader className="text-[#FCC044] text-2xl" />
          My Enrollment
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/payment-history">
          <MdPayment className="text-[#FCC044] text-2xl" />
          Payment History
        </NavLink>
      </li>
    </>
  );
};

export default StudentDashboard;
