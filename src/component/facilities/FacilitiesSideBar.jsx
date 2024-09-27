import React from "react";
import { Link, useLocation } from "react-router-dom";

const FacilitiesSideBar = () => {
  const location = useLocation();
  const facilitiessidebar = [
    {
      name: "Hotel Facility",
      link: "/mietcampus/facilities/hostel-facilities",
    },
    { name: "Library Facility", link: "/mietcampus/facilities/library" },
    { name: "Transport Facility", link: "/mietcampus/facilities/transport" },
    { name: "Internet Facility", link: "" },
    { name: "Medical Facility", link: "" },
    { name: "Cafeteria", link: "" },
  ];
  return (
    <div className="flex flex-col gap-6">
      <div className="text-3xl font-semibold">Our MIET College Facility</div>
      <div className="p-3 flex flex-col">
        {facilitiessidebar.map((item, index) => (
          <Link
            to={item.link}
            key={index}
            className={`p-4 text-xl font-semibold rounded-md px-4 ${
              location.pathname === item.link
                ? "bg-red-600 text-white"
                : index % 2 === 0
                ? "bg-white text-black"
                : "bg-[#DC143C14] text-black"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FacilitiesSideBar;
