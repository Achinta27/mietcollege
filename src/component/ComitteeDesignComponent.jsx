import React from "react";
import MainPageTemplate from "../template/MainPageTemplate";
import SubBanner from "./SubBanner";
import EnquiryBoxComponent from "./EnquiryBoxComponent";
import FooterComponent from "./FooterComponent";

const ComitteeDesignComponent = ({ content }) => {
  const { bannerimg, heading, pageshortheaing, header, body } = content;

  return (
    <MainPageTemplate>
      <SubBanner bannerimg={bannerimg} heading={heading} />
      <div className="xl:p-16 lg:p-8 sm:p-4 flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <div className="text-2xl font-semibold">{pageshortheaing}</div>
          <div className="flex flex-col">
            <div className="grid grid-cols-1 sm:p-2 md:p-4 rounded-t-lg bg-[#DC143C]">
              <div className="md:flex md:justify-between sm:grid lg:px-8 grid-cols-3 sm:gap-4 md:gap-0">
                <div className="md:flex-1 md:text-lg sm:text-xs font-semibold text-white">
                  {header[0]}
                </div>
                <div className="md:flex-1 md:flex justify-center md:text-lg sm:text-xs font-semibold text-white">
                  {header[1]}
                </div>
                <div className="md:flex-1 md:text-lg sm:text-xs font-semibold text-white text-right">
                  {header[2]}
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              {body.map((row, rowIndex) => (
                <div
                  className={`grid grid-cols-1 sm:p-2 md:p-4 ${
                    rowIndex % 2 === 0 ? "bg-white" : "bg-[#DC143C14]"
                  }`}
                  key={rowIndex}
                >
                  <div className="md:flex md:justify-between sm:grid grid-cols-3 lg:px-8 sm:gap-4 md:gap-0">
                    <div className="md:flex-1 md:text-lg sm:text-xs font-semibold break-words">
                      {row[0]}
                    </div>
                    <div className="md:flex-1 md:flex justify-center text-start md:text-lg sm:text-xs font-semibold break-words">
                      {row[1]}
                    </div>
                    <div className="md:flex-1 md:text-lg sm:text-xs font-semibold text-right break-words">
                      {row[2]}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full flex justify-between sm:flex-col md:flex-row gap-4">
          <div className="md:w-[30%] sm:w-full">
            <EnquiryBoxComponent />
          </div>
          <div className="md:w-[40%] sm:w-full">
            <img src="/images/comitte.png" alt="Committee" className="w-full" />
          </div>
        </div>
      </div>
      <FooterComponent />
    </MainPageTemplate>
  );
};

export default ComitteeDesignComponent;
