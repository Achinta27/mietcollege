import React from "react";
import DeptVissionMission from "../../../../component/department/DeptVissionMission";

const CivilVissionMission = () => {
  const content = {
    bannerimg: "/images/admissionsubbanner.jpg",
    heading: "Vision, Mission & Program Educational Objective",
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
    vissionmission: [
      {
        heading: "Vision & Mission",
        deptimg: "/images/d1.png",
        description: [
          "Lorem ipsum dolor sit amet consectetur. At blandit imperdiet egestas duis sed fringilla commodo amet posuere. Gravida tristique pellentesque risus eleifend. Turpis nisl eget urna nunc sit. Purus id pretium nisl velit venenatis cursus odio vitae lectus. Facilisi cursus est in at. Fringilla morbi bibendum id morbi ultricies.Condimentum elementum quis ut enim. Ipsum vitae mi leo tortor nec eu risus. Rhoncus sed purus egestas convallis id vel netus fringilla. Eget penatibus at pellentesque eget fames erat dictum fringilla. Donec a ut in odio vitae massa commodo. Mi sit donec neque consequat. Id libero justo faucibus adipiscing ultrices tellus justo erat varius. Eu aliquet risus dui erat sed. Convallis ultricies sapien vitae nisl neque id at odio. Sagittis semper felis egestas orci phasellus. Risus vitae donec netus est quis a orci pretium",
          "Lorem ipsum dolor sit amet consectetur. At blandit imperdiet egestas duis sed fringilla commodo amet posuere. Gravida tristique pellentesque risus eleifend. Turpis nisl eget urna nunc sit. Purus id pretium nisl velit venenatis cursus odio vitae lectus. Facilisi cursus est in at. Fringilla morbi bibendum id morbi ultricies.Condimentum elementum quis ut enim. Ipsum vitae mi leo tortor nec eu risus. Rhoncus sed purus egestas convallis id vel netus fringilla. Eget penatibus at pellentesque eget fames erat dictum fringilla. Donec a ut in odio vitae massa commodo. Mi sit donec neque consequat. Id libero justo faucibus adipiscing ultrices tellus justo erat varius. Eu aliquet risus dui erat sed. Convallis ultricies sapien vitae nisl neque id at odio. Sagittis semper felis egestas orci phasellus. Risus vitae donec netus est quis a orci pretium",
        ],
      },
      {
        heading: "Objectives",
        deptimg: "/images/d1.png",
        description: [
          "Lorem ipsum dolor sit amet consectetur. At blandit imperdiet egestas duis sed fringilla commodo amet posuere. Gravida tristique pellentesque risus eleifend. Turpis nisl eget urna nunc sit. Purus id pretium nisl velit venenatis cursus odio vitae lectus. Facilisi cursus est in at. Fringilla morbi bibendum id morbi ultricies.Condimentum elementum quis ut enim. Ipsum vitae mi leo tortor nec eu risus. Rhoncus sed purus egestas convallis id vel netus fringilla. Eget penatibus at pellentesque eget fames erat dictum fringilla. Donec a ut in odio vitae massa commodo. Mi sit donec neque consequat. Id libero justo faucibus adipiscing ultrices tellus justo erat varius. Eu aliquet risus dui erat sed. Convallis ultricies sapien vitae nisl neque id at odio. Sagittis semper felis egestas orci phasellus. Risus vitae donec netus est quis a orci pretium",
        ],
      },
    ],
  };
  return (
    <div>
      <DeptVissionMission content={content} />
    </div>
  );
};

export default CivilVissionMission;
