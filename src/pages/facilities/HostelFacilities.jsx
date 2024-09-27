import React from "react";
import FacilitiesPageDesign from "../../component/facilities/FacilitiesPageDesign";

const HostelFacilities = () => {
  const content = {
    bannerimg: "/images/admissionsubbanner.jpg",
    heading: "Hostel Facility",
    facilitiesimg: "/images/f1.jpg",
    facilities: [
      "We have separate hostel for boys and girls. The hostel can accommodate ___ boys and ___ girls. The students are permitted to use their own computers in their own rooms. The hostel is spacious with a dining hall and kitchen. Separate seating arrangements are made for the students. Rules and Regulations: Students must occupy the rooms allotted to them by the Warden. Students should refrain from anti-social and undesirable activities such as consumption of alcohol, tobacco, gambling, ragging etc. Students are responsible for the cleanliness of their rooms. No student will be allowed to leave the hostel based on a phone call. Parents are requested to give a list of authorized visitors/local guardians. Visitors not mentioned in the list will not be permitted to visit the students in the hostel.Students will be permitted to go home only if the college is closed continuously for two days or more.Any student wishing to attend a function in the house, marriage or any other ceremony will be permitted to go only if the request is made by the parents to the HoD. Visitors are allowed on holidays from 11.00 A.M. to 6.00 P.M.",
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
