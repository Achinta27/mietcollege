import React from "react";
import MainPageTemplate from "../template/MainPageTemplate";
import SubBanner from "../component/SubBanner";
import FooterComponent from "../component/FooterComponent";

const FeesStructure = () => {
  const feesstructure = [
    {
      department: "B. Tech",
      sem1: "1st",
      sem2: "2nd",
      sem3: "3rd",
      sem4: "4th",
      total: "5 Lakh",
      hostel: "23,557",
    },
    {
      department: "Diploma",
      sem1: "1st",
      sem2: "2nd",
      sem3: "3rd",
      sem4: "4th",
      total: "5 Lakh",
      hostel: "23,557",
    },
  ];
  return (
    <MainPageTemplate>
      <SubBanner
        bannerimg={"/images/admissionsubbanner.jpg"}
        heading={"Fees Structure"}
      />
      <div className="xl:p-16 lg:p-8 sm:p-4 flex flex-col gap-8">
        <div className="w-full overflow-x-auto">
          <div className="min-w-[1200px] bg-white">
            <div className="flex flex-col">
              <div className="grid grid-cols-7 p-4 bg-[#DC143C] text-lg font-semibold text-center text-white">
                <span>Department</span>
                <span>Semester I</span>
                <span>Semester II</span>
                <span>Semester III</span>
                <span>Semester IV</span>
                <span>Total</span>
                <span>Including Hostel</span>
              </div>
              <div className="flex flex-col border-x-2 border-b-2">
                {feesstructure.map((fees, index) => (
                  <div
                    className={`grid grid-cols-7 p-4 text-center ${
                      index % 2 === 0 ? "bg-white" : "bg-[#DC143C14]"
                    }`}
                  >
                    <span>{fees.department}</span>
                    <span>{fees.sem1}</span>
                    <span>{fees.sem2}</span>
                    <span>{fees.sem3}</span>
                    <span>{fees.sem4}</span>
                    <span>{fees.total}</span>
                    <span>{fees.hostel}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center sm:gap-2 md:gap-6 lg:gap-16 sm:text-base md:text-2xl lg:text-3xl font-bold text-white">
          <div className="h-[5rem] sm:w-[50%] md:w-[45%] bg-[#DC143C] flex sm:p-4 md:p-8 lg:px-16 text-center justify-center items-center rounded-lg ">
            Placement Previous Year Download PDF
          </div>
          <div className="h-[5rem] sm:w-[50%] md:w-[45%] bg-[#DC143C] sm:p-4 md:p-8 lg:px-16  text-center flex justify-center items-center rounded-lg ">
            Placement Previous Year Download PDF
          </div>
        </div>
      </div>
      <FooterComponent />
    </MainPageTemplate>
  );
};

export default FeesStructure;
