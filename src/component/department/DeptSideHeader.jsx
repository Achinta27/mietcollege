import React, { useState } from "react";
import { GoTriangleLeft } from "react-icons/go";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation, useParams } from "react-router-dom";

const DeptSideHeader = ({}) => {
  const { dept } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  let sideheaderdept;

  switch (dept) {
    case "civil":
      sideheaderdept = [
        { name: "Overview", link: "/department/civil/overview" },
        {
          name: "Vision, Mission & Program Educational Objective",
          link: "/department/civil/vission-and-mission",
        },
        {
          name: "Programme Outcome (POs) & Programme Specific Outcome (PSO)",
          link: "/department/civil/program-outcome",
        },
        { name: "Curriculam", link: "" },
        { name: "Lesson Plan", link: "" },
        {
          name: "Faculty Details",
          link: "/department/civil/faculty-details",
        },
        { name: "Laboratories", link: "/pdf/CE Lab Brochure.pdf" },
        { name: "Events", link: "" },
        { name: "Placement", link: "" },
        { name: "E-Magazine", link: "/pdf/CE Lab Brochure.pdf" },
      ];
      break;
    case "bsc":
      sideheaderdept = [
        { name: "Overview", link: "/department/bsc/overview" },
        {
          name: "Vision, Mission & Program Educational Objective",
          link: "/department/bsc/vission-and-mission",
        },
        {
          name: "Programme Outcome (POs) & Programme Specific Outcome (PSO)",
          link: "/department/bsc/program-outcome",
        },
        { name: "Curriculam", link: "" },
        { name: "Lesson Plan", link: "" },
        {
          name: "Faculty Details",
          link: "/department/bsc/faculty-details",
        },
        { name: "Laboratories", link: "/pdf/BSH DETAILS.docx.pdf" },
        { name: "Events", link: "" },
        { name: "Placement", link: "" },
        { name: "E-Magazine", link: "/pdf/BSH DETAILS.docx.pdf" },
      ];
      break;
    case "me":
      sideheaderdept = [
        { name: "Overview", link: "/department/me/overview" },
        {
          name: "Vision, Mission & Program Educational Objective",
          link: "/department/me/vission-and-mission",
        },
        {
          name: "Programme Outcome (POs) & Programme Specific Outcome (PSO)",
          link: "/department/me/program-outcome",
        },
        { name: "Curriculam", link: "/pdf/CURRICULAM B.TECH_ME.pdf" },
        { name: "Lesson Plan", link: "" },
        {
          name: "Faculty Details",
          link: "/department/me/faculty-details",
        },
        { name: "Laboratories", link: "/pdf/ME Lab Brochure.pdf" },
        { name: "Events", link: "" },
        { name: "Placement", link: "" },
        { name: "E-Magazine", link: "/pdf/ME Lab Brochure.pdf" },
      ];
      break;
    case "csc":
      sideheaderdept = [
        { name: "Overview", link: "/department/csc/overview" },
        {
          name: "Vision, Mission & Program Educational Objective",
          link: "/department/csc/vission-and-mission",
        },
        {
          name: "Programme Outcome (POs) & Programme Specific Outcome (PSO)",
          link: "/department/csc/program-outcome",
        },
        { name: "Curriculam", link: "/pdf/CURRICULAM_CSE (CS).pdf" },
        { name: "Lesson Plan", link: "" },
        {
          name: "Faculty Details",
          link: "/department/csc/faculty-details",
        },
        { name: "Laboratories", link: "/pdf/CSE Lab Brochure.pdf" },
        { name: "Events", link: "" },
        { name: "Placement", link: "" },
        { name: "E-Magazine", link: "/pdf/CSE Lab Brochure.pdf" },
      ];
      break;
    case "cscai":
      sideheaderdept = [
        { name: "Overview", link: "/department/cscai/overview" },
        {
          name: "Vision, Mission & Program Educational Objective",
          link: "/department/cscai/vission-and-mission",
        },
        {
          name: "Programme Outcome (POs) & Programme Specific Outcome (PSO)",
          link: "/department/cscai/program-outcome",
        },
        { name: "Curriculam", link: "/pdf/CURRICULAM_CSE(AI & ML).pdf" },
        { name: "Lesson Plan", link: "" },
        {
          name: "Faculty Details",
          link: "/department/cscai/faculty-details",
        },
        { name: "Laboratories", link: "/pdf/CSE Lab Brochure.pdf" },
        { name: "Events", link: "" },
        { name: "Placement", link: "" },
        { name: "E-Magazine", link: "/pdf/CSE Lab Brochure.pdf" },
      ];
      break;
    case "csccs":
      sideheaderdept = [
        { name: "Overview", link: "/department/csccs/overview" },
        {
          name: "Vision, Mission & Program Educational Objective",
          link: "/department/csccs/vission-and-mission",
        },
        {
          name: "Programme Outcome (POs) & Programme Specific Outcome (PSO)",
          link: "/department/csccs/program-outcome",
        },
        { name: "Curriculam", link: "/pdf/CURRICULAM_CSE(AI & ML).pdf" },
        { name: "Lesson Plan", link: "" },
        {
          name: "Faculty Details",
          link: "/department/csccs/faculty-details",
        },
        { name: "Laboratories", link: "/pdf/CSE Lab Brochure.pdf" },
        { name: "Events", link: "" },
        { name: "Placement", link: "" },
        { name: "E-Magazine", link: "/pdf/CSE Lab Brochure.pdf" },
      ];
      break;
    case "ece":
      sideheaderdept = [
        { name: "Overview", link: "/department/ece/overview" },
        {
          name: "Vision, Mission & Program Educational Objective",
          link: "/department/ece/vission-and-mission",
        },
        {
          name: "Programme Outcome (POs) & Programme Specific Outcome (PSO)",
          link: "/department/ece/program-outcome",
        },
        { name: "Curriculam", link: "/pdf/CURRICULAM_ECE.pdf" },
        {
          name: "Lesson Plan",
          link: "/pdf/ECE Subject List for LESSON PLAN.docx.pdf",
        },
        {
          name: "Faculty Details",
          link: "/department/ece/faculty-details",
        },
        { name: "Laboratories", link: "/pdf/CURRICULAM_ECE.pdf" },
        { name: "Events", link: "" },
        { name: "Placement", link: "" },
        { name: "E-Magazine", link: "/pdf/CURRICULAM_ECE.pdf" },
      ];
      break;
    case "ee":
      sideheaderdept = [
        { name: "Overview", link: "/department/ee/overview" },
        {
          name: "Vision, Mission & Program Educational Objective",
          link: "/department/ee/vission-and-mission",
        },
        {
          name: "Programme Outcome (POs) & Programme Specific Outcome (PSO)",
          link: "/department/ee/program-outcome",
        },
        { name: "Curriculam", link: "" },
        { name: "Lesson Plan", link: "" },
        {
          name: "Faculty Details",
          link: "/department/ee/faculty-details",
        },
        { name: "Laboratories", link: "" },
        { name: "Events", link: "" },
        { name: "Placement", link: "" },
        { name: "E-Magazine", link: "" },
      ];
      break;

    default:
      break;
  }

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <div className="sm:flex lg:hidden justify-between items-center sm:w-[30%] md:w-full p-4 bg-[#DC143C] text-white">
        <h2 className="text-lg font-semibold">Menu</h2>
        <button onClick={toggleSidebar}>
          <FaBars className="text-2xl" />
        </button>
      </div>
      <div
        className={`fixed inset-0 sm:z-[100] lg:z-10 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 lg:translate-x-0 lg:relative lg:flex lg:flex-col sm:w-[80%] md:w-[50%] lg:w-full lg:gap-4 bg-white lg:bg-transparent p-4 lg:p-0 shadow-lg lg:shadow-none`}
      >
        <div className="flex justify-end items-center mb-4 lg:hidden">
          <button
            onClick={toggleSidebar}
            className="w-[2.5rem] h-[2.5rem] flex justify-center items-center rounded-lg text-white font-semibold bg-[#DC143C] "
          >
            <FaTimes className="text-2xl" />
          </button>
        </div>
        <div className="flex flex-col gap-4">
          {sideheaderdept.map((side, index) => (
            <Link
              to={side.link}
              className={`w-full flex relative justify-start p-4 bg-[#DC143C] text-white items-center text-lg font-semibold rounded-md`}
              key={index}
              onClick={toggleSidebar}
              target={side.link.endsWith(".pdf") ? "_blank" : "_self"}
            >
              <div>{side.name}</div>
              {location.pathname === side.link && (
                <span className="absolute translate-y-1/2 transform bottom-1/2 -right-4 text-4xl">
                  <GoTriangleLeft />
                </span>
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DeptSideHeader;
