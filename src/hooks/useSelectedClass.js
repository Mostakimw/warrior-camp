import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useAuth } from "./useAuth";

const useSelectedClass = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data: selectedClasses = [], refetch } = useQuery({
    queryKey: ["selected-classes", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(`selected-classes?email=${user?.email}`);
      return res.data;
    },
  });
  return [selectedClasses, refetch];
};

export default useSelectedClass;
