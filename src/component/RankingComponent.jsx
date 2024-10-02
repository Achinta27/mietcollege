import React, { useEffect, useState } from "react";
import HeadingTemplate from "../template/HeadingTemplate";
import Slider from "react-slick";

const RankingComponent = () => {
  const rankings = [
    {
      imgsrc: "images/aicte.png",
      text: "All India Council For Technical Education",
    },
    {
      imgsrc: "images/wbscvt.png",
      text: "West Bengal State Council for Vocational Training",
    },
    { imgsrc: "images/wbut.png", text: "West Bengal University of Technology" },
  ];

  const [slidesToShow, setSlidesToShow] = useState(3);
  const [infiniteslide, setinfiniteslide] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 560) {
        setSlidesToShow(1);
        setinfiniteslide(true);
      } else if (window.innerWidth <= 865) {
        setSlidesToShow(2);
        setinfiniteslide(true);
      } else if (window.innerWidth <= 1024) {
        setSlidesToShow(3);
        setinfiniteslide(false);
      } else if (window.innerWidth <= 1280) {
        setSlidesToShow(3);
        setinfiniteslide(false);
      } else if (window.innerWidth <= 1780) {
        setSlidesToShow(3);
        setinfiniteslide(false);
      } else {
        setSlidesToShow(3);
        setinfiniteslide(false);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const settings = {
    infinite: true,
    speed: 2000,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: infiniteslide,
    autoplaySpeed: 4000,
    pauseOnHover: false,

    centerMode: false,
    arrows: false,
  };
  return (
    <div className="flex flex-col gap-8 sm:p-4 md:p-8 xl:p-16 w-full justify-center items-center">
      <div className="w-full flex  justify-center items-center">
        <div className="w-fit flex flex-col gap-3 justify-center items-center ">
          <div className="flex flex-col gap-2 justify-center items-center">
            <span className="text-xl font-semibold ">
              Check Approval Permission Copy
            </span>
            <span className="text-3xl font-semibold text-red-700">
              Our Finest Affiliation & Approval
            </span>
          </div>
          <span className="flex items-center">
            <span className="h-[2px] w-[6rem] bg-red-700"></span>
            <span className="h-[4px] w-[4rem] bg-red-700"></span>
            <span className="h-[2px] w-[6rem] bg-red-700"></span>
          </span>
        </div>
      </div>
      <div className=" lg:w-[90%] sm:w-full">
        <Slider {...settings}>
          {rankings.map((ranking, index) => (
            <div
              key={index}
              className="!flex w-full flex-col gap-2 p-2 text-center items-center justify-center"
            >
              <div className="w-full flex justify-center items-center flex-col">
                <span className="flex justify-center items-center">
                  <img src={ranking.imgsrc} alt="" className="w-[80%]" />
                </span>
                <span className="w-full text-lg  font-semibold text-center">
                  {ranking.text}
                </span>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default RankingComponent;
