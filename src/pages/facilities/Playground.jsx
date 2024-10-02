import React, { useEffect, useRef, useState } from "react";
import MainPageTemplate from "../../template/MainPageTemplate";
import PhotoGalleryComponent from "../../component/PhotoGalleryComponent";
import FooterComponent from "../../component/FooterComponent";
import SubBanner from "../../component/SubBanner";
import FacilitiesSideBar from "../../component/facilities/FacilitiesSideBar";
import { FiMenu } from "react-icons/fi";

const Playground = () => {
  const photogallery = [
    "/images/playground.jpg",
    "/images/playground1.jpg",
    "/images/playground2.jpg",
    "/images/playground3.jpg",
    "/images/playground4.jpg",
    "/images/playground5.jpg",
    "/images/playground6.jpg",
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
        heading={"Playground"}
      />
      <div className="xl:p-16 lg:p-8 sm:p-4">
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

          <PhotoGalleryComponent gallery={photogallery} />
        </div>
      </div>
      <FooterComponent />
    </MainPageTemplate>
  );
};

export default Playground;
