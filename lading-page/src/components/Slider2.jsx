import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const slider = [
  "/images/small-slide-1.png",
  "/images/small-slide-2.png",
  "/images/small-slide-3.png",
  "/images/small-slide-4.png",
];
const Slider2 = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 4000,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 4000,
    rtl: true,
  };
  return (
    <div className="overflow-hidden pb-8">
      <Slider {...settings}>
        {slider.map((slider) => (
          <img className="h-[236px]" src={slider} alt="Slider img" />
        ))}
      </Slider>
    </div>
  );
};

export default Slider2;
