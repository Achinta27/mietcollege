import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import HeadingTemplate from "../template/HeadingTemplate";

const CompanySlider = () => {
  const [slidesToShow, setSlidesToShow] = useState(5);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 725) {
        setSlidesToShow(2);
      } else if (window.innerWidth <= 1024) {
        setSlidesToShow(4);
      } else if (window.innerWidth <= 1780) {
        setSlidesToShow(6);
      } else {
        setSlidesToShow(7);
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
    centerMode: true,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    cssEase: "linear",
    speed: 6000,
    autoplaySpeed: 500,
    arrows: false,
    centerPadding: "60px",
  };
  const companys = [
    { imgsrc: "/company/image2.png" },
    { imgsrc: "/company/image3.png" },
    { imgsrc: "/company/image4.jpg" },
    { imgsrc: "/company/image5.png" },
    { imgsrc: "/company/image6.png" },
    { imgsrc: "/company/image7.png" },
    { imgsrc: "/company/image8.png" },
    { imgsrc: "/company/image9.png" },
    { imgsrc: "/company/image10.png" },
    { imgsrc: "/company/image11.jpg" },
    { imgsrc: "/company/image12.jpg" },
    { imgsrc: "/company/image13.jpg" },
    { imgsrc: "/company/image14.jpg" },
    { imgsrc: "/company/image15.jpg" },
    { imgsrc: "/company/image16.png" },
  ];
  return (
    <div className="flex flex-col gap-8 sm:p-4 md:p-8 xl:p-16 w-full justify-center items-center">
      <HeadingTemplate heading={"Our Partners and Recruiters"} />
      <div className="w-full">
        <Slider {...settings}>
          {companys.map((company, index) => (
            <span
              key={index}
              className="slider-container p-4 flex items-center justify-center"
            >
              <img
                src={company.imgsrc}
                alt="company"
                width={244}
                className="w-full"
              />
            </span>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CompanySlider;
