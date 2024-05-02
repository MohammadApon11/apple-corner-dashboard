import { FaApple } from "react-icons/fa";

const GridProduct = ({
  imageUrl,
  description1,
  description2 = "",
  textColor,
  buyBtn,
  icon = false,
  title = "",
  justify,
  margin,
  iconColor,
  series = false,
  applyBtn = false,
  learnBtn = true,
  estimateBtn = false,
}) => {
  return (
    <div
      className={`text-center bg-cover relative h-[500px] flex flex-col ${margin} ${justify} ${textColor}`}
    >
      <img
        className="absolute h-full w-full top-0 left-0"
        src={imageUrl}
        alt=""
      />
      <h5 className="flex items-center text-3xl font-semibold justify-center z-10">
        {" "}
        {icon && <FaApple className={iconColor} />}
        {title}
      </h5>
      {series && <p className="text-red-700 text-sm z-10 py-1">SERIES 9</p>}
      <p className="text-xl z-10">{description1}</p>
      <p className="text-xl z-10">{description2}</p>
      <div className="flex z-10 items-center justify-center gap-4 mt-4">
        <button
          className={`bg-[#0071E3] text-white rounded-full py-2 px-6 ${
            learnBtn ? "block" : "hidden"
          }`}
        >
          Learn More
        </button>
        <button
          className={`bg-[#0071E3] text-white rounded-full py-2 px-6 ${
            estimateBtn ? "block" : "hidden"
          }`}
        >
          Get your estimate
        </button>
        <button
          className={`border border-[#0071E3] text-[#0071E3] hover:bg-[#0071E3] hover:text-white transition-all duration-300 py-2 px-6 rounded-full ${
            buyBtn ? "block" : "hidden"
          }`}
        >
          Buy
        </button>
        <button
          className={`border border-[#0071E3] text-[#0071E3] hover:bg-[#0071E3] hover:text-white transition-all duration-300 py-2 px-6 rounded-full ${
            applyBtn ? "block" : "hidden"
          }`}
        >
          Apply now
        </button>
      </div>
    </div>
  );
};

export default GridProduct;
