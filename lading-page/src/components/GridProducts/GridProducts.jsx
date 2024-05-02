import useGetProducts from "../../hooks/products/useGetProduct";
import GridProduct from "../GridProduct";
import Event from "../event/Event";

const GridProducts = () => {
  const { products, productsLoading } = useGetProducts();
  const displayProducts = products?.find(
    (product) => product?.selected === true
  );

  return (
    <div className="grid md:grid-cols-2 gap-3 my-3">
      <Event />
      {productsLoading ? (
        <span className="loading loading-spinner text-3xl py-5">Please wait...</span>
      ) : (
        <GridProduct
          imageUrl={displayProducts?.image}
          description1={displayProducts?.description1}
          description2={displayProducts?.description2}
          textColor="text-primary"
          buyBtn={true}
          icon={displayProducts?.icon}
          title={displayProducts?.title}
          justify="justify-end"
          margin="pb-12"
          iconColor="text-primary"
          dynamic={true}
        />
      )}
      <GridProduct
        imageUrl="/images/grid-3.png"
        description1="Lean. Mean. M3 machine."
        description2=""
        textColor="text-primary"
        buyBtn={true}
        icon={false}
        title="MacBook Air"
        justify="justify-start"
        margin="pt-12"
      />
      <GridProduct
        imageUrl="/images/grid-4.png"
        description1="Smarter. Brighter. Mightier."
        description2=""
        textColor="text-white"
        buyBtn={true}
        icon={true}
        title="WATCH"
        justify="justify-start"
        margin="pt-12"
        iconColor="text-white"
        series={true}
      />
      <GridProduct
        imageUrl="/images/grid-5.png"
        description1="Get up to 3% Daily Cash back"
        description2="with every purchase."
        textColor="text-primary"
        buyBtn={false}
        icon={true}
        title="WATCH"
        justify="justify-start"
        margin="pt-12"
        iconColor="text-primary"
        series={false}
        applyBtn={true}
      />

      <GridProduct
        imageUrl="/images/grid-6.png"
        description1="Get $180-$630 in credit when you"
        description2="trade in iPhone 11 or higher.1"
        textColor="text-primary"
        buyBtn={false}
        icon={true}
        title="CARD"
        justify="justify-start"
        margin="pt-12"
        iconColor="text-primary"
        series={false}
        applyBtn={false}
        learnBtn={false}
        estimateBtn={true}
      />
    </div>
  );
};

export default GridProducts;
