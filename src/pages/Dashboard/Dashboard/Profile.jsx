import { NavLink } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";

const Profile = () => {
  const { user } = useAuth();
  const image = user?.photoURL || user?.photoUrl;
  return (
    <>
      <li className="w-full">
        <img src={image} className="rounded-full w-44 h-44 mx-auto" alt="" />
      </li>
      <div className="w-full text-center my-5">
        <NavLink
          to="/dashboard/my-profile"
          className="underline block text-2xl text-gray-100"
        >
          {user?.displayName}
        </NavLink>
        <h2 className=" underline mt-2 text-gray-100">{user?.email}</h2>
      </div>
    </>
  );
};

export default Profile;
