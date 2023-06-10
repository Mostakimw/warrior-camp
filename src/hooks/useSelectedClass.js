import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useAuth } from "./useAuth";

const useSelectedClass = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data: selectedClasses = [], refetch } = useQuery({
    queryKey: ["selected-classes", user?.email],
    queryFn: async () => {
      const res = await axiosSecure(`selected-classes?email=${user?.email}`);
      return res.data;
    },
  });
  return [selectedClasses, refetch];
};

export default useSelectedClass;
