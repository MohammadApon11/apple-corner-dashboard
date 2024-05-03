import useGetHero from "../../hooks/heroes/useGetHero";
import Product from "../Product";

const Hero = () => {
  const { heroes, herosLoading } = useGetHero();
  const displayHero = heroes?.find((hero) => hero?.selected === true);

  return (
    <div className="">
      {herosLoading ? (
        <p className="loading loading-spinner text-4xl pt-3 text-center">Please wait...</p>
      ) : (
        <Product
          imageUrl={displayHero?.image}
          textColor="text-primary"
          buyBtn={false}
          title={displayHero?.title}
          description={displayHero?.description1}
          descriptionSize="xl:text-2xl lg:text-[22px] sm:text-[20px] text-[18px]"
          titleSize="xl:text-[60px] lg:text-[50px] md:text-[40px] sm:text-[30px] text-[30px]"
          top="xl:pt-8 pt-5"
          icon={displayHero?.icon}
        />
      )}
    </div>
  );
};

export default Hero;
