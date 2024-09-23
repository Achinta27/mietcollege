import React from "react";

const WorldClassFacilityImgComponent = () => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center lg:h-screen">
      <div className="lg:text-4xl sm:text-2xl font-semibold text-center text-[#DC143C] ">
        When we say world-class facilities, we mean it!
      </div>
      <div className="flex flex-col gap-2 relative sm:mt-[15rem] lg:mt-[20rem] w-full items-center">
        <div className="relative w-full flex justify-center items-center">
          <img
            src="/images/worldclass.png"
            alt=""
            className="absolute bottom-[3rem] sm:w-[95%] md:w-[60%] lg:w-[50%] z-10 left-1/2 transform -translate-x-1/2"
          />
          <div className="lg:p-[8rem] sm:p-16 bg-[#DC143C] w-full relative"></div>
        </div>
      </div>
    </div>
  );
};

export default WorldClassFacilityImgComponent;
