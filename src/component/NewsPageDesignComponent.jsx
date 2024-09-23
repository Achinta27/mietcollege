import React from "react";
import MainPageTemplate from "../template/MainPageTemplate";
import SubBanner from "./SubBanner";
import FooterComponent from "./FooterComponent";

const NewsPageDesignComponent = ({ content }) => {
  const { bannerimg, heading, news } = content;

  return (
    <MainPageTemplate>
      <SubBanner bannerimg={bannerimg} heading={heading} />
      <div className="xl:p-16 lg:p-8 sm:p-4 flex flex-col gap-8 ">
        <div className="text-3xl font-semibold ">Our MIET College Notices</div>
        <div className="flex flex-col ">
          {news.map((item, index) => (
            <div
              key={index}
              className={`flex flex-row w-full justify-between items-center p-4 ${
                index % 2 === 0 ? "bg-[white]" : "bg-[#DC143C14]"
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="text-xl font-semibold">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="flex items-center gap-2">
                  <div>
                    <img src="/images/news.svg" alt="" className="w-5 h-5" />
                  </div>
                  <div className="text-lg w-[80%] font-semibold ">
                    {item.title}
                  </div>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <span>
                  <img src="/images/event.svg" alt="" className="h-6 w-6" />
                </span>
                <span className="lg:text-lg sm:text-sm font-medium">
                  {item.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <FooterComponent />
    </MainPageTemplate>
  );
};

export default NewsPageDesignComponent;
