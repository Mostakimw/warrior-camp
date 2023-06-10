import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useSelectedClass = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: selectedClasses = [], refetch } = useQuery({
    queryKey: ["selected-classes"],
    queryFn: async () => {
      const res = await axiosSecure("/selected-classes");
      const data = res.data;
      console.log("data from useselectedclass", data);
      return res.data;
    },
  });
  return [selectedClasses, refetch];
};

export default useSelectedClass;
