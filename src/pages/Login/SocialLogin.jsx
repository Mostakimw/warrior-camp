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
        // const loggedUser = {
        //   email: data?.user?.email,
        //   name: data?.user?.displayName,
        //   role: "student",
        // };
        // fetch("http://localhost:5000/users", {
        //   method: "POST",
        //   headers: {
        //     "content-type": "application/json",
        //   },
        //   body: JSON.stringify(loggedUser),
        // })
        //   .then((res) => res.json())
        //   .then((result) => {
        //     console.log("user posted to db", result);
        //   });
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
