import React from "react";

const WorldClassFacilityImgComponent = () => {
  return (
    <div className="md:flex sm:hidden flex-col gap-4 justify-center items-center lg:h-screen">
      <div className="lg:text-4xl sm:text-2xl font-semibold text-center text-[#DC143C] mb-[6.45vmax]">
        When we say world-class facilities, we mean it!
      </div>
      <div className="flex flex-col gap-2 relative sm:mt-[15rem] lg:mt-[20rem] w-full items-center ">
        <div className="relative w-full flex justify-center items-center">
          <div className="absolute w-full z-10 bottom-1/2 left-0 flex justify-evenly">
            <img
              src="/images/worldclass.png"
              alt=""
              className="w-[36.8vmax] rounded-lg"
            />
            <img
              src="/images/principal-about.png"
              alt=""
              className="w-[36.8vmax] rounded-lg"
            />
          </div>
          <div className="lg:p-[8rem] sm:p-16 bg-[#DC143C] w-full relative rounded-t-3xl"></div>
        </div>
      </div>
    </div>
  );
};

export default WorldClassFacilityImgComponent;
