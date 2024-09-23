import React from "react";
import MainPageTemplate from "../template/MainPageTemplate";
import SubBanner from "./SubBanner";
import FooterComponent from "./FooterComponent";

const EventPageDesignComponent = ({ content }) => {
  const { bannerimg, heading, events } = content;
  return (
    <MainPageTemplate>
      <SubBanner bannerimg={bannerimg} heading={heading} />
      <div className="xl:p-16 lg:p-8 sm:p-4 flex flex-col gap-8">
        {events.map((item, index) => (
          <div
            key={index}
            className="flex md:flex-row sm:flex-col sm:gap-4 items-center md:gap-4 lg:gap-4 xlg:gap-8"
          >
            <div className="xlg:w-[25%] lg:w-[30%] md:w-[40%] ">
              <img src={item.eventimg} alt="" className="w-full" />
            </div>
            <div className="xlg:w-[75%] lg:w-[70%] md:w-[60%] flex flex-col sm:gap-4 lg:gap-2 xlg:gap-4">
              <div className="xl:text-3xl xlg:text-2xl lg:text-xl md:text-base font-semibold text-[#DC143C]">
                {item.title}
              </div>
              <div className="flex items-center gap-2">
                <span>
                  <img src="/images/event.svg" alt="" className="h-6 w-6" />
                </span>
                <span className="lg:text-lg sm:text-sm font-medium">
                  {item.date}
                </span>
              </div>
              <div className="lg:text-lg sm:text-sm font-medium">
                {" "}
                {item.register}
              </div>
              <div className="w-fit sm:h-[2.5rem] lg:h-[3rem] px-8 flex justify-center items-center text-white text-xl font-semibold bg-[#DC143C] rounded-full">
                Read More ...
              </div>
            </div>
          </div>
        ))}
      </div>
      <FooterComponent />
    </MainPageTemplate>
  );
};

export default EventPageDesignComponent;
