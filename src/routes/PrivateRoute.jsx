import { Navigate, useLocation } from "react-router-dom";
import Loading from "../components/Loading/Loading";
import { useAuth } from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  console.log(user, loading);
  const location = useLocation();
  console.log(location);
  if (loading) {
    return <Loading></Loading>;
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
