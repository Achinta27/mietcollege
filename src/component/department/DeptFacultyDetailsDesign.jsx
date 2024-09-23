import React from "react";
import MainPageTemplate from "../../template/MainPageTemplate";
import SubBanner from "../SubBanner";
import DeptSideHeader from "./DeptSideHeader";
import FooterComponent from "../FooterComponent";

const DeptFacultyDetailsDesign = ({ content }) => {
  const { bannerimg, heading, sideheaderdept, facultydetails } = content;
  return (
    <MainPageTemplate>
      <SubBanner bannerimg={bannerimg} heading={heading} />
      <div className="xl:p-16 lg:p-8 sm:p-4 w-full flex sm:flex-col lg:flex-row gap-8">
        <div className="lg:w-[30%] sm:w-full flex flex-col gap-6">
          <DeptSideHeader sideheaderdept={sideheaderdept} />
        </div>
        <div className="lg:w-[70%] sm:w-full flex flex-col gap-6">
          {facultydetails.map((details, index) => (
            <div
              key={index}
              className="md:grid sm:flex sm:flex-col-reverse md:grid-cols-2 gap-4"
            >
              <div className="flex flex-col gap-4 ">
                <div className="text-3xl font-semibold text-[#DC143C]">
                  {details.name}
                </div>
                <div className="flex flex-col ">
                  {details.facultys.map((detail, index) => (
                    <div
                      key={index}
                      className={`flex justify-between text-lg font-semibold items-center p-4 ${
                        index % 2 === 0 ? "bg-white" : "bg-[#DC143C14]"
                      }`}
                    >
                      <div className="">{detail.heading}</div>
                      <div className="">{detail.description}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="">
                <img
                  src={details.facultyimg}
                  alt=""
                  className="lg:w-[80%] sm:w-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <FooterComponent />
    </MainPageTemplate>
  );
};

export default DeptFacultyDetailsDesign;
