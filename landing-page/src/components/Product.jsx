const Product = ({
  title,
  description,
  titleSize,
  imageUrl,
  textColor,
  buyBtn,
  top,
  descriptionSize,
}) => {
  return (
    <div
      className="text-center relative xl:h-[630px] lg:h-[450px] md:h-[330px] sm:h-[300px] h-[200px] w-full flex flex-col "
      //   style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <img
        className="absolute h-full w-full top-0 left-0"
        src={imageUrl}
        alt=""
      />
      <div className={`mx-auto z-10 ${top} ${textColor}`}>
        <h1 className={`${titleSize} font-bold`}>{title}</h1>
        <p className={`${descriptionSize}`}>{description}</p>
        <div className="flex items-center justify-center gap-4 mt-4">
          <button className="bg-[#0071E3] text-white rounded-full sm:py-2 py-1 px-4 sm:text-base text-[14px] sm:px-6">
            Learn More
          </button>
          <button
            className={`border border-[#0071E3] text-[#0071E3] hover:bg-[#0071E3] hover:text-white transition-all duration-300 sm:py-2 sm:px-6 sm:text-base text-[14px] py-1 px-4 rounded-full ${
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
