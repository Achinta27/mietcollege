import React, { useEffect, useRef, useState } from "react";
import MainPageTemplate from "../../template/MainPageTemplate";
import FacilitiesSideBar from "./FacilitiesSideBar";
import SubBanner from "../SubBanner";
import FooterComponent from "../FooterComponent";
import { FiMenu } from "react-icons/fi";

const FacilitiesPageDesign = () => {
  const facilities = [
    "We have separate hostel for boys and girls. The hostel can accommodate ___ boys and ___ girls. The students are permitted to use their own computers in their own rooms. The hostel is spacious with a dining hall and kitchen. Separate seating arrangements are made for the students. Rules and Regulations: Students must occupy the rooms allotted to them by the Warden. Students should refrain from anti-social and undesirable activities such as consumption of alcohol, tobacco, gambling, ragging etc. Students are responsible for the cleanliness of their rooms. No student will be allowed to leave the hostel based on a phone call. Parents are requested to give a list of authorized visitors/local guardians. Visitors not mentioned in the list will not be permitted to visit the students in the hostel.Students will be permitted to go home only if the college is closed continuously for two days or more.Any student wishing to attend a function in the house, marriage or any other ceremony will be permitted to go only if the request is made by the parents to the HoD. Visitors are allowed on holidays from 11.00 A.M. to 6.00 P.M.",
  ];
  const header = ["Name of Hostel", "Seat Capacity", "Location", "Remarks"];
  const body = [
    ["Girls Hotel", "25", "Bandel Bazar", "MIET Girls Hostel"],
    ["Boys Hotel", "150", "In Campus", "MIET Boys Hostel"],
  ];
  const rules = [
    "Students must occupy the rooms allotted to them by the Warden.",
    "Students should refrain from anti-social and undesirable activities such as consumption of alcohol, tobacco, gambling, ragging etc.",
    "Students are responsible for the cleanliness of their rooms.",
    "No student will be allowed to leave the hostel based on a phone call.",
    "Parents are requested to give a list of authorized visitors/local guardians. Visitors not mentioned in the list will not be permitted to visit the students in the hostel.",
    "Students will be permitted to go home only if the college is closed continuously for two days or more.",
    "Any student wishing to attend a function in the house, marriage or any other ceremony will be permitted to go only if the request is made by the parents to the HoD.",
    "Visitors are allowed on holidays from 11.00 A.M. to 6.00 P.M.",
  ];

  const study = ["Morning", "Evening"];
  const studybody = [
    ["05:00 A.M. to 07:00 A.M.", "06:00 P.M. to 07:00 P.M."],
    ["", "09:00 P.M. to 10:30 P.M."],
  ];
  const games = ["Working Days", "Holidays"];
  const gamesbody = [
    ["04:30 P.M. to 06:00 P.M.", "09:00 A.M. to 12:00 P.M."],
    ["", "01:00 P.M. to 06:00 P.M."],
  ];

  const management = ["Mess Timings", "Working Days", "Holidays"];
  const managementbody = [
    ["Break Fast", "07:00 A.M. to 08:00 A.M.", "07:30 A.M. to 09:00 A.M."],
    ["Lunch", "1:00 P.M. to 02:30 P.M.", "12:30 P.M. to 02:00 P.M."],
    ["Dinner", "09:00 P.M. to 010:30 P.M.", "09:00 P.M. to 11:00 P.M."],
  ];

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  // Function to handle clicks outside the sidebar to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsSidebarOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebarRef]);
  return (
    <MainPageTemplate>
      <SubBanner
        bannerimg="/images/admissionsubbanner.jpg"
        heading={"Hostel Facilities"}
      />
      <div className="xl:p-16 lg:p-8 sm:p-4 flex flex-col gap-8">
        <div className="flex flex-col lg:flex-row gap-8 relative">
          {/* Menu Icon for Small Screens */}
          <div className="lg:hidden flex justify-start mb-4">
            <button
              className="text-3xl p-2 border rounded-md"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              <FiMenu />
            </button>
          </div>

          {/* Sidebar */}
          <div
            ref={sidebarRef}
            className={`lg:w-[30%] w-[70%] lg:flex-col flex-row sm:flex-row flex bg-gray-100 lg:bg-transparent fixed lg:relative z-50 lg:z-auto top-0 lg:top-auto left-0 lg:left-auto h-screen lg:h-auto p-2 lg:p-0 transform transition-transform duration-300 ease-in-out ${
              isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            } lg:translate-x-0`}
          >
            <FacilitiesSideBar />
          </div>
          <div className="lg:w-[70%] w-full flex flex-col gap-4">
            <div className="">
              <img src="/images/f1.png" alt="" className="w-full" />
            </div>
            <div className="flex flex-col gap-2">
              {facilities.map((item, index) => (
                <div key={index}>{item}</div>
              ))}
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-[#DC143C] text-3xl font-semibold">
                Rules and Regulations:
              </h1>
              <div className="flex flex-col gap-2">
                {rules.map((item, index) => (
                  <div key={index}>&#x2022; {item}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-[#DC143C] text-3xl font-semibold">Study Hours</h1>
          <div className="flex flex-col">
            <div className="grid grid-cols-2 sm:p-3 md:p-4 rounded-t-lg bg-[#DC143C]">
              {study.map((item, index) => (
                <div
                  className="md:text-lg sm:text-xs font-semibold text-white"
                  key={index}
                >
                  {item}
                </div>
              ))}
            </div>
            <div className="flex flex-col">
              {studybody.map((row, rowIndex) => (
                <div
                  className={`grid grid-cols-2 sm:p-3 md:p-4 ${
                    rowIndex % 2 === 0 ? "bg-white" : "bg-[#DC143C14]"
                  }`}
                  key={rowIndex}
                >
                  {row.map((cell, cellIndex) => (
                    <div
                      key={cellIndex}
                      className="md:text-lg sm:text-xs font-semibold"
                    >
                      {cell}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-[#DC143C] text-3xl font-semibold">
            Games and TV Timings
          </h1>
          <div className="flex flex-col">
            <div className="grid grid-cols-2 sm:p-3 md:p-4 rounded-t-lg bg-[#DC143C]">
              {games.map((item, index) => (
                <div
                  className="md:text-lg sm:text-xs font-semibold text-white"
                  key={index}
                >
                  {item}
                </div>
              ))}
            </div>
            <div className="flex flex-col">
              {gamesbody.map((row, rowIndex) => (
                <div
                  className={`grid grid-cols-2 sm:p-3 md:p-4 ${
                    rowIndex % 2 === 0 ? "bg-white" : "bg-[#DC143C14]"
                  }`}
                  key={rowIndex}
                >
                  {row.map((cell, cellIndex) => (
                    <div
                      key={cellIndex}
                      className="md:text-lg sm:text-xs font-semibold"
                    >
                      {cell}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-[#DC143C] text-3xl font-semibold">
            Hostel is run by the Management under the guidance of the Principal
            and Administrative officer. Veg and non veg foods are served in the
            hostel. Parents and guests are allowed to consume food by paying for
            them.
          </h1>
          <div className="flex flex-col">
            <div className="grid grid-cols-3 sm:p-3 md:p-4 rounded-t-lg bg-[#DC143C]">
              {management.map((item, index) => (
                <div
                  className="md:text-lg sm:text-xs font-semibold text-white"
                  key={index}
                >
                  {item}
                </div>
              ))}
            </div>
            <div className="flex flex-col">
              {managementbody.map((row, rowIndex) => (
                <div
                  className={`grid grid-cols-3 sm:p-3 md:p-4 ${
                    rowIndex % 2 === 0 ? "bg-white" : "bg-[#DC143C14]"
                  }`}
                  key={rowIndex}
                >
                  {row.map((cell, cellIndex) => (
                    <div
                      key={cellIndex}
                      className="md:text-lg sm:text-xs font-semibold"
                    >
                      {cell}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="grid grid-cols-4 sm:p-3 md:p-4 rounded-t-lg bg-[#DC143C]">
            {header.map((item, index) => (
              <div
                className="md:text-lg sm:text-xs font-semibold text-white"
                key={index}
              >
                {item}
              </div>
            ))}
          </div>
          <div className="flex flex-col">
            {body.map((row, rowIndex) => (
              <div
                className={`grid grid-cols-4 sm:p-3 md:p-4 ${
                  rowIndex % 2 === 0 ? "bg-white" : "bg-[#DC143C14]"
                }`}
                key={rowIndex}
              >
                {row.map((cell, cellIndex) => (
                  <div
                    key={cellIndex}
                    className="md:text-lg sm:text-xs font-semibold"
                  >
                    {cell}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <FooterComponent />
    </MainPageTemplate>
  );
};

export default FacilitiesPageDesign;
