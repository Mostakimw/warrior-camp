const InstructorCard = () => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <h1 className="text-3xl font-semibold text-gray-800 inline-block py-5 text-center">
        John Smith
      </h1>
      <figure className="px-10">
        <img
          src="https://i.ibb.co/wKycvGF/portrait-smiling-chef-uniform.jpg"
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">Martial</h2>
        <p className="text-[#FCC044]">mostakim@gmail.com</p>
        <p>Number of classes: 3</p>
        <div className="card-actions">
          <button className="btn btn-primary btn-sm mt-2">See Class</button>
        </div>
      </div>
    </div>
  );
};

export default InstructorCard;
