import React from "react";

const SubBanner = ({ heading, bannerimg }) => {
  return (
    <div className="relative">
      <img
        className="  w-full h-auto object-cover"
        src={bannerimg}
        alt="Background"
      />

      <div className=" absolute inset-0 z-10 flex flex-col items-center justify-center h-full bg-[rgba(0,_0,_0,_0.53)]">
        <h1 className="sm:text-xl md:text-4xl lg:text-5xl text-white text-center text-shadow">
          {heading}
        </h1>
      </div>
    </div>
  );
};

export default SubBanner;
