import { useEffect } from "react";
import { useState } from "react";
import { useAuth } from "../../../../hooks/useAuth";
import Anime from "react-anime";

const Admin = () => {
  const { user } = useAuth();
  const [enrolled, setEnrolled] = useState([]);
  useEffect(() => {
    if (user?.email) {
      fetch("http://localhost:5000/enrolled")
        .then((res) => res.json())
        .then((data) => {
          console.log(data);

          setEnrolled(data);
        });
    }
  }, [user]);

  console.log(enrolled);

  const totalRevenue = enrolled.reduce((sum, enroll) => enroll.price + sum, 0);

  return (
    <div className="relative flex flex-col mb-6 break-words bg-white shadow-lg rounded-2xl bg-clip-border">
      <div className="flex-auto px-10 py-6">
        <Anime
          translateY={[-20, 0]}
          opacity={[0, 1]}
          easing="easeOutSine"
          duration={500}
        >
          <div className="flex flex-wrap -mx-3">
            <div className="flex-none w-2/3 max-w-full px-3">
              <div>
                <p className="mb-0 font-sans font-semibold leading-normal text-sm">
                  Total Revenue
                </p>
                <h5 className="mb-0 font-bold">
                  ${totalRevenue}
                  <span className="leading-normal text-sm font-weight-bolder text-lime-500">
                    +55%
                  </span>
                </h5>
              </div>
            </div>
            <div className="w-4/12 max-w-full px-3 ml-auto text-right flex-0">
              <div className="inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500 shadow-soft-2xl">
                <i
                  className="ni ni-money-coins text-lg relative top-3.5 text-white"
                  aria-hidden="true"
                ></i>
              </div>
            </div>
          </div>
        </Anime>
      </div>
    </div>
  );
};

export default Admin;
