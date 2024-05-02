import { FaApple } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { navData } from "../data/NavData";

const NavBar = () => {
  return (
    <div className="max-w-[996px] text-[#1D1D1F] text-[12px] mx-auto flex items-center justify-between gap-9 py-2">
      <FaApple className="text-xl text-gray-700" />
      {navData.map((item, index) => (
        <p className="hover:underline cursor-pointer" key={index}>
          {item}
        </p>
      ))}
      <IoSearchOutline className="text-xl text-gray-700" />
      <img src="/icons/nav-vector.png" alt="Vector" />
    </div>
  );
};

export default NavBar;
