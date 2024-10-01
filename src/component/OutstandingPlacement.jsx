import React from "react";
import HeadingTemplate from "../template/HeadingTemplate";
import { FaPlus } from "react-icons/fa";
import { Autoplay, Grid, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";

const OutstandingPlacement = () => {
  const placements = [
    {
      imgsrc:
        "/placement/Animesh Ghosh  Me 4 th yr  2024  Jaya Hind Industries pvt ltd.jpeg",
      name: "Animesh Ghosh",
      company: "Jaya Hind Industries pvt ltd",
      jobrole: "ME 4th year 2024",
    },
    {
      imgsrc:
        "/placement/Bikram Das Department - Electrical Engineering  Passout year -2024 Company -Kodnest.jpeg",
      name: "Bikram Das",
      company: "Kodnest",
      jobrole: "EE Passout year -2024",
    },
    {
      imgsrc:
        "/placement/Maoumaa Dutta  Company - Sutherland Global Pvt Ltd  Year of Passout - 2024 Department - Computer Science and Engineering.jpeg",
      name: "Maoumaa Dutta",
      company: "Sutherland Global Pvt Ltd",
      jobrole: "Computer Science and Engineering",
    },
    {
      imgsrc:
        "/placement/SALINI SARKAR  Company Name - Sutherland Global Private Limited  Passout Year -2024 Department - Computer Science & Engineering.jpeg",
      name: "SALINI SARKAR",
      company: "Sutherland Global Pvt Ltd",
      jobrole: "Computer Science & Engineering",
    },
    {
      imgsrc:
        "/placement/Riki Banik 2024 Mechanical engineering Department  Jaya Hind Industries pvt ltd,Muvro Technology Ltd.jpeg",
      name: "Riki Banik",
      company: "Jaya Hind Industries pvt ltd",
      jobrole: "Mechanical Engineering",
    },
    {
      imgsrc:
        "/placement/Sasti pal  Me 4 th yr 2024 Muvro Technology,jJaya Hind Industries pvt Limited.jpeg",
      name: "Sasti pal",
      company: "Muvro Technology",
      jobrole: "Mechanical Engineering",
    },
    {
      imgsrc:
        "/placement/Sreejasree Roy Passout year- 2024 Dept- CSE Company Name- Sutherland Global Service.jpeg",
      name: "Sreejasree Roy",
      company: "Sutherland Global Service",
      jobrole: "Computer Science Department",
    },
    {
      imgsrc:
        "/placement/Suman Koley Me 4 th year  2024 JAYA Hind Industries pvt ltd.jpeg",
      name: "Suman Koley",
      company: "JAYA Hind Industries pvt ltd",
      jobrole: "Mechanical Engineering",
    },
  ];

  const totalplacements = [
    {
      package: "4-5 LPA",
      totalnumber: "Placement offers",
    },
    {
      package: "3-5 LPA",
      totalnumber: "Placement offers",
    },
    {
      package: "6-7 LPA",
      totalnumber: "Placement offers",
    },
    {
      package: "4-5 LPA",
      totalnumber: "Placement offers",
    },
    {
      package: "30 +",
      totalnumber: "Recruiters hired MIET students",
    },
    {
      package: "100 +",
      totalnumber: "Recruiters hired MIET students",
    },
    {
      package: "30 +",
      totalnumber: "Recruiters hired MIET students",
    },
    {
      package: "100 +",
      totalnumber: "Recruiters hired MIET students",
    },
  ];

  const totalplacementsset1 = totalplacements.slice(0, 4);
  const totalplacementsset2 = totalplacements.slice(4, 8);
  return (
    <div className="flex flex-col gap-8 sm:p-4 md:p-8 xl:p-16 w-full justify-center items-center">
      <span className="flex flex-col gap-2 w-full justify-center items-center">
        <span className="lg:text-4xl sm:text-2xl font-dancingscript font-semibold text-[#0053CE]">
          “Connecting you to your dream career”
        </span>
        <HeadingTemplate heading={"OUTSTANDING PLACEMENTS"} />
      </span>
      <div className="flex flex-col w-full gap-6">
        <div className="overflow-hidden">
          <Swiper
            slidesPerView={4}
            centeredSlides={true}
            grid={{
              rows: 1,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            spaceBetween={30}
            loop={true}
            modules={[Grid, Navigation, Autoplay]}
          >
            {placements.map((placement, index) => (
              <SwiperSlide
                key={index}
                virtualIndex={index}
                className="flex items-center justify-between flex-col gap-2 px-2 py-4 rounded-sm max-w-[21vmax] bg-[inear-gradient(180deg,_#FFF_0%,_#FFF7F8_100%)] shadow-[0_0_10px_1px_rgba(0,_0,_0,_0.15)] my-2"
              >
                <span className="flex items-center justify-center border border-[#bb3232] rounded-full p-2">
                  <img
                    src={placement.imgsrc}
                    alt=""
                    className="rounded-full size-[8.2vmax] object-cover object-top"
                  />
                </span>
                <span className="flex flex-col items-center justify-center">
                  <span className="text-[#bb3232] sm:text-lg xl:text-xl font-semibold text-center">
                    {placement.name}
                  </span>
                  <span className="h-fit py-1 font-semibold sm:text-xs xl:text-sm text-[#888] text-center">
                    Company: {placement.company}
                  </span>
                  <span className="xl:text-base sm:text-sm text-[#888] text-center">
                    {" "}
                    {placement.jobrole}
                  </span>
                </span>
                <span className="flex items-center">
                  <span className="h-[2px] w-[1rem] bg-red-700"></span>
                  <span className="h-[4px] w-[2rem] bg-red-700"></span>
                  <span className="h-[2px] w-[1rem] bg-red-700"></span>
                </span>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="flex gap-[1.2vmax] justify-between">
          <div className="grid lg:grid-cols-4 grid-cols-2 gap-4 p-4 bg-[#bb3232] rounded-sm flex-1">
            {totalplacementsset1.map((totalplacement, index) => (
              <div
                key={index}
                className="flex flex-col gap-1 justify-center items-center text-white"
              >
                <span className="xl:text-xl sm:text-base font-semibold">
                  {totalplacement.package} LPA
                </span>
                <span className="w-[3.4rem] h-[2px] bg-yellow-400"></span>
                <span className="xl:text-sm sm:text-xs text-center">
                  {totalplacement.totalnumber}
                </span>
              </div>
            ))}
          </div>
          <div className="grid lg:grid-cols-4 grid-cols-2 gap-4 p-4 bg-[#bb3232] rounded-sm flex-1">
            {totalplacementsset2.map((totalplacement, index) => (
              <div
                key={index}
                className="flex flex-col gap-1 justify-center items-center text-white"
              >
                <span className="xl:text-xl sm:text-base font-semibold flex gap-1 items-center text-center">
                  <span>{totalplacement.package}</span>
                  <span>
                    <FaPlus className="xl:text-sm sm:text-xs" />
                  </span>
                </span>
                <span className="w-[4rem] h-[2px] bg-yellow-400"></span>
                <span className="xl:text-sm sm:text-xs text-center">
                  {totalplacement.totalnumber}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutstandingPlacement;
