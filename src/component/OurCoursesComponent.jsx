import React from "react";
import HeadingTemplate from "../template/HeadingTemplate";

const OurCoursesComponent = () => {
  return (
    <div className="flex flex-col gap-8 sm:p-4 md:p-8 xl:p-16 w-full justify-center items-center">
      <HeadingTemplate heading={"EXPLORE OUR COURSES"} />
      <div className=" sm:w-full  sm:h-fit">
        <div className="flex flex-col gap-4">
          <span className="flex flex-col gap-2">
            <span className="xl:text-2xl sm:text-2xl lg:text-xl font-bold underline underline-offset-8 decoration-[#bb3232]">
              WHY STUDY AT MIET?
            </span>
            <span className="xl:text-lg sm:text-lg lg:text-base">
              With unmatched facility and stae-of-art infrastructure, modern
              labs, canteen, hostel, library.
            </span>
            <span className="xl:text-lg sm:text-lg lg:text-base">
              A student needs to be shaped for corporate requirements,
              behavioral patterns, and expectations. We continually impart such
              knowledge through regular training sessions on human skills,
              corporate environments, interview tactics, mock sessions and
              relevant technical software sessions; these sessions being woven
              into the regular class fabric.
            </span>
          </span>
          <div className="flex sm:flex-col lg:flex-row gap-4">
            <span className="flex flex-col gap-4">
              <div className="xl:text-2xl sm:text-2xl lg:text-xl font-bold">
                Course Offered
              </div>
              <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
                <span className="w-full sm:h-[15rem] lg:h-[12rem] xl:h-[15rem] p-4 flex flex-col gap-4 rounded-md text-white bg-[#bb3232]">
                  <span className="xl:text-xl sm:text-xl lg:text-lg font-bold">
                    B.Tech
                  </span>
                  <span className="xl:text-sm sm:text-sm lg:text-xs">
                    B.Tech is offered in the following streams Mechanical
                    Engineering, Electrical Engineering, Civil Engineering,
                    Electronics & Communications Engineering, Computer science &
                    EngineeringDiplomaDiploma
                  </span>
                </span>
                <span className="w-full sm:h-[15rem] lg:h-[12rem] xl:h-[15rem] p-4 flex flex-col gap-4 rounded-md text-black bg-[#f4c52b]">
                  <span className="xl:text-xl sm:text-xl lg:text-lg font-bold">
                    Diploma
                  </span>
                  <span className="xl:text-sm sm:text-sm lg:text-xs">
                    Diploma is offered in the following streams Mechanical
                    Engineering, Electrical EngineeringImportant, Diploma is
                    offered in the following streams Mechanical Engineering,
                    Electrical EngineeringImportant
                  </span>
                </span>
              </div>
            </span>
            <span className="flex flex-col gap-4">
              <div className="xl:text-2xl sm:text-2xl lg:text-xl font-bold">
                Training & Placement
              </div>
              <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
                <span className="w-full sm:h-[15rem] lg:h-[12rem] xl:h-[15rem] p-4 flex flex-col gap-4 rounded-md text-white bg-[#bb3232]">
                  <span className="xl:text-xl sm:text-xl lg:text-lg font-bold">
                    Our Recruiters
                  </span>
                  <span className="xl:text-sm sm:text-sm lg:text-xs">
                    The Corporate Relations team pivots activities related to
                    the corporate liaison, placement, and relevant training,
                    focusing on providing students with an authentic and maximum
                    number of campus opportunities.
                  </span>
                </span>
                <span className="w-full sm:h-[15rem] lg:h-[12rem] xl:h-[15rem] p-4 flex flex-col gap-4 rounded-md text-black bg-[#f4c52b]">
                  <span className="xl:text-xl sm:text-xl lg:text-lg font-bold">
                    Skill Development
                  </span>
                  <span className="xl:text-sm sm:text-sm lg:text-xs">
                    Diploma is offered in the following streams Mechanical
                    Engineering, Electrical EngineeringImportant, Diploma is
                    offered in the following streams Mechanical Engineering,
                    Electrical EngineeringImportant
                  </span>
                </span>
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCoursesComponent;
