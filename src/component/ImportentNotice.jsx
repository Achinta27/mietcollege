import React from "react";
import HeadingTemplate from "../template/HeadingTemplate";
import { LuCalendarClock } from "react-icons/lu";
import { PiArrowSquareOutLight } from "react-icons/pi";

const ImportentNotice = () => {
  const noticed = [
    {
      heading: "Final Merit List for B.Tech Lateral Entry 2023-24",
      date: "15 December, 2023",
    },
    {
      heading: "Merit List For B.Tech Lateral Entry 2nd Year",
      date: "15 December, 2023",
    },
    {
      heading:
        "Notice for Decentralized Counseling for Admission in 2nd year (Lateral Entry) of 4-year B.Tech Course (2023-24)",
      date: "7 December, 2023",
    },
    {
      heading:
        "MAKAUT NOTICE ON DECENTRALIZED COUNSELLING (B.TECH -LATERAL) 2023-24",
      date: "6 December, 2023",
    },
    {
      heading: "Final Merit List for B.Tech Lateral Entry 2023-24",
      date: "15 December, 2023",
    },
    {
      heading: "Merit List For B.Tech Lateral Entry 2nd Year",
      date: "15 December, 2023",
    },
    {
      heading:
        "Notice for Decentralized Counseling for Admission in 2nd year (Lateral Entry) of 4-year B.Tech Course (2023-24)",
      date: "7 December, 2023",
    },
    {
      heading:
        "MAKAUT NOTICE ON DECENTRALIZED COUNSELLING (B.TECH -LATERAL) 2023-24",
      date: "6 December, 2023",
    },
  ];
  return (
    <div className="flex flex-col gap-8 sm:p-4 md:p-8 xl:p-16 w-full justify-center items-center">
      <HeadingTemplate heading={"CAMPUS NEWS & UPDATES"} />
      <div className="flex sm:flex-col md:flex-row w-full sm:gap-5 lg:gap-0 xl:gap-5">
        <div className=" sm:w-full sm:h-fit">
          <span>
            <img
              src="/images/notice.jpg"
              alt=""
              className="rounded-md max-w-[44vmax] w-full"
            />
          </span>
        </div>
        <div className="sm:h-[50vh] sm:max-w-full md:max-w-[44vmax] lg:h-[55vh] w-full xl:h-[65vh] overflow-y-scroll flex flex-col md:pe-[2vmax] gap-6">
          {noticed.map((notice, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row rounded-md p-2 md:p-[1.38vmax] gap-[1.59vmax] border border-[#e7e7e7] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)]"
            >
              <span className="flex flex-col gap-2 max-w-[35ch]">
                <span className="flex font-semibold ">
                  <span></span>
                  <span className="">{notice.heading}</span>
                </span>
                <span className="text-sm flex items-center text-[#666]">
                  <LuCalendarClock className="size-4 pe-1 text-[#DC143C]" />{" "}
                  Date: {notice.date}
                </span>
              </span>
              <div className="md:py-[0.55vmax] py-0.5 px-2 md:px-[1.25vmax] rounded-md hover:bg-[#e4db2d] hover:text-black flex justify-center items-center bg-[#DC143C] text-white self-start md:self-end cursor-pointer">
                Know More <PiArrowSquareOutLight className="ps-1 size-5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImportentNotice;
