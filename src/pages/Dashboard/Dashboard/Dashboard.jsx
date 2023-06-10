import { Link, Outlet } from "react-router-dom";
import AdminDashboard from "./AdminDashboard";
import InstructorDashboard from "./InstructorDashboard";
import { FaHome } from "react-icons/fa";
import StudentDashboard from "./StudentDashboard";
import useAdmin from "../../../hooks/useAdmin";
import useInstructor from "../../../hooks/useInstructor";
import { useAuth } from "../../../hooks/useAuth";
import Admin from "../Admin/Admin/Admin";

const Dashboard = () => {
  const { logoutUser } = useAuth();

  const handleLogout = () => {
    logoutUser()
      .then(() => {})
      .catch(() => {});
  };
  const [isAdmin, isAdminLoading] = useAdmin();
  const [isInstructor, isInstructorLoading] = useInstructor();
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center w-[90%] mx-auto">
          {/* Page content here */}
          <Admin />
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
          <ul className="menu p-4 w-80 font-semibold h-full bg-[#848C2F] ">
            <li>
              <h1 className="bg-yellow-500 ">Warrior camp</h1>
            </li>
            {/* Sidebar content here */}
            {/* {isAdmin ? <AdminDashboard /> : <StudentDashboard />}
            {isInstructor ? <InstructorDashboard /> : <StudentDashboard />} */}
            {!isAdminLoading && !isInstructorLoading && (
              <>
                {isAdmin ? (
                  <AdminDashboard />
                ) : isInstructor ? (
                  <InstructorDashboard />
                ) : (
                  <StudentDashboard />
                )}
              </>
            )}

            <div className="divider"></div>
            <li>
              <Link to="/">
                <FaHome className="text-[#FCC044] text-2xl" />
                Home
              </Link>
            </li>
            <li>
              <button
                onClick={handleLogout}
                className="btn pt-4 mt-8 hover:text-gray-100"
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
