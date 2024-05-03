import Product from "../Product";

const FeatureProducts = () => {
  return (
    <>
      <Product
        imageUrl="/images/second.png"
        textColor="text-[#F5F5F7]"
        buyBtn={true}
        title="iPhone 15 Pro"
        description="Titanium. So strong. So light. So Pro."
        titleSize="lg:text-[50px] md:text-[45px] sm:text-[30px] text-[25px]"
        top="md:pt-10 pt-7"
      />
      <Product
        imageUrl="/images/third.png"
        textColor="text-primary"
        buyBtn={true}
        title="iPhone 15"
        description="New camera. New design. Newphoria."
        titleSize="lg:text-[50px] md:text-[45px] sm:text-[30px] text-[25px]"
        top="md:pt-10 pt-7"
      />
    </>
  );
};

export default FeatureProducts;
