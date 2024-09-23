import React from "react";
import OfferdCourseDesign from "../../component/OfferdCourseDesign";

const BTech = () => {
  const content = {
    bannerimg: "/images/admissionsubbanner.jpg",
    heading: "Bachelor of Technology",
    smalldescription:
      "Lorem ipsum dolor sit amet consectetur. Dictumst eget semper sapien tellus. Tempor sapien urna sed tempor sollicitudin. Turpis volutpat semper at id est faucibus lacus. Nunc elit pellentesque lectus neque id purus mauris amet. Quis mauris in nunc quis eget. Et orci a sed ultrices commodo. Viverra cras sed amet nec sit varius cursus at sapien. Turpis in in feugiat lacus in egestas platea at. Scelerisque lorem facilisi justo maecenas ultrices. Ipsum enim dapibus eu convallis malesuada pulvinar",
    courseimgsrc: "/images/btech.png",
    coursedescription: [
      "Lorem ipsum dolor sit amet consectetur. Porttitor scelerisque eu vitae porta id nunc blandit congue. Mauris augue quam nunc habitant nulla. Eleifend diam pulvinar elementum id. Vestibulum ornare pellentesque varius faucibus elementum in elit. Leo vitae a fermentum enim aliquam ultrices et. Pretium in eget dictum morbi cursus consectetur. Dignissim viverra senectus bibendum magna. Nam facilisis sed volutpat viverra in suspendisse. Nisl id ",
      "elementum dui gravida ut morbi. Tellus tempus volutpat faucibus enim ante lobortis est proin.",
      "Egestas lorem euismod purus massa. Leo iaculis mattis tincidunt tellus ultrices. Orci pharetra lacinia odio lacus nam diam dignissim",
    ],
    courseoffers: [
      { slno: "01", courses: "Civil Engineering", seats: "50" },
      { slno: "02", courses: "Mechanical Engineering", seats: "70" },
      { slno: "03", courses: "Civil Engineering", seats: "80" },
      { slno: "04", courses: "Mechanical Engineering", seats: "20" },
      { slno: "05", courses: "Civil Engineering", seats: "50" },
      { slno: "06", courses: "Mechanical Engineering", seats: "70" },
      { slno: "07", courses: "Civil Engineering", seats: "80" },
      { slno: "08", courses: "Mechanical Engineering", seats: "20" },
      { slno: "09", courses: "Civil Engineering", seats: "50" },
    ],
    allcourseheading: "WE HAVE A UNIQUE ENGINEERING CURRICULUM",
    allcoursedescription:
      "Lorem ipsum dolor sit amet consectetur. Dictumst eget semper sapien tellus. Tempor sapien urna sed tempor sollicitudin. Turpis volutpat semper at id est faucibus lacus. Nunc elit pellentesque lectus neque id purus mauris amet. Quis mauris in nunc quis eget. Et orci a sed ultrices",
    allcourses: [
      {
        imgsrc: "/images/c1.png",
        name: "Mechanical Engineering",
        couesedetails: [
          { heads: "Seats", value: "50" },
          { heads: "Eligibility", value: "12 Passed" },
          { heads: "Course Duration", value: "4 years" },
        ],
      },
      {
        imgsrc: "/images/c1.png",
        name: "Civil Engineering",
        couesedetails: [
          { heads: "Seats", value: "50" },
          { heads: "Eligibility", value: "12 Passed" },
          { heads: "Course Duration", value: "4 years" },
        ],
      },
      {
        imgsrc: "/images/c1.png",
        name: "Mechanical Engineering",
        couesedetails: [
          { heads: "Seats", value: "50" },
          { heads: "Eligibility", value: "12 Passed" },
          { heads: "Course Duration", value: "4 years" },
        ],
      },
      {
        imgsrc: "/images/c1.png",
        name: "Civil Engineering",
        couesedetails: [
          { heads: "Seats", value: "50" },
          { heads: "Eligibility", value: "12 Passed" },
          { heads: "Course Duration", value: "4 years" },
        ],
      },
      {
        imgsrc: "/images/c1.png",
        name: "Mechanical Engineering",
        couesedetails: [
          { heads: "Seats", value: "50" },
          { heads: "Eligibility", value: "12 Passed" },
          { heads: "Course Duration", value: "4 years" },
        ],
      },
      {
        imgsrc: "/images/c1.png",
        name: "Civil Engineering",
        couesedetails: [
          { heads: "Seats", value: "50" },
          { heads: "Eligibility", value: "12 Passed" },
          { heads: "Course Duration", value: "4 years" },
        ],
      },
      {
        imgsrc: "/images/c1.png",
        name: "Mechanical Engineering",
        couesedetails: [
          { heads: "Seats", value: "50" },
          { heads: "Eligibility", value: "12 Passed" },
          { heads: "Course Duration", value: "4 years" },
        ],
      },
      {
        imgsrc: "/images/c1.png",
        name: "Civil Engineering",
        couesedetails: [
          { heads: "Seats", value: "50" },
          { heads: "Eligibility", value: "12 Passed" },
          { heads: "Course Duration", value: "4 years" },
        ],
      },
    ],
  };
  return (
    <div>
      <OfferdCourseDesign content={content} />
    </div>
  );
};

export default BTech;
