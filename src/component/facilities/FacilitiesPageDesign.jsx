import React from "react";
import MainPageTemplate from "../../template/MainPageTemplate";
import FacilitiesSideBar from "./FacilitiesSideBar";
import SubBanner from "../SubBanner";
import FooterComponent from "../FooterComponent";

const FacilitiesPageDesign = ({ content }) => {
  const { bannerimg, heading, facilitiesimg, facilities, header, body } =
    content;
  return (
    <MainPageTemplate>
      <SubBanner bannerimg={bannerimg} heading={heading} />
      <div className="xl:p-16 lg:p-8 sm:p-4 flex flex-col gap-8">
        <div className="flex flex-row gap-8 ">
          <div className="w-[30%] ">
            <FacilitiesSideBar />
          </div>
          <div className="w-[70%] flex flex-col gap-4">
            <div className="">
              <img src={facilitiesimg} alt="" className="w-full" />
            </div>
            <div className="flex flex-col gap-2">
              {facilities.map((item, index) => (
                <div key={index}>{item}</div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="grid grid-cols-4 p-4 rounded-t-lg bg-[#DC143C]">
            {header.map((item, index) => (
              <div className="text-lg font-semibold text-white" key={index}>
                {item}
              </div>
            ))}
          </div>
          <div className="flex flex-col">
            {body.map((row, rowIndex) => (
              <div
                className={`grid grid-cols-4 p-4 ${
                  rowIndex % 2 === 0 ? "bg-white" : "bg-[#DC143C14]"
                }`}
                key={rowIndex}
              >
                {row.map((cell, cellIndex) => (
                  <div key={cellIndex} className="text-lg font-semibold">
                    {cell}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <FooterComponent />
    </MainPageTemplate>
  );
};

export default FacilitiesPageDesign;
