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
            "The B.Tech program at Modern Institute of Engineering & Technology (MIET) is designed to equip students with a strong foundation in engineering principles, practical skills, and critical thinking. With state-of-the-art laboratories, a dedicated faculty, and a focus on real-world applications, the program fosters innovation, professionalism, and teamwork. Students are nurtured to become leaders in their fields through hands-on projects, co-curricular activities, and personalized career support.",
          courseimgsrc: "/images/btech.png",
          coursedescription: [""],
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
            "The B.Tech program at Modern Institute of Engineering & Technology (MIET) provides a solid foundation in engineering, emphasizing hands-on learning, innovation, and teamwork. With modern labs, expert faculty, and industry-focused training, MIET nurtures students to excel in their careers and become future leaders.",
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
              name: "Electronics and Communication Engineering",
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
              imgsrc:
                "/courses/Computer Science and Engineering (Artificial Intelligence and Machine Learning.jpg",
              name: "Computer Science and Engineering (Artificial Intelligence and Machine Learning)",
              couesedetails: [
                { heads: "Seats", value: "30" },
                { heads: "Eligibility", value: "12 Passed" },
                { heads: "Course Duration", value: "4 years" },
              ],
            },
            {
              imgsrc: "/courses/Computer Science and Engineering.jpg",
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
            "The Diploma program at Modern Institute of Engineering & Technology (MIET) offers a comprehensive education, focusing on technical expertise and hands-on training in various engineering fields. With modern laboratories, experienced faculty, and industry-relevant curricula, the program prepares students for real-world challenges. MIET fosters professional growth through practical projects, co-curricular activities, and personality development initiatives. Approved by AICTE and affiliated with WBS",
          courseimgsrc: "/images/btech.png",
          coursedescription: [],
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
            "The Diploma program at Modern Institute of Engineering & Technology (MIET) is designed to provide students with a strong foundation in engineering principles, hands-on experience, and practical skills. With modern labs, experienced faculty, and a curriculum aligned with industry needs, students gain the knowledge and abilities required for the workforce. MIET emphasizes personality development, teamwork, and professionalism. Approved by AICTE and affiliated with WBSCT & VE & SD, the program prep",
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
              name: "Electrical Engineering diploma",
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
