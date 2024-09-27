import React from "react";
import DeptDesignComponent from "../../../../component/department/DeptDesignComponent";
import { useParams } from "react-router-dom";

const CivilDeptOverview = () => {
  const { dept } = useParams();

  let content;

  switch (dept) {
    case "civil":
      content = {
        bannerimg: "/images/admissionsubbanner.jpg",
        heading: "Departments/Civil Engineering",
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
          {
            name: "Faculty Details",
            link: "/department/civil/faculty-details",
          },
          { name: "Laboratories", link: "/pdf/CE Lab Brochure.pdf" },
          { name: "Events", link: "" },
          { name: "Placement", link: "" },
          { name: "E-Magazine", link: "/pdf/CE Lab Brochure.pdf" },
        ],
        deptimg: "/images/d1.png",
        description: [
          "Lorem ipsum dolor sit amet consectetur. Interdum massa habitasse tortor et egestas. Volutpat morbi elit quisque venenatis at. Proin leo ac urna nulla felis in faucibus lacus dolor. Faucibus vitae nibh sit eget nisi massa mi. Eget vitae commodo tincidunt pretium ut convallis.",
          "Elementum ut mauris lectus nisi ut nisl. Netus eget quis nibh egestas turpis. Mattis scelerisque amet vitae id laoreet id. Mauris lectus blandit mauris vehicula aliquet. Fames aliquet egestas arcu ut vitae lectus eget egestas sem. Semper molestie ipsum nisl dui purus egestas pellentesque in morbi.",
          "Feugiat dolor leo suspendisse eu consectetur proin neque. Arcu tristique amet turpis pulvinar sem phasellus adipiscing. Consequat odio sem vulputate facilisi quam diam duis. Congue iaculis dui enim commodo facilisis id tincidunt massa fermentum. Nisi eget non neque vitae dignissim elementum integer proin. Tincidunt posuere venenatis amet risus felis et.",
          "Nullam at sed amet velit dignissim. Lobortis aliquam diam sed hendrerit luctus iaculis blandit proin nunc. Senectus in sem facilisis et elit cras. Placerat non vitae diam ultrices. Egestas in id lorem amet molestie lorem. In massa massa nullam placerat posuere. Integer ipsum morbi in erat. Scelerisque augue sed nibh metus posuere et faucibus sit cursus. Rutrum orci est sed placerat. Nulla ipsum dignissim viverra feugiat lacus arcu. Vestibulum ut etiam non leo dictum urna.",
          "Id nec risus adipiscing mattis. Quam quis feugiat est nam massa praesent at dui sem. Lectus volutpat at vivamus enim ornare elementum at. Nunc pellentesque nisl cras ultricies. Arcu mollis sapien sed ac in congue quis. Eu est arcu nunc quisque nunc sodales aliquam. In elementum aliquam nulla arcu amet morbi euismod massa arcu. Velit nascetur et fringilla at faucibus vivamus.",
          "In auctor in id tincidunt purus nibh adipiscing non et. Vitae aliquam ipsum quis lobortis enim pellentesque nec pellentesque sagittis. Eu vulputate fermentum feugiat ipsum. Posuere egestas fermentum tincidunt facilisis massa facilisis. Nisl vitae amet ac enim aliquet. Dolor adipiscing aliquet nunc ullamcorper scelerisque nam.",
          "Magna ornare in morbi pulvinar. Elit pellentesque felis tincidunt ornare ultrices. Accumsan vulputate pulvinar lectus praesent ultricies egestas et tincidunt id. Arcu commodo vitae diam nulla elit. Adipiscing nec suspendisse commodo dui euismod vulputate sit lectus. Tristique ornare blandit fusce ut amet. Tincidunt sed in donec vulputate. Interdum volutpat in in tortor amet dolor nec. Et tincidunt nunc ultrices sit. Sit sed vitae in vulputate volutpat. Proin nunc diam massa viverra duis lacinia a sollicitudin.",
          "Tempor augue aliquam non id et ultricies. Purus venenatis in dolor magna odio quis bibendum libero. Adipiscing posuere mauris et sed pellentesque at integer at et. Purus gravida ultrices proin malesuada integer orci. Rutrum tincidunt sed pellentesque purus ultricies est non sit. Volutpat dolor nullam feugiat eget. Elit cras quam varius ut nisl. Elementum rhoncus vitae hendrerit pellentesque. Ornare tellus sit eget dictum elit. Justo nulla libero id id pharetra mauris faucibus. Tellus mauris vel egestas turpis.",
        ],
      };
      break;
    case "bsc":
      content = {
        bannerimg: "/images/admissionsubbanner.jpg",
        heading: "Departments/Basic Science & Humanities Department",
        sideheaderdept: [
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
        ],
        deptimg: "/images/d1.png",
        description: [
          "The basis for engineering studies is provided by the department of Basic Sciences. The department offers courses in Mathematics, Physics, Chemistry, English, and Foundational Engineering. Modern lab facilities are available for students to utilize, giving them a deeper comprehension of the basic sciences. What the Basic Sciences and Humanities Department is expected to offer is: Excellent, fair foundation courses in English, Physics, Chemistry, Mathematics, and the Fundamentals of Engineering. Mathematical and scientific foundations that support the integration of technical knowledge across engineering specialties. Insights into the decision-making processes of people, groups, and governmental entities.Fundamental communication abilities are a useful tool when speaking with any organization's stakeholders.The goal of the Department of Basic Sciences and Humanities is to establish itself as an exceptional department that enhances",
        ],
      };
      break;
    case "me":
      content = {
        bannerimg: "/images/admissionsubbanner.jpg",
        heading: "Departments/Mechanical Engineering",
        sideheaderdept: [
          { name: "Overview", link: "/department/me/overview" },
          {
            name: "Vision, Mission & Program Educational Objective",
            link: "/department/me/vission-and-mission",
          },
          {
            name: "Programme Outcome (POs) & Programme Specific Outcome (PSO)",
            link: "/department/me/program-outcome",
          },
          { name: "Curriculam", link: "" },
          { name: "Lesson Plan", link: "" },
          {
            name: "Faculty Details",
            link: "/department/me/faculty-details",
          },
          { name: "Laboratories", link: "/pdf/ME Lab Brochure.pdf" },
          { name: "Events", link: "" },
          { name: "Placement", link: "" },
          { name: "E-Magazine", link: "/pdf/ME Lab Brochure.pdf" },
        ],
        deptimg: "/images/d1.png",
        description: [
          "Mechanical Engineering is one of the broadest of the engineering professions. Mechanical Engineering principles and expertise are involved at some stage during the generalization, design, development, and manufacture of every natural-made object with moving parts. Mechanical Engineering touches nearly every aspect of ultra-modern life from Mobile Phones and Biomedical devices to Aircraft and Power plants. Not only engineering, but mechanical engineers also deal with profitable issues, from the cost of a single element to the profitable impact of a manufacturing workshop. Mechanical Engineering is possibly the most distinct and universal of the engineering disciplines. In addition to Physics and Mathematics, it encompasses crucial elements of Aerospace, Electrical, Civil, Chemical, and even Materials science and Bio-engineering. Besides this, mechanical engineers can also be found in sales, engineering operations, and commercial operations. Many inventions key to our future will have their roots in the world of mass, motion, forces, and energy.Although Mechanical Engineering is considered to be one of the oldest fields of engineering, the demand for Mechanical engineers has never slowed down. Our department has a team of highly qualified and experienced faculty, good infrastructure and lab facilities. We are striving hard continuously to improve upon the quality of education and to maintain its position of leadership in engineering and technology. The core values of the department help the students to develop their overall personality and make them worthy to compete and work at global level. Mechanical Engineering plays a crucial role in manufacturing of automobiles to airplanes, from refrigerators to cryogenic engines. The department has progressed over time to keep up with the challenges in technology advancement, while maintaining a strong base in the fundamental aspects of Mechanical Engineering. Mechanical Engineering is a discipline that use materials science, mathematics to design and applies principles of physics. Engineers use these core principles along with tools that aid in developing aircraft’s, industrial machinery and equipment’s, heating and cooling systems, etc. Mechanical Engineering Department is the most sought for its practical real-world oriented teaching practices.",
        ],
      };
      break;
    case "csc":
      content = {
        bannerimg: "/images/admissionsubbanner.jpg",
        heading: "Departments/Computer Science & Engineering",
        sideheaderdept: [
          { name: "Overview", link: "/department/csc/overview" },
          {
            name: "Vision, Mission & Program Educational Objective",
            link: "/department/csc/vission-and-mission",
          },
          {
            name: "Programme Outcome (POs) & Programme Specific Outcome (PSO)",
            link: "/department/csc/program-outcome",
          },
          { name: "Curriculam", link: "" },
          { name: "Lesson Plan", link: "" },
          {
            name: "Faculty Details",
            link: "/department/csc/faculty-details",
          },
          { name: "Laboratories", link: "/pdf/CSE Lab Brochure.pdf" },
          { name: "Events", link: "" },
          { name: "Placement", link: "" },
          { name: "E-Magazine", link: "/pdf/CSE Lab Brochure.pdf" },
        ],
        deptimg: "/images/d1.png",
        description: [
          "The Department of Computer Science & Engineering was established in the year 2010 and since its inception, the department has experienced an exponential growth.  It presently offers B.Tech. and Diploma programs. The aim of the department is to create an excellent graduate to work in the field of Computer Science & Engineering by providing quality education, innovative teaching methods and technical aids. The Wi-Fi enabled classrooms, state of the art infrastructure and technical facilities such as well-equipped seminar hall for e-learning, support in achieving the department's objective. We have well experienced, dedicated and highly qualified faculties who are the backbone of the department. The excellent academic performance of our students is due to the involvement and dedication of our faculty. They give individual attention to the students and make them excel in curricular, co-curricular and extra-curricular activities. All these factors make Modern Institute of Engineering & Technology as one of the best engineering colleges in West Bengal. The Department provides a comprehensive curriculum on all the topics related to Computer Hardware and Software with a special emphasis on practical learning. The academic structure is in line with the latest technological changes which equip the students with the latest trends in the Information and Technology field. The value-added courses on the latest technologies are conducted during the working hours and beyond working hours. Our aim is to provide quality education to the students and impart programming excellence in them. Apart from making the students as good technocrats, individual attention is also given to make the student a good citizen and also to serve the industry and society beneficially.",
        ],
      };
      break;
    case "cscai":
      content = {
        bannerimg: "/images/admissionsubbanner.jpg",
        heading:
          "Departments/Computer Science and Engineering (Artificial Intelligence and Machine Learning)",
        sideheaderdept: [
          { name: "Overview", link: "/department/cscai/overview" },
          {
            name: "Vision, Mission & Program Educational Objective",
            link: "/department/cscai/vission-and-mission",
          },
          {
            name: "Programme Outcome (POs) & Programme Specific Outcome (PSO)",
            link: "/department/cscai/program-outcome",
          },
          { name: "Curriculam", link: "" },
          { name: "Lesson Plan", link: "" },
          {
            name: "Faculty Details",
            link: "/department/cscai/faculty-details",
          },
          { name: "Laboratories", link: "/pdf/CSE Lab Brochure.pdf" },
          { name: "Events", link: "" },
          { name: "Placement", link: "" },
          { name: "E-Magazine", link: "/pdf/CSE Lab Brochure.pdf" },
        ],
        deptimg: "/images/d1.png",
        description: [
          "The Department of Computer Science & Engineering was established in the year 2010 and since its inception, the department has experienced an exponential growth.  It presently offers B.Tech. and Diploma programs. The aim of the department is to create an excellent graduate to work in the field of Computer Science & Engineering by providing quality education, innovative teaching methods and technical aids. The Wi-Fi enabled classrooms, state of the art infrastructure and technical facilities such as well-equipped seminar hall for e-learning, support in achieving the department's objective. We have well experienced, dedicated and highly qualified faculties who are the backbone of the department. The excellent academic performance of our students is due to the involvement and dedication of our faculty. They give individual attention to the students and make them excel in curricular, co-curricular and extra-curricular activities. All these factors make Modern Institute of Engineering & Technology as one of the best engineering colleges in West Bengal. The Department provides a comprehensive curriculum on all the topics related to Computer Hardware and Software with a special emphasis on practical learning. The academic structure is in line with the latest technological changes which equip the students with the latest trends in the Information and Technology field. The value-added courses on the latest technologies are conducted during the working hours and beyond working hours. Our aim is to provide quality education to the students and impart programming excellence in them. Apart from making the students as good technocrats, individual attention is also given to make the student a good citizen and also to serve the industry and society beneficially.",
        ],
      };
      break;
    case "csccs":
      content = {
        bannerimg: "/images/admissionsubbanner.jpg",
        heading:
          "Departments/Computer Science and Engineering (Cyber Security)",
        sideheaderdept: [
          { name: "Overview", link: "/department/csccs/overview" },
          {
            name: "Vision, Mission & Program Educational Objective",
            link: "/department/csccs/vission-and-mission",
          },
          {
            name: "Programme Outcome (POs) & Programme Specific Outcome (PSO)",
            link: "/department/csccs/program-outcome",
          },
          { name: "Curriculam", link: "" },
          { name: "Lesson Plan", link: "" },
          {
            name: "Faculty Details",
            link: "/department/csccs/faculty-details",
          },
          { name: "Laboratories", link: "/pdf/CSE Lab Brochure.pdf" },
          { name: "Events", link: "" },
          { name: "Placement", link: "" },
          { name: "E-Magazine", link: "/pdf/CSE Lab Brochure.pdf" },
        ],
        deptimg: "/images/d1.png",
        description: [
          "The Department of Computer Science & Engineering was established in the year 2010 and since its inception, the department has experienced an exponential growth.  It presently offers B.Tech. and Diploma programs. The aim of the department is to create an excellent graduate to work in the field of Computer Science & Engineering by providing quality education, innovative teaching methods and technical aids. The Wi-Fi enabled classrooms, state of the art infrastructure and technical facilities such as well-equipped seminar hall for e-learning, support in achieving the department's objective. We have well experienced, dedicated and highly qualified faculties who are the backbone of the department. The excellent academic performance of our students is due to the involvement and dedication of our faculty. They give individual attention to the students and make them excel in curricular, co-curricular and extra-curricular activities. All these factors make Modern Institute of Engineering & Technology as one of the best engineering colleges in West Bengal. The Department provides a comprehensive curriculum on all the topics related to Computer Hardware and Software with a special emphasis on practical learning. The academic structure is in line with the latest technological changes which equip the students with the latest trends in the Information and Technology field. The value-added courses on the latest technologies are conducted during the working hours and beyond working hours. Our aim is to provide quality education to the students and impart programming excellence in them. Apart from making the students as good technocrats, individual attention is also given to make the student a good citizen and also to serve the industry and society beneficially.",
        ],
      };
      break;
    case "ece":
      content = {
        bannerimg: "/images/admissionsubbanner.jpg",
        heading:
          "Departments/Computer Science and Engineering (Cyber Security)",
        sideheaderdept: [
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
        ],
        deptimg: "/images/d1.png",
        description: [
          "The Department of Computer Science & Engineering was established in the year 2010 and since its inception, the department has experienced an exponential growth.  It presently offers B.Tech. and Diploma programs. The aim of the department is to create an excellent graduate to work in the field of Computer Science & Engineering by providing quality education, innovative teaching methods and technical aids. The Wi-Fi enabled classrooms, state of the art infrastructure and technical facilities such as well-equipped seminar hall for e-learning, support in achieving the department's objective. We have well experienced, dedicated and highly qualified faculties who are the backbone of the department. The excellent academic performance of our students is due to the involvement and dedication of our faculty. They give individual attention to the students and make them excel in curricular, co-curricular and extra-curricular activities. All these factors make Modern Institute of Engineering & Technology as one of the best engineering colleges in West Bengal. The Department provides a comprehensive curriculum on all the topics related to Computer Hardware and Software with a special emphasis on practical learning. The academic structure is in line with the latest technological changes which equip the students with the latest trends in the Information and Technology field. The value-added courses on the latest technologies are conducted during the working hours and beyond working hours. Our aim is to provide quality education to the students and impart programming excellence in them. Apart from making the students as good technocrats, individual attention is also given to make the student a good citizen and also to serve the industry and society beneficially.",
        ],
      };
      break;
    case "ee":
      content = {
        bannerimg: "/images/admissionsubbanner.jpg",
        heading: "Departments/Electrical Engineering",
        sideheaderdept: [
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
        ],
        deptimg: "/images/d1.png",
        description: [
          "Lorem ipsum dolor sit amet consectetur. Interdum massa habitasse tortor et egestas. Volutpat morbi elit quisque venenatis at. Proin leo ac urna nulla felis in faucibus lacus dolor. Faucibus vitae nibh sit eget nisi massa mi. Eget vitae commodo tincidunt pretium ut convallis.",
          "Elementum ut mauris lectus nisi ut nisl. Netus eget quis nibh egestas turpis. Mattis scelerisque amet vitae id laoreet id. Mauris lectus blandit mauris vehicula aliquet. Fames aliquet egestas arcu ut vitae lectus eget egestas sem. Semper molestie ipsum nisl dui purus egestas pellentesque in morbi.",
          "Feugiat dolor leo suspendisse eu consectetur proin neque. Arcu tristique amet turpis pulvinar sem phasellus adipiscing. Consequat odio sem vulputate facilisi quam diam duis. Congue iaculis dui enim commodo facilisis id tincidunt massa fermentum. Nisi eget non neque vitae dignissim elementum integer proin. Tincidunt posuere venenatis amet risus felis et.",
          "Nullam at sed amet velit dignissim. Lobortis aliquam diam sed hendrerit luctus iaculis blandit proin nunc. Senectus in sem facilisis et elit cras. Placerat non vitae diam ultrices. Egestas in id lorem amet molestie lorem. In massa massa nullam placerat posuere. Integer ipsum morbi in erat. Scelerisque augue sed nibh metus posuere et faucibus sit cursus. Rutrum orci est sed placerat. Nulla ipsum dignissim viverra feugiat lacus arcu. Vestibulum ut etiam non leo dictum urna.",
          "Id nec risus adipiscing mattis. Quam quis feugiat est nam massa praesent at dui sem. Lectus volutpat at vivamus enim ornare elementum at. Nunc pellentesque nisl cras ultricies. Arcu mollis sapien sed ac in congue quis. Eu est arcu nunc quisque nunc sodales aliquam. In elementum aliquam nulla arcu amet morbi euismod massa arcu. Velit nascetur et fringilla at faucibus vivamus.",
          "In auctor in id tincidunt purus nibh adipiscing non et. Vitae aliquam ipsum quis lobortis enim pellentesque nec pellentesque sagittis. Eu vulputate fermentum feugiat ipsum. Posuere egestas fermentum tincidunt facilisis massa facilisis. Nisl vitae amet ac enim aliquet. Dolor adipiscing aliquet nunc ullamcorper scelerisque nam.",
          "Magna ornare in morbi pulvinar. Elit pellentesque felis tincidunt ornare ultrices. Accumsan vulputate pulvinar lectus praesent ultricies egestas et tincidunt id. Arcu commodo vitae diam nulla elit. Adipiscing nec suspendisse commodo dui euismod vulputate sit lectus. Tristique ornare blandit fusce ut amet. Tincidunt sed in donec vulputate. Interdum volutpat in in tortor amet dolor nec. Et tincidunt nunc ultrices sit. Sit sed vitae in vulputate volutpat. Proin nunc diam massa viverra duis lacinia a sollicitudin.",
          "Tempor augue aliquam non id et ultricies. Purus venenatis in dolor magna odio quis bibendum libero. Adipiscing posuere mauris et sed pellentesque at integer at et. Purus gravida ultrices proin malesuada integer orci. Rutrum tincidunt sed pellentesque purus ultricies est non sit. Volutpat dolor nullam feugiat eget. Elit cras quam varius ut nisl. Elementum rhoncus vitae hendrerit pellentesque. Ornare tellus sit eget dictum elit. Justo nulla libero id id pharetra mauris faucibus. Tellus mauris vel egestas turpis.",
        ],
      };
      break;
    default:
      break;
  }

  return (
    <div>
      <DeptDesignComponent content={content} />
    </div>
  );
};

export default CivilDeptOverview;
