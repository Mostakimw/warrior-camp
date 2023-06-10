import { useQuery } from "@tanstack/react-query";
import { useAuth } from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const usePaymentHistory = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();

  const { data: paymentHistory = [], refetch } = useQuery({
    queryKey: ["enroll", user?.email],
    queryFn: async () => {
      const res = await axiosSecure(
        `http://localhost:5000/enroll?email=${user?.email}`
      );
      return res.data;
    },
  });
  return [paymentHistory, refetch];
};
export default usePaymentHistory;
