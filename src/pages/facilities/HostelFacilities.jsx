import React from "react";
import FacilitiesPageDesign from "../../component/facilities/FacilitiesPageDesign";

const HostelFacilities = () => {
  const content = {
    bannerimg: "/images/admissionsubbanner.jpg",
    heading: "Hostel Facility",
    facilitiesimg: "/images/f1.jpg",
    facilities: [
      "Lorem ipsum dolor sit amet consectetur. Tincidunt velit quam sem eget eu sed ut. Amet nunc quam lectus sed est sit ultrices fermentum enim. Amet ultrices lectus nisi amet vulputate amet blandit. Praesent habitasse eget massa lacus nec. Tortor sit imperdiet elit consequat. Donec penatibus libero eget morbi augue consequat felis. Vel ullamcorper nibh aliquam sed quis aliquam est in. Metus amet donec sit nec.",
      "Magna arcu nulla interdum sed erat dui. Ante non leo lorem ut purus turpis adipiscing in. Non massa vel mauris ut volutpat urna.",
    ],
    header: ["Name of Hostel", "Seat Capacity", "Location", "Remarks"],
    body: [
      ["Arena Hotel", "22 nos", "Kolkata, WB", "Girl"],
      ["Arena Hotel", "22 nos", "Kolkata, WB", "Boys"],
    ],
  };
  return (
    <div>
      <FacilitiesPageDesign content={content} />
    </div>
  );
};

export default HostelFacilities;
