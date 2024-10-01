import React, { useEffect, useState } from "react";
import HeadingTemplate from "../template/HeadingTemplate";
import Slider from "react-slick";

const RankingComponent = () => {
  const rankings = [
    { imgsrc: "images/aicte.png" },
    { imgsrc: "images/makaut_logo.png" },
    { imgsrc: "images/wbst.png" },
    { imgsrc: "images/naac.png" },
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
        setinfiniteslide(true);
      } else if (window.innerWidth <= 1280) {
        setSlidesToShow(4);
        setinfiniteslide(false);
      } else if (window.innerWidth <= 1780) {
        setSlidesToShow(4);
        setinfiniteslide(false);
      } else {
        setSlidesToShow(4);
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
      <HeadingTemplate heading={"Ranking & Awards"} />
      <div className=" w-full">
        <Slider {...settings}>
          {rankings.map((ranking, index) => (
            <div
              key={index}
              className="justify-center items-center !flex relative"
            >
              <div className="lg:w-[80%] sm:w-[95%] md:w-[90%] xl:w-[70%] flex justify-center items-center">
                <img
                  src="/images/banner-bg.png"
                  alt=""
                  className="xl:w-[20rem] xlg:w-[16rem] lg:w-[14rem] sm:w-[16rem]"
                />
                <img
                  src={ranking.imgsrc}
                  alt=""
                  className="xl:w-[8rem] xlg:w-[6rem] sm:w-[4.5rem] absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/3"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default RankingComponent;
