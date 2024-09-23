import React from "react";
import MainPageTemplate from "../../template/MainPageTemplate";
import SubBanner from "../SubBanner";
import DeptSideHeader from "./DeptSideHeader";
import FooterComponent from "../FooterComponent";

const DeptProgramOutcomeDesign = ({ content }) => {
  const { bannerimg, heading, sideheaderdept, deptimg, programoutcome } =
    content;
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
          <div className="flex flex-col gap-4">
            {programoutcome.map((program, index) => (
              <div key={index} className="flex flex-col gap-2">
                <div className="text-4xl font-semibold text-[#DC143C]">
                  {program.heading}
                </div>

                <div className="flex flex-col gap-2">
                  {program.description.map((item, index) => (
                    <div key={index} className="text-lg">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <FooterComponent />
    </MainPageTemplate>
  );
};

export default DeptProgramOutcomeDesign;
