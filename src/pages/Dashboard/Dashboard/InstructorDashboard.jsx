import { Link } from "react-router-dom";
import { MdOutlineFlightClass } from "react-icons/md";
import { MdOutlineSportsMartialArts } from "react-icons/md";

const InstructorDashboard = () => {
  return (
    <>
      <li>
        <Link to="/dashboard/add-class">
          <MdOutlineFlightClass className="text-[#FCC044] text-2xl" />
          Add a Class
        </Link>
      </li>
      <li>
        <Link to="/dashboard/my-classes">
          <MdOutlineSportsMartialArts className="text-[#FCC044] text-2xl" />
          My Classes
        </Link>
      </li>
    </>
  );
};

export default InstructorDashboard;
