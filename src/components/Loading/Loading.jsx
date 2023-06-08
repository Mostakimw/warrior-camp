import { CirclesWithBar } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="flex justify-center h-[80vh] items-center">
      <CirclesWithBar
        height="100"
        width="100"
        color="#4fa94d"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        outerCircleColor=""
        innerCircleColor=""
        barColor=""
        ariaLabel="circles-with-bar-loading"
      />
    </div>
  );
};

export default Loading;
