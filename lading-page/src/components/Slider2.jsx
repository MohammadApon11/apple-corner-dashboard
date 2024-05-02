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
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="overflow-hidden pb-8">
      <Slider {...settings}>
        {slider.map((slider, index) => (
          <img
            key={index}
            // className="3xl:h-[306px]"
            src={slider}
            alt="Slider img"
          />
        ))}
      </Slider>
    </div>
  );
};

export default Slider2;
