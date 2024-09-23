import React from "react";
import DeptDesignComponent from "../../../../component/department/DeptDesignComponent";

const CivilDeptOverview = () => {
  const content = {
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
      { name: "Faculty Details", link: "/department/civil/faculty-details" },
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
  return (
    <div>
      <DeptDesignComponent content={content} />
    </div>
  );
};

export default CivilDeptOverview;
