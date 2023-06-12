import { FaGoogle } from "react-icons/fa";
import { useAuth } from "../../hooks/useAuth";
import { saveUserToDb } from "../../api/Auth";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleLogin } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname || "/";
  const handleGoogleLogin = () => {
    googleLogin()
      .then((data) => {
        // save user to db
        saveUserToDb(data.user);
        navigate(from, { replace: true });
      })
      .catch(() => {});
  };
  return (
    <div>
      <div className="flex flex-col items-center mb-4">
        <div className="divider">Or</div>
        <p>Login with</p>
        <button
          onClick={handleGoogleLogin}
          className="btn btn-circle btn-outline mt-4"
        >
          <FaGoogle className="text-red-400" />
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
