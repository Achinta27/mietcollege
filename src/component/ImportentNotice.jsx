import React, { useEffect, useRef } from "react";
import HeadingTemplate from "../template/HeadingTemplate";
import { LuCalendarClock } from "react-icons/lu";
import { PiArrowSquareOutLight } from "react-icons/pi";

const ImportentNotice = () => {
  const noticeContainerRef = useRef(null);

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

  useEffect(() => {
    const scrollContainer = noticeContainerRef.current;
    let scrollInterval;

    if (scrollContainer) {
      scrollInterval = setInterval(() => {
        if (
          scrollContainer.scrollTop + scrollContainer.clientHeight >=
          scrollContainer.scrollHeight
        ) {
          // If the container reaches the bottom, scroll back to the top
          scrollContainer.scrollTop = 0;
        } else {
          // Scroll down slowly
          scrollContainer.scrollTop += 1;
        }
      }, 50); // Adjust the interval to control scroll speed (50ms = smooth scrolling)
    }

    return () => {
      // Cleanup the interval on component unmount
      clearInterval(scrollInterval);
    };
  }, []);

  return (
    <div className="flex flex-col gap-8 sm:p-4 md:p-8 xl:p-16 w-full justify-center items-center">
      <HeadingTemplate heading={"CAMPUS NEWS & UPDATES"} />
      <div className="flex sm:flex-col md:flex-row w-full sm:gap-5 lg:gap-0 xl:gap-5">
        <div className="sm:w-full sm:h-fit">
          <span>
            <img
              src="/images/notice.jpg"
              alt=""
              className="rounded-md md:max-w-[30rem] lg:max-w-[29rem] xlg:max-w-[40rem] xl:max-w-[44vmax] w-full"
            />
          </span>
        </div>
        <div
          ref={noticeContainerRef} // Reference to the scrollable container
          className="sm:h-[50vh] md:h-[30vh] sm:max-w-full md:max-w-[44vmax] lg:h-[55vh] w-full xl:h-[65vh] overflow-y-scroll flex flex-col md:pe-[2vmax] gap-6"
        >
          {noticed.map((notice, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row rounded-md p-2 md:p-[1.38vmax] gap-[1.59vmax] border border-[#e7e7e7] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)]"
            >
              <span className="flex flex-col gap-2 max-w-[35ch]">
                <span className="flex font-semibold ">
                  <span></span>
                  <span className="xl:text-base sm:text-sm">
                    {notice.heading}
                  </span>
                </span>
                <span className="text-sm flex items-center text-[#666]">
                  <LuCalendarClock className="size-4 pe-1 text-[#DC143C]" />{" "}
                  Date: {notice.date}
                </span>
              </span>
              <div className="xl:py-[0.55vmax] py-0.5 px-2 xl:px-[1.25vmax] rounded-md hover:bg-[#e4db2d] hover:text-black flex justify-center items-center bg-[#DC143C] sm:text-sm xl:text-base text-white self-end md:self-end cursor-pointer">
                Know More <PiArrowSquareOutLight className="ps-1  size-5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImportentNotice;
