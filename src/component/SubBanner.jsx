import React from "react";

const SubBanner = ({ heading, bannerimg }) => {
  return (
    <div className="relative bg-gray-900">
      <img
        className="  w-full h-auto object-cover"
        src={bannerimg}
        alt="Background"
      />

      <div className=" absolute inset-0 z-10 flex flex-col items-center justify-center h-full">
        <h1 className="sm:text-xl md:text-4xl lg:text-5xl text-white text-center text-shadow">
          {heading}
        </h1>
      </div>
    </div>
  );
};

export default SubBanner;
