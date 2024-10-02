import React, { useState, useEffect, useRef } from "react";
import FooterComponent from "../../component/FooterComponent";
import MainPageTemplate from "../../template/MainPageTemplate";
import SubBanner from "../../component/SubBanner";
import FacilitiesSideBar from "../../component/facilities/FacilitiesSideBar";
import { FiMenu } from "react-icons/fi"; // Menu icon

const ConferenceHall = () => {
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
        bannerimg={"/images/admissionsubbanner.jpg"}
        heading={"Conference Room"}
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

          {/* Main Content */}
          <div className="flex lg:w-[70%] w-full flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              <img
                src={"/images/conference-room-1.jpg"}
                alt="conference-room"
                className="rounded-xl shadow"
              />
              <img
                src={"/images/conference-room-2.jpg"}
                alt="conference-room"
                className="rounded-xl shadow"
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className="sm:text-xs lg:text-sm xl:text-lg">
                As an adjunct to the learning infrastructure at MIET, an
                air-conditioned conference room located on ground floor at the
                Institute provides a venue for small groups of students to
                interact with each other, prepare for mock interviews and group
                discussions &#40;GDs&#41; organized by the MIET Placement Cell
                and attend presentations made by guest speakers from industry
                and business. Our air-conditioned conference room is fully
                equipped with the latest audio video technologies which can
                connect to the Internet on demand. Conference rooms are also
                used to conduct seminars as well as to screen learning videos
                under faculty supervision.
              </p>
            </div>
          </div>
        </div>
      </div>
      <FooterComponent />
    </MainPageTemplate>
  );
};

export default ConferenceHall;
