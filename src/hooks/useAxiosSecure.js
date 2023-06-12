import axios from "axios";
import { useEffect } from "react";
import { useAuth } from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
  baseURL: `${import.meta.env.VITE_API_LINK}`,
});

const useAxiosSecure = () => {
  const { logoutUser } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    axiosSecure.interceptors.request.use((config) => {
      const token = `Bearer ${localStorage.getItem("access-token")}`;
      if (token) {
        config.headers.Authorization = token;
      }
      return config;
    });

    axiosSecure.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (
          error.response &&
          (error.response.status === 401 || error.response.status === 403)
        ) {
          // await logoutUser();
          // navigate("/login");
        }
        return Promise.reject(error);
      }
    );
  }, [logoutUser, navigate]);
  return [axiosSecure];
};
export default useAxiosSecure;
