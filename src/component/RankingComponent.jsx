import React from "react";
import HeadingTemplate from "../template/HeadingTemplate";

const RankingComponent = () => {
  const rankings = [
    { imgsrc: "images/makaut_logo.png", peragraph: "Makaut" },
    { imgsrc: "images/makaut_logo.png", peragraph: "Makaut" },
    { imgsrc: "images/makaut_logo.png", peragraph: "Makaut" },
    { imgsrc: "images/makaut_logo.png", peragraph: "Makaut" },
  ];
  return (
    <div className="flex flex-col gap-8 sm:p-4 md:p-8 xl:p-16 w-full justify-center items-center">
      <HeadingTemplate heading={"Ranking & Awards"} />
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 sm:gap-4 md:gap-6 lg:gap-10 w-full">
        {rankings.map((ranking, index) => (
          <div
            key={index}
            className="justify-center items-center flex relative"
          >
            <img
              src="/images/banner-bg.png"
              alt=""
              className="xl:w-[20rem] xlg:w-[16rem] lg:w-[14rem] sm:w-[16rem]"
            />
            <img
              src={ranking.imgsrc}
              alt=""
              className="xl:w-[8rem] xlg:w-[6rem] sm:w-[4.5rem] absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/3"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RankingComponent;
