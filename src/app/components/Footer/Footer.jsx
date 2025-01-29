import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#fffce1] p-8">
      <div className=" max-w-7xl mx-auto h-fit flex justify-between py-8">
        <div className="w-fit space-y-8">
          <h1 className="text-4xl font-semibold  ">
            Subscribe to the GSAP® <br /> newsletter to stay up-to-date with{" "}
            <br /> the latest releases
          </h1>
          <div className="relative">
            <input
              type="email"
              className="relative w-full focus:outline-none p-4 pl-1 bg-[#fffce1]  border-b-[1px] border-black text-black"
              placeholder="Email Address"
            />
            <button className="absolute top-0 right-0 h-full flex items-center">
              <svg
                width="41"
                height="22"
                viewBox="0 0 41 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M40.002 11.001H0.501953M40.002 11.001L30.002 1.00098M40.002 11.001L30.002 21.001"
                  stroke="#0E100F"
                ></path>
              </svg>
            </button>
          </div>
          {/* <div className="absolute">
          </div> */}
        </div>

        <div className="grid grid-cols-3 text-black">
          <div className="col-span-1 p-2 space-y-8">
            <h2 className="font-semibold text-lg">Company</h2>
            <ul className="space-y-2">
              <li className="font-semibold text-xl">Text</li>
              <li className="font-semibold text-xl">Text</li>
              <li className="font-semibold text-xl">Text</li>
            </ul>
          </div>
          <div className="col-span-1 p-2 space-y-8">
            <h2 className="font-semibold text-lg">GSAP</h2>
            <ul className="space-y-2">
              <li className="font-semibold text-xl">Text</li>
              <li className="font-semibold text-xl">Text</li>
              <li className="font-semibold text-xl">Text</li>
            </ul>
          </div>
          <div className="col-span-1 p-2 space-y-8">
            <h2 className="font-semibold text-lg">Connect</h2>
            <ul className="space-y-2">
              <li className="font-semibold text-xl">Text</li>
              <li className="font-semibold text-xl">Text</li>
              <li className="font-semibold text-xl">Text</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
