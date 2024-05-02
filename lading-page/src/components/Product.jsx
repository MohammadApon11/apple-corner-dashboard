import React from "react";

const Product = ({
  title,
  description,
  titleSize,
  imageUrl,
  textColor,
  buyBtn,
  top,
}) => {
  return (
    <div
      className="text-center relative bg-cover h-[530px] flex flex-col "
      //   style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <img className="absolute h-full top-0 left-0" src={imageUrl} alt="" />
      <div className={`mx-auto z-10 ${top} ${textColor}`}>
        <h1 className={`${titleSize} font-bold`}>{title}</h1>
        <p className="text-2xl">{description}</p>
        <div className="flex items-center justify-center gap-4 mt-4">
          <button className="bg-[#0071E3] text-white rounded-full py-2 px-6">
            Learn More
          </button>
          <button
            className={`border border-[#0071E3] text-[#0071E3] hover:bg-[#0071E3] hover:text-white transition-all duration-300 py-2 px-6 rounded-full ${
              buyBtn ? "block" : "hidden"
            }`}
          >
            Buy
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
