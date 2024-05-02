import React from "react";
import NavBar from "../components/NavBar";
import SubNav from "../components/SubNav";
import Product from "../components/Product";
import GridProduct from "../components/GridProduct";
import Slider1 from "../components/Slider1";
import Slider2 from "../components/Slider2";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <NavBar />
      <SubNav />
      <div className="flex flex-col gap-3  bg-[#F5F5F7]">
        {/* hero */}
        <div className="mt-5">
          <Product
            imageUrl="/images/hero.png"
            textColor="text-primary"
            buyBtn={false}
            title="Apple 2030"
            description="A plan as innovative as our products."
            titleSize="text-[60px]"
            top="0"
          />
        </div>
        <Product
          imageUrl="/images/second.png"
          textColor="text-[#F5F5F7]"
          buyBtn={true}
          title="iPhone 15 Pro"
          description="Titanium. So strong. So light. So Pro."
          titleSize="text-[50px]"
          top="pt-10"
        />
        <Product
          imageUrl="/images/third.png"
          textColor="text-primary"
          buyBtn={true}
          title="iPhone 15"
          description="New camera. New design. Newphoria."
          titleSize="text-[50px]"
          top="pt-10"
        />
      </div>
      <div className="grid grid-cols-2 gap-3 my-3">
        <GridProduct
          imageUrl="/images/grid-1.png"
          description1="Apple Worldwide Developers Conference."
          description2="Join us online June 10–14."
          textColor="text-white"
          buyBtn={false}
          icon={false}
          justify="justify-end"
          margin="pb-12"
          iconColor="text-primary"
        />
        <GridProduct
          imageUrl="/images/grid-2.png"
          description1="Apple Worldwide Developers Conference."
          description2=""
          textColor="text-primary"
          buyBtn={true}
          icon={true}
          title="Vision Pro"
          justify="justify-end"
          margin="pb-12"
          iconColor="text-primary"
        />
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
      <div>
        <Slider1 />
      </div>
      <div className="my-3">
        <Slider2 />
      </div>
      <Footer />
    </>
  );
};

export default Home;
