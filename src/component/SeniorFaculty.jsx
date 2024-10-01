import React from "react";
import HeadingTemplate from "../template/HeadingTemplate";

const SeniorFaculty = () => {
  const facultys = [
    {
      name: "Mr. Rana Deb",
      role: "Chairman | MIET College",
      img: "/images/chairman.jpg",
      text: "Institutions. While students, curriculum, and faculty comprise the three strongest pillars of our system; enthusiasm, passion and a driving compulsion to excel form the soul of our movement. Institutions. While students, curriculum, and faculty comprise the three strongest pillars of our system; enthusiasm, passion and a driving compulsion to excel form the soul of our movement.",
    },
    {
      name: "Mr. Arijit Chowdhury",
      role: "Principal | MIET College",
      img: "/images/principalimg.png",
      text: "Institutions. While students, curriculum, and faculty comprise the three strongest pillars of our system; enthusiasm, passion and a driving compulsion to excel form the soul of our movement. Institutions. While students, curriculum, and faculty comprise the three strongest pillars of our system; enthusiasm, passion and a driving compulsion to excel form the soul of our movement.",
    },
  ];

  return (
    <div className="flex flex-col gap-8 sm:p-4 md:p-8 xl:p-16 w-full justify-center items-center">
      <span className="flex flex-col gap-2 w-full justify-center items-center">
        <HeadingTemplate heading={"Desk of Management"} />
      </span>
      <div className="w-full grid sm:grid-cols-1 md:grid-cols-2 gap-5">
        {facultys.map((faculty, index) => (
          <div
            className="flex flex-col justify-center py-[2.3vmax] px-[4.5vmax] rounded-lg shadow-[0px_0px_10px_1px_rgba(0,_0,_0,_0.15)] gap-[1.33vmax] bg-[linear-gradient(180deg,_#FFF_0%,_#FFF7F8_100%)]"
            key={index}
          >
            <div className="flex md:flex-row sm:flex-col gap-[1.25vmax]">
              <div className="md:size-[5vmax] sm:size-[6rem] border-[#DC143C] self-center  border rounded-full p-2">
                <img
                  src={faculty.img}
                  alt="faculty"
                  className="rounded-full size-full object-cover"
                />
              </div>
              <div className="w-0.5 md:block sm:hidden h-full bg-[#555]"></div>
              <div className="flex flex-col justify-evenly self-center">
                <span className="text-lg md:text-2xl text-[#bb3232] font-semibold">
                  {faculty.name}
                </span>
                <span className="text-sm md:text-xl text-gray-500">
                  {faculty.role}
                </span>
              </div>
            </div>
            <div className="text-sm overflow-hidden text-[#888]">
              {faculty.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeniorFaculty;
