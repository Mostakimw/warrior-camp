import { Link, Outlet } from "react-router-dom";
import AdminDashboard from "./AdminDashboard";
import InstructorDashboard from "./InstructorDashboard";
import { FaHome } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center w-9/12 mx-auto">
          {/* Page content here */}
          <Outlet />
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 font-semibold h-full bg-[#848C2F] text-gray-100">
            {/* Sidebar content here */}
            <AdminDashboard />
            <InstructorDashboard />
            <div className="divider"></div>
            <li>
              <Link to="/">
                <FaHome className="text-[#FCC044] text-2xl" />
                Home
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
