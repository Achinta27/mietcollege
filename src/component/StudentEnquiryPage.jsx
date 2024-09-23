import React from "react";
import MainPageTemplate from "../template/MainPageTemplate";
import SubBanner from "./SubBanner";
import FooterComponent from "./FooterComponent";

const StudentEnquiryPage = () => {
  return (
    <MainPageTemplate>
      <SubBanner
        bannerimg={"/images/admissionsubbanner.jpg"}
        heading={"Admission 2024"}
      />
      <div className="xl:p-16 sm:p-4 lg:p-8">
        <div className="grid grid-cols-2 gap-6">
          <span>
            <img
              src="/images/admisionenquiryimg.jpg"
              alt=""
              className="w-[80%]"
            />
          </span>
          <span className="flex flex-col gap-4">
            <span className="flex text-4xl font-semibold text-[#DC143C]">
              Quick Enquiry For Admission
            </span>
            <form className="flex flex-col gap-10">
              <div className="flex flex-col gap-2 relative">
                <label className="text-base font-semibold bg-white px-1 absolute top-1 left-3">
                  Name*
                </label>
                <input
                  type="text"
                  className="border-2 rounded-md h-[5rem] w-full p-2 mt-4"
                />
              </div>
              <div className="flex flex-col gap-2 relative">
                <label className="text-base font-semibold bg-white px-1 absolute top-1 left-3">
                  Mobile Number*
                </label>
                <input
                  type="text"
                  className="border-2 rounded-md h-[5rem] w-full p-2 mt-4"
                />
              </div>
              <div className="flex flex-col gap-2 relative">
                <label className="text-base font-semibold bg-white px-1 absolute top-1 left-3">
                  Select Interested Course*
                </label>
                <select
                  name="package"
                  className="border-2 rounded-md h-[5rem] w-full p-2 mt-4"
                >
                  <option value=""></option>
                  <option value="B.Tech">B.Tech</option>
                  <option value="Diploma">Diploma</option>
                </select>
              </div>
              <div className="flex flex-col gap-2 relative">
                <label className="text-base font-semibold bg-white px-1 absolute top-1 left-3">
                  Location*
                </label>
                <input
                  type="text"
                  className="border-2 rounded-md h-[5rem] w-full p-2 mt-4"
                />
              </div>
              <div className="flex flex-col gap-2 relative">
                <label className="text-base font-semibold bg-white px-1 absolute top-1 left-3">
                  Massage*
                </label>
                <input
                  type="text"
                  className="border-2 rounded-md h-[5rem] w-full p-2 mt-4"
                />
              </div>
              <button
                type="submit"
                className="bg-[#DC143C] h-[5rem] w-full text-xl text-white font-semibold"
              >
                Submit
              </button>
            </form>
          </span>
        </div>
      </div>
      <FooterComponent />
    </MainPageTemplate>
  );
};

export default StudentEnquiryPage;
