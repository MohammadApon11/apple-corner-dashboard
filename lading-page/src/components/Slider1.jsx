import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const slider = [
  "/images/slide1.png",
  "/images/slide2.png",
  "/images/slide3.png",
  "/images/slide4.png",
  "/images/slide1.png",
  "/images/slide2.png",
];
import "../index.css";
const Slider1 = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
    cssEase: "linear",
  };
  return (
    <div className="overflow-hidden">
      <Slider {...settings}>
        {slider.map((slide) => (
          <img className="h-[350px]" src={slide} />
        ))}
      </Slider>
    </div>
  );
};

export default Slider1;
