import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";

export const useAuth = () => {
  const auth = useContext(AuthContext);
  return auth;
};
