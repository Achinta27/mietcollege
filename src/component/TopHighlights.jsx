import React from "react";
import HeadingTemplate from "../template/HeadingTemplate";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const TopHighlights = () => {
  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="absolute bottom-[-1.5rem] right-14 transform -translate-y-1/2 z-10 w-10 h-10 bg-[#bb3232]  flex justify-center items-center"
      >
        <FaChevronLeft className="text-white h-6 w-6" />
      </button>
    );
  };

  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="absolute bottom-[-1.5rem] right-4 transform -translate-y-1/2 z-10 w-10 h-10 bg-[#bb3232]  flex justify-center items-center"
      >
        <FaChevronRight className="text-white h-6 w-6" />
      </button>
    );
  };
  const settings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  const highlights = [
    { imgsrc: "/images/Building1.jpg" },
    { imgsrc: "/images/Building2.jpg" },
    { imgsrc: "/images/Building3.jpg" },
    { imgsrc: "/images/Building4.jpg" },
    { imgsrc: "/images/Building5.jpg" },
  ];

  return (
    <div className="flex flex-col gap-8 sm:p-4 md:p-8 xl:p-16 w-full justify-center items-center bg-gray-100">
      <span className="flex flex-col gap-2 w-full justify-center items-center">
        <HeadingTemplate heading={"TOP HIGHLIGHTS"} />
        <span className="md:text-xl sm:text-lg sm:w-full lg:w-[50%] text-center font-dancingscript font-semibold">
          To Provide Outstanding Learning Experience for Excellence in
          Education, Healthcare and have a transformative impact on Society
          through continual innovation in Education, Research and
          Entrepreneurship.
        </span>
      </span>
      <div className="w-full flex justify-center items-center relative">
        <div className="lg:w-[90%] sm:w-full">
          <Slider {...settings}>
            {highlights.map((highlight, index) => (
              <div key={index} className="border border-gray-400">
                <img
                  src={highlight.imgsrc}
                  alt=""
                  className="border border-gray-400 lg:h-[32rem] md:h-[28rem] sm:h-[15rem] xl:h-[35rem] w-full"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default TopHighlights;
