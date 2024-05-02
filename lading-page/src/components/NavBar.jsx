import { FaApple } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { navData } from "../data/NavData";
import { HiMiniBars2, HiXMark } from "react-icons/hi2";
import { useState } from "react";

const NavBar = () => {
  const [navShow, setNavShow] = useState(false);

  return (
    <div className="lg:max-w-[990px] text-[#1D1D1F] text-[12px] mx-auto flex items-center justify-between gap-9 lg:py-4 py-7 max-lg:px-10 relative max-lg:shadow-md">
      {/* mobile nav */}
      <div className="max-lg:block hidden">
        <HiMiniBars2 onClick={() => setNavShow(true)} className="text-2xl" />
        <div
          className={` text-gray-200 absolute top-0 transition-all duration-150 flex w-[100vw] h-[100vh] z-20 ${
            navShow ? "left-0" : "-left-[200%]"
          }`}
        >
          <div className="sm:w-[70vw] w-[100vw] h-[100vh] bg-gray-900">
            <HiXMark
              onClick={() => setNavShow(false)}
              className="text-7xl pl-10"
            />
            <div className="flex flex-col gap-3 pl-10 py-4">
              {navData.map((item, index) => (
                <>
                  <a href="#" className="hover:underline py-2" key={index}>
                    {item}
                  </a>
                  <hr />
                </>
              ))}
            </div>
          </div>
          <div className="sm:w-[30vw] h-[100vh] bg-gray-950 opacity-30"></div>
        </div>
      </div>
      <FaApple className="text-xl text-gray-700 lg:block hidden" />
      {/* desktop nav */}
      <div className="lg:block hidden">
        <div className="flex items-center gap-9">
          {navData.map((item, index) => (
            <a href="#" className="hover:underline" key={index}>
              {item}
            </a>
          ))}
        </div>
      </div>
      <IoSearchOutline className="text-xl cursor-pointer text-gray-700 lg:block hidden" />

      <div className="flex items-center gap-5">
        <img
          className="cursor-pointer"
          src="/icons/nav-vector.png"
          alt="Vector"
        />
        <FaApple className="text-xl cursor-pointer text-gray-700 lg:hidden block" />
      </div>
    </div>
  );
};

export default NavBar;
