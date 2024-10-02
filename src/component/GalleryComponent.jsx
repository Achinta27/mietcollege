import React, { useEffect, useRef, useState } from "react";
import HeadingTemplate from "../template/HeadingTemplate";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import EnquiryBoxComponent from "./EnquiryBoxComponent";
import { Link } from "react-router-dom";

const GalleryComponent = () => {
  const mainSlider = useRef(null);
  const navSlider = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 725) {
        setSlidesToShow(3);
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

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className={`absolute top-1/2 left-4 transform -translate-y-1/2 z-10 w-10 h-10 flex justify-center items-center ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
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
        className={`absolute top-1/2 right-4 transform -translate-y-1/2 z-10 w-10 h-10 flex justify-center items-center ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <FaChevronRight className="text-white h-6 w-6" />
      </button>
    );
  };

  const mainSettings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    asNavFor: navSlider.current,
    ref: mainSlider,
    beforeChange: (current, next) => setCurrentSlide(next),
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  const navSettings = {
    infinite: true,
    speed: 2000,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    asNavFor: mainSlider.current,
    ref: navSlider,
    focusOnSelect: true,
    arrows: false,
  };

  const galleryPhotos = [
    { imgsrc: "/images/Building1.jpg" },
    { imgsrc: "/images/Building2.jpg" },
    { imgsrc: "/images/Building3.jpg" },
    { imgsrc: "/images/Building4.jpg" },
    { imgsrc: "/images/Building5.jpg" },
    { imgsrc: "/images/Building6.jpg" },
  ];

  return (
    <div className="flex flex-col">
      <HeadingTemplate heading={"PHOTO GALLERY"} />
      <div className="flex sm:flex-col lg:flex-row w-full sm:p-4 md:p-8 xl:p-16 md:gap-8">
        <div className="lg:w-[60%] sm:w-full bg-white p-2 shadow-lg flex flex-col justify-between gap-4">
          <div
            className="w-full relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Slider {...mainSettings}>
              {galleryPhotos.map((photo, index) => (
                <div key={index} className="border border-gray-400">
                  <img
                    src={photo.imgsrc}
                    alt=""
                    className="border border-gray-400 sm:h-[15rem] md:h-[20rem] lg:h-[25rem] xl:h-[30rem] w-full"
                  />
                </div>
              ))}
            </Slider>
            <div className="w-full mt-1">
              <Slider {...navSettings}>
                {galleryPhotos.map((photo, index) => (
                  <div
                    key={index}
                    className={`gap-2 p-1 ${
                      index === currentSlide ? "opacity-100" : "opacity-55"
                    }`}
                  >
                    <img
                      src={photo.imgsrc}
                      alt=""
                      className="border border-gray-400 h-[5rem] w-full"
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 md:justify-between">
            <Link
              to="/pdf/6 years placement data 2023-24.pdf"
              target="_blank"
              className="text-[#DC143C] hover:bg-[#DC143C] hover:text-white border-2 border-[#DC143C] rounded text-lg md:text-2xl text-center font-bold py-[1.1vmax] px-[1.5vmax]"
            >
              Download Placement Report
            </Link>
            <Link
              to="/pdf/6 years placement data 2023-24.pdf"
              target="_blank"
              className="text-[#DC143C] hover:bg-[#DC143C] hover:text-white border-2 border-[#DC143C] rounded text-lg md:text-2xl text-center font-bold py-[1.1vmax] px-[1.5vmax]"
            >
              Download Prospectus 2024-25
            </Link>
          </div>
        </div>
        <EnquiryBoxComponent />
      </div>
    </div>
  );
};

export default GalleryComponent;
