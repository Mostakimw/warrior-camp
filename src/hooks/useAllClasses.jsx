import { useAuth } from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useAllClasses = () => {
  const { loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data: classes = [], refetch } = useQuery({
    queryKey: ["classes"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure("/all-classes");
      return res.data;
    },
  });
  return [classes, refetch];
};
export default useAllClasses;
