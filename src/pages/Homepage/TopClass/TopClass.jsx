import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../components/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import TopClassCard from "./TopClassCard";

const TopClass = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: topClass = [] } = useQuery({
    queryKey: ["classes"],
    queryFn: async () => {
      const res = await axiosSecure(`/classes?limit=${6}&sortBy=enroll`);
      return res.data;
    },
  });

  return (
    <div className="mt-28">
      <SectionTitle title="Our Top Classes"></SectionTitle>
      <div className="grid lg:gap-16 md:gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16">
        {topClass.map((singleClass) => (
          <TopClassCard
            key={singleClass?._id}
            singleClass={singleClass}
          ></TopClassCard>
        ))}
      </div>
    </div>
  );
};

export default TopClass;
