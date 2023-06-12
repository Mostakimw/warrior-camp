const SectionTitle = ({ title }) => {
  return (
    <div className="flex justify-center mt-10">
      <h1 className="text-4xl font-bold italic text-center uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#FCC044] via-red-300 to-yellow-500">
        {title}
      </h1>
    </div>
  );
};

export default SectionTitle;
