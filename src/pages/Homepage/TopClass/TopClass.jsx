import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../components/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import TopClassCard from "./TopClassCard";

const TopClass = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: topClass = [] } = useQuery({
    queryKey: ["instructors"],
    queryFn: async () => {
      const res = await axiosSecure(`/instructor`);
      console.log(res.data);
      return res.data;
    },
  });

  return (
    <div className="mt-20">
      <SectionTitle title="Our Top Classes"></SectionTitle>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
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
