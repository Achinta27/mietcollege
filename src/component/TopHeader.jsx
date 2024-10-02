import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const TopHeader = () => {
  const settings = {
    infinite: true,

    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,

    pauseOnHover: true,
    cssEase: "linear",
    speed: 6000,
    autoplaySpeed: 500,
    arrows: false,
  };
  const notifications = [
    {
      text: "Admission open in B.Tech 2024-2025 Season",
      link: "/admission/offer-course/btech",
    },
    {
      text: "Admission open in diploma 2024-2025 Season",
      link: "/admission/offer-course/diploma",
    },
  ];

  return (
    <div className="sm:bg-[#bb3232] md:bg-white h-fit border-b border-gray-300">
      <div className="flex w-full justify-between items-center">
        <div className="lg:w-[50%] sm:w-full flex items-center gap-3">
          <span className="boxdesigntopnav "></span>
          <span className="md:w-[8rem] sm:pl-2 lg:pl-0  sm:w-[20%] md:bg-[#bb3232] h-[2.5rem] flex items-center justify-center sm:text-xs lg:text-base text-white font-bold">
            Notification
          </span>
          <div className="md:w-[70%]  sm:w-[80%] ">
            <Slider {...settings}>
              {notifications.map((notification, index) => (
                <div
                  key={index}
                  className=" text-[#bb3232] w-full flex flex-row sm:text-[12px] lg:text-sm xl:text-lg font-bold "
                >
                  <Link to={notification.link} className="flex ">
                    {notification.text}{" "}
                    <img
                      src="/images/new.gif"
                      alt=""
                      className="lg:h-4 sm:h-3"
                    />
                  </Link>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <div className="lg:w-[50%] sm:hidden sm:w-full lg:flex items-center ">
          <span className="flex lg:text-xs xl:text-sm font-semibold gap-4">
            <Link
              to="/admission/offer-course/btech"
              className=" border-l-2 pl-2 border-[#bb3232]"
            >
              B.Tech Course
            </Link>
            <Link
              to="/admission/offer-course/diploma"
              className=" border-l-2 pl-2 border-[#bb3232]"
            >
              Diploma Course
            </Link>
            <Link
              to="/mietcampus/facilities/hostel-facilities"
              className="border-l-2 pl-2 border-[#bb3232]"
            >
              Hostel Facility
            </Link>

            <Link
              to="/admission/scholarship"
              className=" border-l-2 pl-2 border-[#bb3232]"
            >
              Scholarship Facility
            </Link>
          </span>
          <Link
            to={"/about-miet/online-enquiry"}
            className="w-[19rem] p-1 font-semibold lg:text-xs xl:text-sm h-[2.3rem] flex flex-col rounded-2xl justify-center items-center text-white bg-[#bb3232] hover:bg-[#FFCC00] hover:text-[#4E0010]  "
          >
            <span>Admisson Open in B.Tech & </span>
            <span>Diploma 2024 - 2025 </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
