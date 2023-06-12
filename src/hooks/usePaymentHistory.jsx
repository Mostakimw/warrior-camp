import { useQuery } from "@tanstack/react-query";
import { useAuth } from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const usePaymentHistory = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();

  const { data: paymentHistory = [], refetch } = useQuery({
    queryKey: ["enroll", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(
        `${import.meta.env.VITE_API_LINK}/enroll?email=${user?.email}`
      );
      return res.data;
    },
  });
  return [paymentHistory, refetch];
};
export default usePaymentHistory;
