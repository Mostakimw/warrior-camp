import { Link, NavLink } from "react-router-dom";
import Container from "../../Container";
import { useAuth } from "../../../hooks/useAuth";

const Navbar = () => {
  const { user, logoutUser } = useAuth();

  const handleLogout = () => {
    logoutUser()
      .then(() => {})
      .catch(() => {});
  };
  const menuItem = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/instructors">Instructors</NavLink>
      </li>
      <li>
        <NavLink to="/classes">Classes</NavLink>
      </li>
    </>
  );
  const userMenu = (
    <>
      {user ? (
        <>
          <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className="text-gray-800 bg-gray-100 hover:cursor-pointer"
            >
              <img
                src={user?.photoURL}
                className="inline-flex items-center justify-center w-12 h-12 mr-2 text-white transition-all duration-200 rounded-full"
                alt=""
                title={user?.displayName}
              />
            </label>
            <ul
              tabIndex={0}
              className="menu dropdown-content shadow bg-base-100 text-gray-800 w-40 z-10"
            >
              <li>
                <Link to="/dashboard" className="btn pt-4">
                  Dashboard
                </Link>
              </li>
              <li>
                <button onClick={handleLogout} className="btn pt-4 mt-3">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </>
      ) : (
        <Link to="/login" className="btn">
          Login
        </Link>
      )}
    </>
  );
  return (
    <Container>
      <div className="navbar bg-base-100 p-0">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItem}
            </ul>
          </div>
          <a className="hover:cursor-pointer normal-case text-xl p-0">
            WarriorCamp
          </a>
        </div>
        <div className="navbar-center hidden lg:flex my-nav">
          <ul className="menu menu-horizontal px-1">{menuItem}</ul>
        </div>
        <div className="navbar-end my-nav">{userMenu}</div>
      </div>
    </Container>
  );
};

export default Navbar;
