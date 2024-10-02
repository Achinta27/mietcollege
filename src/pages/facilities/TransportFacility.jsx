import React, { useEffect, useRef, useState } from "react";
import FooterComponent from "../../component/FooterComponent";
import MainPageTemplate from "../../template/MainPageTemplate";
import SubBanner from "../../component/SubBanner";
import FacilitiesSideBar from "../../component/facilities/FacilitiesSideBar";
import { FiMenu } from "react-icons/fi";

const TransportFacility = () => {
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
        heading={"Transport Facility"}
      />
      <div className="xl:p-16 lg:p-8 sm:p-4 flex flex-col gap-8">
        <div className="flex flex-col lg:flex-row gap-8">
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
          <div className="flex flex-col sm:w-full lg:w-[70%] gap-4">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4 place-items-stretch">
              <img
                src={"/images/transport-1.jpg"}
                alt="conference-room"
                className="w-full md:w-[45vmax] rounded-xl shadow"
              />
              <img
                src={"/images/transport-2.jpg"}
                alt="conference-room"
                className="w-full md:w-[45vmax] rounded-xl shadow"
              />
              <img
                src={"/images/transport-3.jpg"}
                alt="conference-room"
                className="w-full md:w-[45vmax] rounded-xl shadow"
              />
              <img
                src={"/Campus/WhatsApp Image 2024-08-02 at 10.59.02 (5).jpeg"}
                alt="conference-room"
                className="w-[45vmax] rounded-xl shadow"
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className="sm:text-xs lg:text-sm xl:text-lg">
                A full-fledged Transport department functions in the college
                with buses to provide transport facility to students and staff
                from Bandel Station. This service is offered ensuring a
                hassle-free and safe transportation. The College runs 3 buses
                for providing transport facility to students Bandel Station. The
                number of buses will be increased corresponding to the increase
                in the intake of students.
              </p>
            </div>
          </div>
        </div>
      </div>
      <FooterComponent />
    </MainPageTemplate>
  );
};

export default TransportFacility;
