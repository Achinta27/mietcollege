import React from "react";
import DeptVissionMission from "../../../../component/department/DeptVissionMission";
import { useParams } from "react-router-dom";

const CivilVissionMission = () => {
  const { dept } = useParams();

  let content;

  switch (dept) {
    case "civil":
      content = {
        bannerimg: "/images/admissionsubbanner.jpg",
        heading: "Vision, Mission & Program Educational Objective",
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
      break;

    case "bsc":
      content = {
        bannerimg: "/images/admissionsubbanner.jpg",
        heading: "Vision, Mission & Program Educational Objective",
        vissionmission: [
          {
            heading: "Vision & Mission",
            deptimg: "/images/d1.png",
            description: [
              "The basis for engineering studies is provided by the department of Basic Sciences. The department offers courses in Mathematics, Physics, Chemistry, English, and Foundational Engineering. Modern lab facilities are available for students to utilize, giving them a deeper comprehension of the basic sciences. What the Basic Sciences and Humanities Department is expected to offer is: Excellent, fair foundation courses in English, Physics, Chemistry, Mathematics, and the Fundamentals of Engineering. Mathematical and scientific foundations that support the integration of technical knowledge across engineering specialties. Insights into the decision-making processes of people, groups, and governmental entities. Fundamental communication abilities are a useful tool when speaking with any organization's stakeholders. The goal of the Department of Basic Sciences and Humanities is to establish itself as an exceptional department that enhances",
            ],
          },
          {
            heading: "Objectives",
            deptimg: "/images/d1.png",
            description: [
              "To impart opportunity in various value of education and facilitate them to gain their skill in the areas of humanities and social science. To assist students to gather their knowledge in practical based applications through proper practice.Guide to enhance confidence and build a greater sense of self consciousness and appreciation for others. Promote them to go ahead in their life and achieve overall improvement.",
            ],
          },
        ],
      };
      break;

    case "me":
      content = {
        bannerimg: "/images/admissionsubbanner.jpg",
        heading: "Vision, Mission & Program Educational Objective",
        vissionmission: [
          {
            heading: "Vision & Mission",
            deptimg: "/images/d1.png",
            description: [
              "To be a Centre of Excellence in the field of Mechanical Engineering and interdisciplinary research to confront real world societal problems through best practices of teaching, training and research.",
            ],
          },
          {
            heading: "Objectives",
            deptimg: "/images/d1.png",
            description: [
              "M1: To provide state-of-the-art infrastructure & cutting-edge technologies as necessitated from academics, to promote futuristic research in the areas of design, materials, thermal, manufacturing engineering, managerial skills and related interdisciplinary areas. M2: Encourage application-oriented teaching-learning process for efficient product design and manufacturing through Industry-Institute collaborative training, Research and Development. M3: Enable to seek professional employment, pursue higher studies and promote entrepreneurship.\nM4: To mold young minds and build a comprehensive personality by nurturing strong professionals with human ethics through interaction with the alumni, experts from academia / industry, research organizations, higher study institutions and area experts.",
            ],
          },
        ],
      };
      break;

    case "csc":
      content = {
        bannerimg: "/images/admissionsubbanner.jpg",
        heading: "Vision, Mission & Program Educational Objective",
        vissionmission: [
          {
            heading: "Vision & Mission",
            deptimg: "/images/d1.png",
            description: [
              "The basis for engineering studies is provided by the department of Basic Sciences. The department offers courses in Mathematics, Physics, Chemistry, English, and Foundational Engineering. Modern lab facilities are available for students to utilize, giving them a deeper comprehension of the basic sciences. What the Basic Sciences and Humanities Department is expected to offer is: Excellent, fair foundation courses in English, Physics, Chemistry, Mathematics, and the Fundamentals of Engineering. Mathematical and scientific foundations that support the integration of technical knowledge across engineering specialties. Insights into the decision-making processes of people, groups, and governmental entities. Fundamental communication abilities are a useful tool when speaking with any organization's stakeholders. The goal of the Department of Basic Sciences and Humanities is to establish itself as an exceptional department that enhances",
            ],
          },
          {
            heading: "Objectives",
            deptimg: "/images/d1.png",
            description: [
              "To impart opportunity in various value of education and facilitate them to gain their skill in the areas of humanities and social science. To assist students to gather their knowledge in practical based applications through proper practice.Guide to enhance confidence and build a greater sense of self consciousness and appreciation for others. Promote them to go ahead in their life and achieve overall improvement.",
            ],
          },
        ],
      };
      break;

    case "cscai":
      content = {
        bannerimg: "/images/admissionsubbanner.jpg",
        heading: "Vision, Mission & Program Educational Objective",
        vissionmission: [
          {
            heading: "Vision & Mission",
            deptimg: "/images/d1.png",
            description: [
              "To provide engineering and technical education in the field of Computer Science with cutting edge technologies and to produce self-motivated, market ready individuals to the job market.",
            ],
          },
          {
            heading: "Objectives",
            deptimg: "/images/d1.png",
            description: [
              "Be a pioneer department in Computer Science and Engineering and to mould young aspiring minds for overall developments of the students.",
            ],
          },
        ],
      };
      break;

    case "csccs":
      content = {
        bannerimg: "/images/admissionsubbanner.jpg",
        heading: "Vision, Mission & Program Educational Objective",
        vissionmission: [
          {
            heading: "Vision & Mission",
            deptimg: "/images/d1.png",
            description: [
              "To provide engineering and technical education in the field of Computer Science with cutting edge technologies and to produce self-motivated, market ready individuals to the job market.",
            ],
          },
          {
            heading: "Objectives",
            deptimg: "/images/d1.png",
            description: [
              "Be a pioneer department in Computer Science and Engineering and to mould young aspiring minds for overall developments of the students.",
            ],
          },
        ],
      };
      break;

    case "ece":
      content = {
        bannerimg: "/images/admissionsubbanner.jpg",
        heading: "Vision, Mission & Program Educational Objective",
        vissionmission: [
          {
            heading: "Vision & Mission",
            deptimg: "/images/d1.png",
            description: [
              "The basis for engineering studies is provided by the department of Basic Sciences. The department offers courses in Mathematics, Physics, Chemistry, English, and Foundational Engineering. Modern lab facilities are available for students to utilize, giving them a deeper comprehension of the basic sciences. What the Basic Sciences and Humanities Department is expected to offer is: Excellent, fair foundation courses in English, Physics, Chemistry, Mathematics, and the Fundamentals of Engineering. Mathematical and scientific foundations that support the integration of technical knowledge across engineering specialties. Insights into the decision-making processes of people, groups, and governmental entities. Fundamental communication abilities are a useful tool when speaking with any organization's stakeholders. The goal of the Department of Basic Sciences and Humanities is to establish itself as an exceptional department that enhances",
            ],
          },
          {
            heading: "Objectives",
            deptimg: "/images/d1.png",
            description: [
              "To impart opportunity in various value of education and facilitate them to gain their skill in the areas of humanities and social science. To assist students to gather their knowledge in practical based applications through proper practice.Guide to enhance confidence and build a greater sense of self consciousness and appreciation for others. Promote them to go ahead in their life and achieve overall improvement.",
            ],
          },
        ],
      };
      break;

    case "ee":
      content = {
        bannerimg: "/images/admissionsubbanner.jpg",
        heading: "Vision, Mission & Program Educational Objective",
        vissionmission: [
          {
            heading: "Vision & Mission",
            deptimg: "/images/d1.png",
            description: [
              "The basis for engineering studies is provided by the department of Basic Sciences. The department offers courses in Mathematics, Physics, Chemistry, English, and Foundational Engineering. Modern lab facilities are available for students to utilize, giving them a deeper comprehension of the basic sciences. What the Basic Sciences and Humanities Department is expected to offer is: Excellent, fair foundation courses in English, Physics, Chemistry, Mathematics, and the Fundamentals of Engineering. Mathematical and scientific foundations that support the integration of technical knowledge across engineering specialties. Insights into the decision-making processes of people, groups, and governmental entities. Fundamental communication abilities are a useful tool when speaking with any organization's stakeholders. The goal of the Department of Basic Sciences and Humanities is to establish itself as an exceptional department that enhances",
            ],
          },
          {
            heading: "Objectives",
            deptimg: "/images/d1.png",
            description: [
              "To impart opportunity in various value of education and facilitate them to gain their skill in the areas of humanities and social science. To assist students to gather their knowledge in practical based applications through proper practice.Guide to enhance confidence and build a greater sense of self consciousness and appreciation for others. Promote them to go ahead in their life and achieve overall improvement.",
            ],
          },
        ],
      };
      break;

    default:
      content = {
        bannerimg: "/images/admissionsubbanner.jpg",
        heading: "Vision, Mission & Program Educational Objective",
        vissionmission: [
          {
            heading: "Vision & Mission",
            deptimg: "/images/d1.png",
            description: [
              "The basis for engineering studies is provided by the department of Basic Sciences. The department offers courses in Mathematics, Physics, Chemistry, English, and Foundational Engineering. Modern lab facilities are available for students to utilize, giving them a deeper comprehension of the basic sciences. What the Basic Sciences and Humanities Department is expected to offer is: Excellent, fair foundation courses in English, Physics, Chemistry, Mathematics, and the Fundamentals of Engineering. Mathematical and scientific foundations that support the integration of technical knowledge across engineering specialties. Insights into the decision-making processes of people, groups, and governmental entities. Fundamental communication abilities are a useful tool when speaking with any organization's stakeholders. The goal of the Department of Basic Sciences and Humanities is to establish itself as an exceptional department that enhances",
            ],
          },
          {
            heading: "Objectives",
            deptimg: "/images/d1.png",
            description: [
              "To impart opportunity in various value of education and facilitate them to gain their skill in the areas of humanities and social science. To assist students to gather their knowledge in practical based applications through proper practice.Guide to enhance confidence and build a greater sense of self consciousness and appreciation for others. Promote them to go ahead in their life and achieve overall improvement.",
            ],
          },
        ],
      };
      break;
  }
  return (
    <div>
      <DeptVissionMission content={content} />
    </div>
  );
};

export default CivilVissionMission;
