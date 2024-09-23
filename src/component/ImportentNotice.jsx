import React from "react";
import HeadingTemplate from "../template/HeadingTemplate";

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
      <div className="flex sm:flex-col lg:flex-row w-full sm:gap-5 lg:gap-0 xl:gap-5">
        <div className="lg:w-[50%] sm:w-full  sm:h-fit">
          <span>
            <img src="/images/notice.jpg" alt="" className="rounded-md " />
          </span>
        </div>
        <div className="lg:w-[50%] sm:w-full sm:h-[50vh] lg:h-[55vh] xl:h-[65vh] overflow-y-scroll flex  items-center flex-col gap-6">
          {noticed.map((notice, index) => (
            <div
              key={index}
              className="flex flex-row rounded-md p-2 sm:w-full md:w-[80%] xl:w-[70%]  gap-4 items-center justify-center  border border-gray-200 shadow-lg"
            >
              <span className="flex flex-col w-[60%] gap-2">
                <span className="flex font-semibold ">
                  <span></span>
                  <span className="">{notice.heading}</span>
                </span>
                <span className="text-sm">Date: {notice.date}</span>
              </span>
              <div className="w-[6rem] h-[2rem]  rounded-md hover:bg-[#e4db2d] hover:text-black flex justify-center items-center bg-[#bb3232] text-white">
                Read More
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImportentNotice;
