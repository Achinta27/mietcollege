import React from "react";
import DeptFacultyDetailsDesign from "../../../../component/department/DeptFacultyDetailsDesign";

const CivilFacultyDetails = () => {
  const content = {
    bannerimg: "/images/admissionsubbanner.jpg",
    heading: "Faculty Details",
    sideheaderdept: [
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
      { name: "Faculty Details", link: "/department/civil/faculty-details" },
      { name: "Laboratories", link: "" },
      { name: "Events", link: "" },
      { name: "Placement", link: "" },
      { name: "E-Magazine", link: "" },
    ],
    facultydetails: [
      {
        name: "Mr. Achinta Roy",
        facultys: [
          { heading: "Designation", description: "HOD" },
          { heading: "Qualification", description: "M.Tech, P.hD" },
          { heading: "Area of Interest", description: "Control System" },
          { heading: "Date of Joining", description: "29th January 2012" },
          { heading: "Phone Number", description: "98006 54378" },
          { heading: "Email", description: "director@mietcollege.com" },
        ],
        facultyimg: "/images/f1.png",
      },
    ],
  };
  return (
    <div>
      <DeptFacultyDetailsDesign content={content} />
    </div>
  );
};

export default CivilFacultyDetails;
