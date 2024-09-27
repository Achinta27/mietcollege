import React from "react";
import OfferdCourseDesign from "../../component/OfferdCourseDesign";
import { useParams } from "react-router-dom";

const BTech = () => {
  const { course } = useParams();

  const content =
    course === "btech"
      ? {
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
            { slno: "01", courses: "Civil Engineering", seats: "60" },
            { slno: "02", courses: "Mechanical Engineering", seats: "60" },
            { slno: "03", courses: "Electrical Engineering", seats: "60" },
            {
              slno: "04",
              courses: "Electronics and Communication Engineering",
              seats: "60",
            },
            {
              slno: "05",
              courses: "Computer Science and Engineering",
              seats: "60",
            },
            {
              slno: "06",
              courses:
                "Computer Science and Engineering (Artificial Intelligence and Machine Learning)",
              seats: "30",
            },
            {
              slno: "07",
              courses: "Computer Science and Engineering (Cyber Security)",
              seats: "30",
            },
          ],
          allcourseheading: "WE HAVE A UNIQUE ENGINEERING CURRICULUM",
          allcoursedescription:
            "Lorem ipsum dolor sit amet consectetur. Dictumst eget semper sapien tellus. Tempor sapien urna sed tempor sollicitudin. Turpis volutpat semper at id est faucibus lacus. Nunc elit pellentesque lectus neque id purus mauris amet. Quis mauris in nunc quis eget. Et orci a sed ultrices",
          allcourses: [
            {
              imgsrc: "/courses/Mechanical Engineering.jpg",
              name: "Mechanical Engineering",
              couesedetails: [
                { heads: "Seats", value: "60" },
                { heads: "Eligibility", value: "12 Passed" },
                { heads: "Course Duration", value: "4 years" },
              ],
            },
            {
              imgsrc: "/courses/Civil Engineering.jpg",
              name: "Civil Engineering",
              couesedetails: [
                { heads: "Seats", value: "60" },
                { heads: "Eligibility", value: "12 Passed" },
                { heads: "Course Duration", value: "4 years" },
              ],
            },
            {
              imgsrc: "/courses/Electrical Engineering.jpg",
              name: "Electrical Engineering",
              couesedetails: [
                { heads: "Seats", value: "60" },
                { heads: "Eligibility", value: "12 Passed" },
                { heads: "Course Duration", value: "4 years" },
              ],
            },
            {
              imgsrc: "/courses/Electronics and Communication Engineering.jpg",
              name: "/courses/Electronics and Communication Engineering.jpg",
              couesedetails: [
                { heads: "Seats", value: "60" },
                { heads: "Eligibility", value: "12 Passed" },
                { heads: "Course Duration", value: "4 years" },
              ],
            },
            {
              imgsrc: "/courses/Computer Science and Engineering.jpg",
              name: "Computer Science and Engineering (Cyber Security)",
              couesedetails: [
                { heads: "Seats", value: "30" },
                { heads: "Eligibility", value: "12 Passed" },
                { heads: "Course Duration", value: "4 years" },
              ],
            },
            {
              imgsrc: "/courses/Computer Science and Engineering.jpg",
              name: "Computer Science and Engineering (Artificial Intelligence and Machine Learning)",
              couesedetails: [
                { heads: "Seats", value: "30" },
                { heads: "Eligibility", value: "12 Passed" },
                { heads: "Course Duration", value: "4 years" },
              ],
            },
            {
              imgsrc:
                "/courses/Computer Science and Engineering (Artificial Intelligence and Machine Learning.jpg",
              name: "Computer Science and Engineering",
              couesedetails: [
                { heads: "Seats", value: "60" },
                { heads: "Eligibility", value: "12 Passed" },
                { heads: "Course Duration", value: "4 years" },
              ],
            },
          ],
        }
      : {
          bannerimg: "/images/admissionsubbanner.jpg",
          heading: "Diploma",
          smalldescription:
            "Lorem ipsum dolor sit amet consectetur. Dictumst eget semper sapien tellus. Tempor sapien urna sed tempor sollicitudin. Turpis volutpat semper at id est faucibus lacus. Nunc elit pellentesque lectus neque id purus mauris amet. Quis mauris in nunc quis eget. Et orci a sed ultrices commodo. Viverra cras sed amet nec sit varius cursus at sapien. Turpis in in feugiat lacus in egestas platea at. Scelerisque lorem facilisi justo maecenas ultrices. Ipsum enim dapibus eu convallis malesuada pulvinar",
          courseimgsrc: "/images/btech.png",
          coursedescription: [
            "Lorem ipsum dolor sit amet consectetur. Porttitor scelerisque eu vitae porta id nunc blandit congue. Mauris augue quam nunc habitant nulla. Eleifend diam pulvinar elementum id. Vestibulum ornare pellentesque varius faucibus elementum in elit. Leo vitae a fermentum enim aliquam ultrices et. Pretium in eget dictum morbi cursus consectetur. Dignissim viverra senectus bibendum magna. Nam facilisis sed volutpat viverra in suspendisse. Nisl id ",
            "elementum dui gravida ut morbi. Tellus tempus volutpat faucibus enim ante lobortis est proin.",
            "Egestas lorem euismod purus massa. Leo iaculis mattis tincidunt tellus ultrices. Orci pharetra lacinia odio lacus nam diam dignissim",
          ],
          courseoffers: [
            { slno: "01", courses: "Civil Engineering", seats: "60" },
            { slno: "02", courses: "Mechanical Engineering", seats: "60" },
            { slno: "03", courses: "Electrical Engineering", seats: "60" },
            {
              slno: "04",
              courses: "Electronics and Communication Engineering",
              seats: "30",
            },
            {
              slno: "05",
              courses: "Computer Science Technology",
              seats: "30",
            },
          ],
          allcourseheading: "WE HAVE A UNIQUE ENGINEERING CURRICULUM",
          allcoursedescription:
            "Lorem ipsum dolor sit amet consectetur. Dictumst eget semper sapien tellus. Tempor sapien urna sed tempor sollicitudin. Turpis volutpat semper at id est faucibus lacus. Nunc elit pellentesque lectus neque id purus mauris amet. Quis mauris in nunc quis eget. Et orci a sed ultrices",
          allcourses: [
            {
              imgsrc: "/courses/Mechanical Engineering diploma.jpg",
              name: "Mechanical Engineering",
              couesedetails: [
                { heads: "Seats", value: "60" },
                { heads: "Eligibility", value: "10 Passed" },
                { heads: "Course Duration", value: "3 years" },
              ],
            },
            {
              imgsrc: "/courses/Civil Engineering diploma.jpg",
              name: "Civil Engineering",
              couesedetails: [
                { heads: "Seats", value: "60" },
                { heads: "Eligibility", value: "10 Passed" },
                { heads: "Course Duration", value: "3 years" },
              ],
            },
            {
              imgsrc: "/courses/Electrical Engineering diploma.jpg",
              name: "/courses/Electrical Engineering diploma.jpg",
              couesedetails: [
                { heads: "Seats", value: "60" },
                { heads: "Eligibility", value: "10 Passed" },
                { heads: "Course Duration", value: "3 years" },
              ],
            },
            {
              imgsrc:
                "/courses/Electronics and Telecommunication Engineering diploma.jpg",
              name: "Electronics and Communication Engineering",
              couesedetails: [
                { heads: "Seats", value: "30" },
                { heads: "Eligibility", value: "10 Passed" },
                { heads: "Course Duration", value: "3 years" },
              ],
            },
            {
              imgsrc: "/courses/Computer Science Technology diploma.jpg",
              name: "Computer Science Technology",
              couesedetails: [
                { heads: "Seats", value: "30" },
                { heads: "Eligibility", value: "10 Passed" },
                { heads: "Course Duration", value: "3 years" },
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
