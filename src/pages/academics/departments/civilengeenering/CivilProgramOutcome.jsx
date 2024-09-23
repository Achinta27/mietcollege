import React from "react";
import DeptProgramOutcomeDesign from "../../../../component/department/DeptProgramOutcomeDesign";

const CivilProgramOutcome = () => {
  const content = {
    bannerimg: "/images/admissionsubbanner.jpg",
    heading: "Programme Outcome (POs) & Programme Specific Outcome (PSO)",
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
    programoutcome: [
      {
        heading: "Programme Outcome (POs)",
        description: [
          "Lorem ipsum dolor sit amet consectetur. Urna dictum bibendum faucibus massa tortor pulvinar. Sit cursus felis proin id integer rhoncus nec enim. Lorem quis turpis vitae etiam cras volutpat. Sit pharetra vitae nulla arcu placerat aliquet quis etiam. Turpis odio sollicitudin odio egestas at mauris eu ut. Scelerisque pretium amet pulvinar diam mattis. Risus placerat orci sit eleifend sed tincidunt tincidunt aliquam. Amet pretium cursus molestie fermentum. At metus enim augue amet. Amet gravida mattis etiam ultrices elementum pellentesque turpis felis et. Ac ut volutpat velit proin lacinia tellus ut. Amet sit maecenas lacinia dictumst.",
          "Lorem ipsum dolor sit amet consectetur. Urna dictum bibendum faucibus massa tortor pulvinar. Sit cursus felis proin id integer rhoncus nec enim. Lorem quis turpis vitae etiam cras volutpat. Sit pharetra vitae nulla arcu placerat aliquet quis etiam. Turpis odio sollicitudin odio egestas at mauris eu ut. Scelerisque pretium amet pulvinar diam mattis. Risus placerat orci sit eleifend sed tincidunt tincidunt aliquam. Amet pretium cursus molestie fermentum. At metus enim augue amet. Amet gravida mattis etiam ultrices elementum pellentesque turpis felis et. Ac ut volutpat velit proin lacinia tellus ut. Amet sit maecenas lacinia dictumst.",
        ],
      },
      {
        heading: "Programme Specific Outcome (PSO)",
        description: [
          "Lorem ipsum dolor sit amet consectetur. Urna dictum bibendum faucibus massa tortor pulvinar. Sit cursus felis proin id integer rhoncus nec enim. Lorem quis turpis vitae etiam cras volutpat. Sit pharetra vitae nulla arcu placerat aliquet quis etiam. Turpis odio sollicitudin odio egestas at mauris eu ut. Scelerisque pretium amet pulvinar diam mattis. Risus placerat orci sit eleifend sed tincidunt tincidunt aliquam. Amet pretium cursus molestie fermentum. At metus enim augue amet. Amet gravida mattis etiam ultrices elementum pellentesque turpis felis et. Ac ut volutpat velit proin lacinia tellus ut. Amet sit maecenas lacinia dictumst.",
          "Lorem ipsum dolor sit amet consectetur. Urna dictum bibendum faucibus massa tortor pulvinar. Sit cursus felis proin id integer rhoncus nec enim. Lorem quis turpis vitae etiam cras volutpat. Sit pharetra vitae nulla arcu placerat aliquet quis etiam. Turpis odio sollicitudin odio egestas at mauris eu ut. Scelerisque pretium amet pulvinar diam mattis. Risus placerat orci sit eleifend sed tincidunt tincidunt aliquam. Amet pretium cursus molestie fermentum. At metus enim augue amet. Amet gravida mattis etiam ultrices elementum pellentesque turpis felis et. Ac ut volutpat velit proin lacinia tellus ut. Amet sit maecenas lacinia dictumst.",
        ],
      },
    ],
  };
  return (
    <div>
      <DeptProgramOutcomeDesign content={content} />
    </div>
  );
};

export default CivilProgramOutcome;
