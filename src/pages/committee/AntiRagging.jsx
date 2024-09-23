import React from "react";
import ComitteeDesignComponent from "../../component/ComitteeDesignComponent";

const AntiRagging = () => {
  const content = {
    bannerimg: "/images/admissionsubbanner.jpg",

    heading: "Anti Ragging",
    pageshortheaing: "The member of Ant-ragging committee are as follows:-",
    header: ["Name", "Designation", "Mobile Number"],
    body: [
      ["Mr. Rana Deb", "Founder & Chairman", "98003 98453"],
      ["Mrs. Ruma Deb", "Trustee", "98003 98453"],
      ["Prof. (Dr.) Arijit Choudhury", "Principal", "98003 98453"],
      [
        "Prof. ( Dr.) Haripada Bhaumik",
        "Ex. Principal JGEC, ..",
        "98003 98453",
      ],
      ["Prof. (Dr.) Dilip Kumar Biswas", "Deputy Director...", "98003 98453"],
      ["Prof. (Dr.) Loknath Ghosh", "Ex HOD ...", "98003 98453"],
      ["Prof.(Dr.) Goutam Nandi", "Ex. Prof. ME Dept...", "98003 98453"],
      ["Prof.(Dr.) Goutam Nandi", "Ex. Prof. ME Dept...", "98003 98453"],
    ],
  };
  return (
    <div>
      <ComitteeDesignComponent content={content} />
    </div>
  );
};

export default AntiRagging;
