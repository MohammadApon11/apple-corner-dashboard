import { MdKeyboardArrowRight } from "react-icons/md";
const SubNav = () => {
  return (
    <div className="sm:block hidden">
      <div className="text-[#F5F5F7] bg-[#1D1D1F] py-4 flex items-center justify-center gap-2">
        <p>Join us this Earth Day by recycling your Apple devices.</p>
        <span className="text-[#2997FF] flex items-center gap-1 cursor-pointer">
          Recycle for free <MdKeyboardArrowRight />
        </span>
      </div>
    </div>
  );
};

export default SubNav;
