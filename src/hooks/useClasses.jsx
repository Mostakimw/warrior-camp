import { useAuth } from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useClasses = () => {
  const { loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data: classes = [], refetch } = useQuery({
    queryKey: ["classes"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure("/classes");
      return res.data;
    },
  });
  return [classes, refetch];
};
export default useClasses;
