import React from "react";
import MainPageTemplate from "../template/MainPageTemplate";
import SubBanner from "./SubBanner";
import EnquiryBoxComponent from "./EnquiryBoxComponent";
import { VscCircleFilled } from "react-icons/vsc";
import FooterComponent from "./FooterComponent";

const OfferdCourseDesign = ({ content }) => {
  const {
    bannerimg,
    heading,
    smalldescription,
    courseimgsrc,
    coursedescription,
    courseoffers,
    allcourseheading,
    allcoursedescription,
    allcourses,
  } = content;
  return (
    <MainPageTemplate>
      <SubBanner bannerimg={bannerimg} heading={heading} />
      <div className="xl:p-16 lg:p-8 sm:p-4 flex flex-col gap-8">
        <div>{smalldescription}</div>
        <div className="text-4xl font-semibold text-[#DC143C]">{heading}</div>
        <div className="flex gap-6 ">
          <div className="w-[70%] flex flex-col gap-4">
            <div className="">
              <img src={courseimgsrc} alt="" className="w-full" />
            </div>
            <div className="flex flex-col gap-2">
              {coursedescription.map((description, index) => (
                <div key={index}>{description}</div>
              ))}
            </div>
          </div>
          <div className="w-[30%]">
            <EnquiryBoxComponent />
          </div>
        </div>
      </div>
      <div className="">
        <div className="flex  px-8 items-start border-[#FFC5D0] bg-[#DC143C] sm:text-xs md:text-base gap-2 lg:text-lg font-semibold text-white ">
          <div className="w-[15%] border-[#FFC5D0] sm:p-2 md:p-3 border-r">
            SL No.
          </div>
          <div className="w-[50%] border-[#FFC5D0] sm:p-2 md:p-3 border-r">
            Courses
          </div>
          <div className="w-[35%] sm:p-2 md:p-3">Number Of Seats</div>
        </div>
        <div className="flex flex-col">
          {courseoffers.map((tableitem, index) => (
            <div
              className={`flex  px-8 font-semibold  items-start gap-2 sm:text-[12px]  md:text-sm lg:text-base text-black ${
                index % 2 === 0 ? "bg-white" : "bg-[#DC143C14]"
              }`}
            >
              <div className="w-[15%] border-[#FFC5D0] sm:p-2 md:p-3 border-r">
                {tableitem.slno}
              </div>
              <div className="w-[50%] border-[#FFC5D0] sm:p-2 md:p-3 border-r">
                {tableitem.courses}
              </div>
              <div className="w-[35%] sm:p-2 md:p-3">{tableitem.seats}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="xl:p-16 lg:p-8 sm:p-4 flex flex-col gap-4 justify-center items-center">
        <div className="text-4xl font-semibold text-[#DC143C]">
          {allcourseheading}
        </div>
        <div className="">{allcoursedescription}</div>
        <div className="grid grid-cols-3 gap-8">
          {allcourses.map((course, index) => (
            <div key={index} className="flex flex-col boxsh rounded-lg">
              <div>
                <img src={course.imgsrc} alt="" />
              </div>
              <div className="h-[3.5rem] w-full flex justify-center items-center bg-[#DC143C] text-white font-semibold text-lg">
                {course.name}
              </div>
              <div className="p-4 h-[8rem] flex flex-col gap-2">
                {course.couesedetails.map((details, index) => (
                  <div
                    key={index}
                    className="flex text-lg font-semibold gap-2 items-center"
                  >
                    <VscCircleFilled />
                    <span>
                      {details.heads} : {details.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <FooterComponent />
    </MainPageTemplate>
  );
};

export default OfferdCourseDesign;
