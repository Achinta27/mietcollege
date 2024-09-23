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
      <div className="grid sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-4 sm:gap-4 md:gap-6 lg:gap-10 ">
        {rankings.map((ranking, index) => (
          <div
            key={index}
            className="ranking-card xl:w-[20rem] xl:h-[12rem] xlg:w-[16rem] xlg:h-[10rem] lg:w-[14rem] lg:h-[10rem] sm:w-[16rem] sm:h-[10rem] bg-white justify-center items-center flex resize bg-cover"
            style={{ backgroundImage: "url(images/Building1.jpg)" }}
          >
            <div className="overlay">
              <div className="border-4 w-[90%] h-[90%] border-white  flex-col flex items-center justify-center p-2">
                <span>
                  <img
                    src={ranking.imgsrc}
                    alt=""
                    className="xl:w-[5rem] xl:h-[5rem] xlg:w-[4rem] xlg:h-[4rem] sm:w-[3.5rem] sm:h-[3.5rem] "
                  />
                </span>
                <span className="text-2xl font-semibold">
                  {ranking.peragraph}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RankingComponent;
