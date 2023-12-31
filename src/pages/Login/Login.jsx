import { useForm } from "react-hook-form";
import SocialLogin from "./SocialLogin";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import image from "../../assets/login.svg";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const { loginUser } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPass = () => {
    setShowPassword(!showPassword);
  };
  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    loginUser(data?.email, data?.password)
      .then(() => {
        navigate(from, { replace: true });
      })
      .catch(() => {});
  };
  return (
    <div className="h-[80vh] md:flex mt-10">
      <Helmet>
        <title>Login || WarriorCamp</title>
      </Helmet>
      <div className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center hidden">
        <div>
          <img src={image} alt="" />
        </div>
        <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
      </div>
      <div className="px-16 flex flex-col md:w-1/2  py-10 justify-center bg-white">
        <form onSubmit={handleSubmit(onSubmit)} className="bg-white">
          <h1 className="text-gray-800 font-bold text-2xl mb-1">Hello!</h1>
          <p className="text-sm font-normal text-[#FCC044] mb-7">
            Welcome To Warrior
          </p>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
            <input
              className="pl-2 outline-none border-none w-full"
              type="text"
              {...register("email", { required: true })}
              placeholder="Email Address"
            />
          </div>
          {errors.email && (
            <span className="text-error">Email is required</span>
          )}
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mt-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clipRule="evenodd"
              />
            </svg>
            <input
              className="pl-2 outline-none border-none w-full"
              type={showPassword ? "text" : "password"}
              {...register("password", { required: true })}
              placeholder="Password"
            />
            {showPassword ? (
              <FaEye
                className="hover:cursor-pointer"
                onClick={handleShowPass}
              />
            ) : (
              <FaEyeSlash
                className="hover:cursor-pointer"
                onClick={handleShowPass}
              />
            )}
          </div>
          {errors.password && (
            <span className="text-error">Password is required</span>
          )}
          <button
            type="submit"
            className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
          >
            Login
          </button>
          <span className="text-sm ml-2 hover:text-blue-500 cursor-pointer">
            Forgot Password ?
          </span>
        </form>
        <SocialLogin />
        <div className="text-center text-sm">
          <p>
            New to Warrior? Please{" "}
            <Link
              to="/registration"
              className="btn btn-outline btn-sm border-[#FCC044]"
            >
              Registration
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
