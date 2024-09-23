import React from "react";
import HeadingTemplate from "../template/HeadingTemplate";
import { FaPlus } from "react-icons/fa";

const OutstandingPlacement = () => {
  const placements = [
    {
      imgsrc: "/images/placement.jpg",
      name: "Susmita Mondol",
      company: "Infosys",
      jobrole: "Assosiate Manager",
    },
    {
      imgsrc: "/images/placement.jpg",
      name: "Susmita Mondol",
      company: "Infosys",
      jobrole: "Assosiate Manager",
    },
    {
      imgsrc: "/images/placement.jpg",
      name: "Susmita Mondol",
      company: "Infosys",
      jobrole: "Assosiate Manager",
    },
    {
      imgsrc: "/images/placement.jpg",
      name: "Susmita Mondol",
      company: "Infosys",
      jobrole: "Assosiate Manager",
    },
    {
      imgsrc: "/images/placement1.jpg",
      name: "Jyotirmoy Nandi",
      company: "Infosys",
      jobrole: "System Engineer",
    },
    {
      imgsrc: "/images/placement1.jpg",
      name: "Jyotirmoy Nandi",
      company: "Infosys",
      jobrole: "System Engineer",
    },
    {
      imgsrc: "/images/placement1.jpg",
      name: "Jyotirmoy Nandi",
      company: "Infosys",
      jobrole: "System Engineer",
    },
    {
      imgsrc: "/images/placement1.jpg",
      name: "Jyotirmoy Nandi",
      company: "Infosys",
      jobrole: "System Engineer",
    },
  ];
  const totalplacements = [
    {
      package: "4-5",
      totalnumber: "1800 Placement offers",
    },
    {
      package: "4-5",
      totalnumber: "1800 Placement offers",
    },
    {
      package: "4-5",
      totalnumber: "1800 Placement offers",
    },
    {
      package: "4-5",
      totalnumber: "1800 Placement offers",
    },
    {
      package: "2000",
      totalnumber: "Recruiters hired MIET students",
    },
    {
      package: "2000",
      totalnumber: "Recruiters hired MIET students",
    },
    {
      package: "2000",
      totalnumber: "Recruiters hired MIET students",
    },
    {
      package: "2000",
      totalnumber: "Recruiters hired MIET students",
    },
  ];
  const placementsSet1 = placements.slice(0, 4);
  const placementsSet2 = placements.slice(4, 8);
  const totalplacementsset1 = totalplacements.slice(0, 4);
  const totalplacementsset2 = totalplacements.slice(4, 8);
  return (
    <div className="flex flex-col gap-8 sm:p-4 md:p-8 xl:p-16 w-full justify-center items-center">
      <span className="flex flex-col gap-2 w-full justify-center items-center">
        <HeadingTemplate heading={"OUTSTANDING PLACEMENTS"} />
        <span className="lg:text-4xl sm:text-2xl   font-dancingscript font-semibold">
          “Connecting you to your dream career”
        </span>
      </span>
      <div className="flex w-full gap-6 lg:flex-row sm:flex-col">
        <div className="lg:w-[50%] sm:w-full flex flex-col gap-2">
          <div className="grid grid-cols-2 gap-4">
            {placementsSet1.map((placement, index) => (
              <div
                key={index}
                className="flex lg:flex-row sm:flex-col gap-2 p-2 rounded-sm border border-gray-200"
              >
                <span className="lg:w-[30%] sm:w-full flex items-center justify-center">
                  <img src={placement.imgsrc} alt="" className="rounded-full" />
                </span>
                <span className="lg:w-[65%] sm:w-full flex flex-col sm:items-center lg:items-start  justify-center">
                  <span className="text-[#bb3232] sm:text-lg xl:text-xl font-semibold">
                    {placement.name}
                  </span>
                  <span className="w-fit h-fit p-1 rounded-sm text-white font-semibold sm:text-xs xl:text-sm bg-[#bb3232]">
                    {placement.company}
                  </span>
                  <span className="xl:text-base sm:text-sm">
                    {" "}
                    {placement.jobrole}
                  </span>
                </span>
              </div>
            ))}
          </div>
          <div className="w-full h-fit p-4 bg-[#bb3232] rounded-sm">
            <div className="grid lg:grid-cols-4 grid-cols-2 gap-4 sm:h-fit lg:h-[5rem]">
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
          </div>
        </div>
        <div className="lg:w-[50%] sm:w-full flex flex-col gap-2">
          <div className="grid grid-cols-2 gap-4 ">
            {placementsSet2.map((placement, index) => (
              <div
                key={index}
                className="flex lg:flex-row sm:flex-col gap-2 p-2 rounded-sm border border-gray-200"
              >
                <span className="lg:w-[30%] sm:w-full flex items-center justify-center">
                  <img src={placement.imgsrc} alt="" className="rounded-full" />
                </span>
                <span className="lg:w-[65%] sm:w-full flex flex-col sm:items-center lg:items-start  justify-center">
                  <span className="text-[#bb3232] sm:text-lg xl:text-xl font-semibold">
                    {placement.name}
                  </span>
                  <span className="w-fit h-fit p-1 rounded-sm text-white font-semibold sm:text-xs xl:text-sm bg-[#bb3232]">
                    {placement.company}
                  </span>
                  <span className="xl:text-base sm:text-sm">
                    {placement.jobrole}
                  </span>
                </span>
              </div>
            ))}
          </div>
          <div className="w-full h-fit p-4 bg-[#bb3232] rounded-sm">
            <div className="grid lg:grid-cols-4 grid-cols-2 gap-4 sm:h-fit lg:h-[5rem]">
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
    </div>
  );
};

export default OutstandingPlacement;
