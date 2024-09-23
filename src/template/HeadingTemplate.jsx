import React from "react";

const HeadingTemplate = ({ heading }) => {
  return (
    <div className="w-full flex  justify-center items-center">
      <div className="w-fit flex flex-col gap-1 justify-center items-center ">
        <span className="text-2xl font-bold ">{heading}</span>
        <span className="flex items-center">
          <span className="h-[2px] w-[6rem] bg-red-700"></span>
          <span className="h-[4px] w-[4rem] bg-red-700"></span>
          <span className="h-[2px] w-[6rem] bg-red-700"></span>
        </span>
      </div>
    </div>
  );
};

export default HeadingTemplate;
