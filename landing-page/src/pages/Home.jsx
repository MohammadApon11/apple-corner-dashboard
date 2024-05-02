import NavBar from "../components/NavBar";
import SubNav from "../components/SubNav";
import Slider1 from "../components/Slider1";
import Slider2 from "../components/Slider2";
import Footer from "../components/Footer";
import Hero from "../components/HeroSection/Hero";
import FeatureProducts from "../components/product/FeatureProducts";
import GridProducts from "../components/GridProducts/GridProducts";

const Home = () => {
  return (
    <>
      <NavBar />
      <SubNav />
      <div className="flex flex-col gap-3 bg-[#F5F5F7]">
        <Hero />
        <FeatureProducts />
      </div>
      <GridProducts />
      <Slider1 />
      <div className="my-3">
        <Slider2 />
      </div>
      <Footer />
    </>
  );
};

export default Home;
