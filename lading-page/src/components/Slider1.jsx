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
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <div className="overflow-x-hidden">
      <Slider {...settings}>
        {slider.map((slide, index) => (
          <img
            key={index}
            className="3xl:h-[530px] 2xl:h-[450px] xl:h-[380px] lg:h-[320px] 800:h-[250px] md:h-[400px] sm:h-[330px] xxs:h-[280px] h-[250px]"
            src={slide}
          />
        ))}
      </Slider>
    </div>
  );
};

export default Slider1;
