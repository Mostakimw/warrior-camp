import SectionTitle from "../../../../components/SectionTitle";

const MyEnrollment = () => {
  const classs = {
    _id: "64837bfa74a348e4fdcd96c9",
    classThumbnail:
      "https://thumbs.dreamstime.com/b/studio-shot-group-kids-training-karate-martial-arts-gray-backlground-89902907.jpg",
    className: "Karate for Beginners",
    userName: "Toby knight 3456",
    availableSeats: "52",
    price: "78",
    description:
      "Join our Karate for Beginners class and learn the fundamentals of karate, including basic stances, punches, kicks, and self-defense techniques. Led by experienced instructor John Smith, this class is suitable for all skill levels. Limited seats available, so enroll now",
    selected: true,
    email: "shimul@gmail.com",
  };
  return (
    <div className="w-full">
      <SectionTitle title="Enrolled Classes" />

      <div className="grid md:grid-cols-2 mt-12">
        <div className="grid md:grid-cols-2 gap-8 bg-gray-800 px-8 py-6 rounded-md group relative">
          <div>
            <img
              src={classs.classThumbnail}
              className="w-60 rounded-md transition duration-300 ease-in-out group-hover:scale-110"
              alt=""
            />
          </div>
          <div className="flex flex-col text-gray-100">
            <div>
              <h3 className="text-xl font-semibold">Karate for Beginners</h3>
              <p className="text-2xl font-semibold mt-2">Mostakim ahamed</p>
            </div>
            <h1 className="text-[#d1d1d1] mt-3 ">
              Join our Karate for Beginners class and learn the fundamentals of
              karate, including basic stances, punches, kicks, and self-defense
              techniques. Led by experienced instructor John Smith, this class
              is suitable for all skill levels. Limited seats available, so
              enroll now.
            </h1>
          </div>
          <div className="absolute inset-0 bg-yellow-500 opacity-0 group-hover:opacity-25 transition-opacity"></div>
        </div>
      </div>
    </div>
  );
};

export default MyEnrollment;
