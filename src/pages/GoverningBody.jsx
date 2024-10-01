import React from "react";
import MainPageTemplate from "../template/MainPageTemplate";
import SubBanner from "../component/SubBanner";
import FooterComponent from "../component/FooterComponent";

const GoverningBody = () => {
  const governingbodys = [
    {
      slno: "01",
      membername: "Mr. Rana Deb",
      designation: "Founder & Chairman",
    },
    { slno: "02", membername: "Mrs. Ruma Deb", designation: "Trustee" },
    {
      slno: "03",
      membername: "Prof. (Dr.) Arijit Choudhury",
      designation: "Principal",
    },
    {
      slno: "04",
      membername: "Prof. (Dr.) Haripada Bhaumik",
      designation:
        "Ex. Principal JGEC, NIT Silchar, Lather Technology College , W.B",
    },
    {
      slno: "05",
      membername: "Prof. (Dr.) Dilip Kumar Biswas",
      designation: "Deputy Director & Head, IRM, NML, Jamshedpur",
    },
    {
      slno: "06",
      membername: "Prof. (Dr.) Loknath Ghosh",
      designation: "Ex HOD ( Chemistry Dept.)  MIT, Bishnupur, W.B",
    },
    {
      slno: "07",
      membername: "Prof. (Dr.) Goutam Nandi",
      designation: "Ex. Prof. ME Dept. ,  J.U, Kolkata - 32",
    },
    {
      slno: "08",
      membername: "Dr. Deb Kumar Mukherjee",
      designation: "Ex-Resident Surgeon (G & O) ( CNMCH)",
    },
    {
      slno: "09",
      membername: "Dr. Abhijit Banik",
      designation: "Asst. Prof., ME Department, MIET",
    },
    { slno: "10", membername: "ERO AICTE", designation: "" },
    {
      slno: "11",
      membername: "Prof. (Dr.) Sukhendu Samajdar",
      designation:
        "HOD Department of Material Science & Technology, MAKAUT, MAKAUT NOMINEE",
    },
    {
      slno: "12",
      membername: "Prof. (Dr.) Sanjay Kumar Saha",
      designation: "Prof. CSE Dept. ,J.U., Kolkata-32",
    },
    {
      slno: "13",
      membername: "Prof. ( Dr.) Gupinath Bhandari",
      designation: "Prof. CE Dept., J.U., Kolkata-32",
    },
    {
      slno: "14",
      membername: "Prof (Dr.) Angsuman Sarkar",
      designation: "HOD ECE Dept. KGEC, W.B",
    },
  ];
  return (
    <MainPageTemplate>
      <SubBanner
        bannerimg={"/images/admissionsubbanner.jpg"}
        heading={"Governing Body"}
      />
      <div className="flex flex-col lg:py-8 sm:py-4 xl:py-16 md:mx-8">
        <div className="flex sm:p-2 md:p-3 items-start bg-[#DC143C] sm:text-xs md:text-base gap-2 lg:text-lg font-semibold text-white ">
          <div className="w-[15%]">SL No.</div>
          <div className="w-[40%]">Governing Body Member Name</div>
          <div className="w-[45%]">Designation</div>
        </div>
        <div className="flex flex-col">
          {governingbodys.map((tableitem, index) => (
            <div
              className={`flex sm:p-2 md:p-3 items-start gap-2 sm:text-[12px] md:text-sm lg:text-base text-black ${
                index % 2 === 0 ? "bg-white" : "bg-[#DC143C14]"
              }`}
            >
              <div className="w-[15%]">{tableitem.slno}</div>
              <div className="w-[40%]">{tableitem.membername}</div>
              <div className="w-[45%]">{tableitem.designation}</div>
            </div>
          ))}
        </div>
      </div>
      <FooterComponent />
    </MainPageTemplate>
  );
};

export default GoverningBody;
