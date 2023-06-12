import { useAuth } from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

// it was for getting the instructors data from db
const useInstructors = () => {
  const { loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data: instructors = [] } = useQuery({
    queryKey: ["classes"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure("/classes");
      return res.data;
    },
  });
  return [instructors];
};

export default useInstructors;
