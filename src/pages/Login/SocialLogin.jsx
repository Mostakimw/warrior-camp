import { FaGoogle } from "react-icons/fa";
import { useAuth } from "../../hooks/useAuth";
import { saveUserToDb } from "../../api/Auth";

const SocialLogin = () => {
  const { googleLogin } = useAuth();
  const handleGoogleLogin = () => {
    console.log("google clicked");
    googleLogin()
      .then((data) => {
        console.log(data.user);
        // save user to db
        saveUserToDb(data.user);
      })
      .catch((err) => console.log(err.message));
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
