import React from "react";
import MainPageTemplate from "../../template/MainPageTemplate";
import DeptSideHeader from "./DeptSideHeader";
import SubBanner from "../SubBanner";
import FooterComponent from "../FooterComponent";

const DeptDesignComponent = ({ content }) => {
  const { bannerimg, heading, sideheaderdept, deptimg, description } = content;
  return (
    <MainPageTemplate>
      <SubBanner bannerimg={bannerimg} heading={heading} />
      <div className="w-full flex gap-8 xl:p-16 lg:p-8 sm:p-4">
        <div className="w-[30%] flex flex-col gap-4 ">
          <DeptSideHeader sideheaderdept={sideheaderdept} />
        </div>
        <div className="w-[70%] flex flex-col gap-4">
          <div className="">
            <img src={deptimg} alt="" className="w-full" />
          </div>
          <div className="flex flex-col gap-2">
            {description.map((item, index) => (
              <div key={index} className="text-lg">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
      <FooterComponent />
    </MainPageTemplate>
  );
};

export default DeptDesignComponent;
