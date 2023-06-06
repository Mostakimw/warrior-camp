import { FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
  return (
    <div>
      <div className="flex flex-col items-center mb-10">
        <div className="divider">Or</div>
        <p>Login with</p>
        <button className="btn btn-circle btn-outline mt-4">
          <FaGoogle className="text-red-400" />
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
