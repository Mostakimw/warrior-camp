const Footer = () => {
  return (
    <section className="py-20 bg-gray-800 overflow-hidden mt-24">
      <div className="container px-4 mx-auto">
        <div
          className="mb-14 p-11 rounded-2xl"
          style={{
            background:
              "url('https://img.freepik.com/free-photo/empty-save-texture-room-light_1258-175.jpg?w=1380&t=st=1686430444~exp=1686431044~hmac=c3fb6960d3c8d352db45139fea50e1a135a32d15b805184ccdc2329830b84dd1')",
            backgroundRepeat: "no-repeat w-full",
            backgroundSize: "cover",
          }}
        >
          <div className="flex flex-wrap items-center -m-8">
            <div className="w-full md:w-1/2 p-8">
              <h2 className="font-heading text-6xl text-white tracking-tighter">
                Transform Your Skills with Our Martial Arts Academy.
              </h2>
            </div>
            <div className="w-full md:w-1/2 p-8">
              <div className="flex flex-wrap md:justify-end">
                <div className="auto">
                  <a
                    className="inline-block px-5 py-4 text-white font-semibold tracking-tight bg-gray-700 hover:bg-gray-800 rounded-lg focus:ring-4 focus:ring-indigo-300 transition duration-200"
                    href="#"
                  >
                    Try 14 Days Free Trial
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-between -m-8">
          <div className="w-auto p-8">
            <h3 className="mb-7 text-white font-semibold tracking-tight">
              Company
            </h3>
            <ul>
              <li className="mb-6 text-gray-200 tracking-tight">
                <a
                  className="text-white hover:text-gray-300 tracking-tight transition duration-200"
                  href="#"
                >
                  About
                </a>
              </li>
              <li className="mb-6 text-gray-200 tracking-tight">
                <a
                  className="text-white hover:text-gray-300 tracking-tight transition duration-200"
                  href="#"
                >
                  Features
                </a>
              </li>
              <li className="mb-6 text-gray-200 tracking-tight">
                <a
                  className="text-white hover:text-gray-300 tracking-tight transition duration-200"
                  href="#"
                >
                  Works
                </a>
              </li>
              <li className="text-gray-200 tracking-tight">
                <a
                  className="text-white hover:text-gray-300 tracking-tight transition duration-200"
                  href="#"
                >
                  Career
                </a>
              </li>
            </ul>
          </div>
          <div className="w-auto p-8">
            <h3 className="mb-7 text-white font-semibold tracking-tight">
              Help
            </h3>
            <ul>
              <li className="mb-6 text-gray-200 tracking-tight">
                <a
                  className="text-white hover:text-gray-300 tracking-tight transition duration-200"
                  href="#"
                >
                  Customer Support
                </a>
              </li>
              <li className="mb-6 text-gray-200 tracking-tight">
                <a
                  className="text-white hover:text-gray-300 tracking-tight transition duration-200"
                  href="#"
                >
                  Delivery Details
                </a>
              </li>
              <li className="mb-6 text-gray-200 tracking-tight">
                <a
                  className="text-white hover:text-gray-300 tracking-tight transition duration-200"
                  href="#"
                >
                  Terms &amp; Conditions
                </a>
              </li>
              <li className="text-gray-200 tracking-tight">
                <a
                  className="text-white hover:text-gray-300 tracking-tight transition duration-200"
                  href="#"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div className="w-auto p-8">
            <h3 className="mb-7 text-white font-semibold tracking-tight">
              Resources
            </h3>
            <ul>
              <li className="mb-6 text-gray-200 tracking-tight">
                <a
                  className="text-white hover:text-gray-300 tracking-tight transition duration-200"
                  href="#"
                >
                  Free eBooks
                </a>
              </li>
              <li className="mb-6 text-gray-200 tracking-tight">
                <a
                  className="text-white hover:text-gray-300 tracking-tight transition duration-200"
                  href="#"
                >
                  Development Tutorial
                </a>
              </li>
              <li className="mb-6 text-gray-200 tracking-tight">
                <a
                  className="text-white hover:text-gray-300 tracking-tight transition duration-200"
                  href="#"
                >
                  How to - Blog
                </a>
              </li>
              <li className="text-gray-200 tracking-tight">
                <a
                  className="text-white hover:text-gray-300 tracking-tight transition duration-200"
                  href="#"
                >
                  Youtube Playlist
                </a>
              </li>
            </ul>
          </div>
          <div className="w-auto p-8">
            <h3 className="mb-7 text-white font-semibold tracking-tight">
              Links
            </h3>
            <ul>
              <li className="mb-6 text-gray-200 tracking-tight">
                <a
                  className="text-white hover:text-gray-300 tracking-tight transition duration-200"
                  href="#"
                >
                  Free eBooks
                </a>
              </li>
              <li className="mb-6 text-gray-200 tracking-tight">
                <a
                  className="text-white hover:text-gray-300 tracking-tight transition duration-200"
                  href="#"
                >
                  Development Tutorial
                </a>
              </li>
              <li className="mb-6 text-gray-200 tracking-tight">
                <a
                  className="text-white hover:text-gray-300 tracking-tight transition duration-200"
                  href="#"
                >
                  How to - Blog
                </a>
              </li>
              <li className="text-gray-200 tracking-tight">
                <a
                  className="text-white hover:text-gray-300 tracking-tight transition duration-200"
                  href="#"
                >
                  Youtube Playlist
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
