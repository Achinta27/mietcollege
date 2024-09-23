import React from "react";
import HeadingTemplate from "../template/HeadingTemplate";

const SeniorFaculty = () => {
  const facultys = [
    {
      name: "Mr. Rana Deb",
      role: "Chairman ",
      text: "institutions. While students, curriculum, and faculty comprise the three strongest pillars of our system; enthusiasm, passion and a driving compulsion to excel form the soul of our movement.",
    },
    {
      name: "Mr. Rana Deb",
      role: "Chairman ",
      text: "institutions. While students, curriculum, and faculty comprise the three strongest pillars of our system; enthusiasm, passion and a driving compulsion to excel form the soul of our movement.",
    },
    {
      name: "Mr. Rana Deb",
      role: "Chairman ",
      text: "institutions. While students, curriculum, and faculty comprise the three strongest pillars of our system; enthusiasm, passion and a driving compulsion to excel form the soul of our movement.",
    },
  ];

  return (
    <div className="flex flex-col gap-8 sm:p-4 md:p-8 xl:p-16 w-full justify-center items-center">
      <span className="flex flex-col gap-2 w-full justify-center items-center">
        <HeadingTemplate heading={"SENIOR FACULTY"} />
        <span className="lg:text-2xl sm:text-xl text-center  lg:w-[60%] sm:w-full md:w-[85%]  font-dancingscript font-semibold">
          Senior faculty members of MIET play a significant role they build the
          university and provide their contribution to teaching and development
          within their department.
        </span>
      </span>
      <div className="w-full grid sm:grid-cols-1 md:grid-cols-2 xlg:grid-cols-3 gap-5">
        {facultys.map((faculty, index) => (
          <div
            className="flex items-center justify-center p-2 rounded-lg h-[13rem] flex-row gap-2 box-shadow border border-gray-100"
            key={index}
          >
            <div className="w-[30%]">
              <img
                src="/images/chairman.jpg"
                alt=""
                className="rounded-full w-fit h-fit"
              />
            </div>
            <span className="flex w-[70%] flex-col gap-1">
              <span className="text-lg text-[#bb3232] font-semibold">
                {faculty.name}
              </span>
              <span className="text-sm text-gray-500">{faculty.role}</span>
              <div
                className="text-sm overflow-hidden"
                style={{
                  display: "-webkit-box",
                  WebkitLineClamp: 5,
                  WebkitBoxOrient: "vertical",
                }}
              >
                {faculty.text}
              </div>
              {faculty.text.split("\n").length > 5 && (
                <span className="text-sm font-semibold text-[#bb3232]">
                  ...
                </span>
              )}
              <span className="text-sm font-semibold text-[#bb3232]">
                Read More .....
              </span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeniorFaculty;
