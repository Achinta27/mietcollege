import React, { useState } from "react";
import { GoTriangleLeft } from "react-icons/go";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const DeptSideHeader = ({ sideheaderdept }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <div className="flex lg:hidden justify-between items-center sm:w-[30%] md:w-[20%] p-4 bg-[#DC143C] text-white">
        <h2 className="text-lg font-semibold">Menu</h2>
        <button onClick={toggleSidebar}>
          <FaBars className="text-2xl" />
        </button>
      </div>
      <div
        className={`fixed inset-0 sm:z-[100] lg:z-10 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 lg:translate-x-0 lg:relative lg:flex lg:flex-col sm:w-[80%] md:w-[50%] lg:w-full lg:gap-4 bg-white lg:bg-transparent p-4 lg:p-0 shadow-lg lg:shadow-none`}
      >
        <div className="flex justify-end items-center mb-4 lg:hidden">
          <button
            onClick={toggleSidebar}
            className="w-[2.5rem] h-[2.5rem] flex justify-center items-center rounded-lg text-white font-semibold bg-[#DC143C] "
          >
            <FaTimes className="text-2xl" />
          </button>
        </div>
        <div className="flex flex-col gap-4">
          {sideheaderdept.map((side, index) => (
            <Link
              to={side.link}
              className={`w-full flex relative justify-start p-4 bg-[#DC143C] text-white items-center text-lg font-semibold rounded-md`}
              key={index}
              onClick={toggleSidebar}
            >
              <div>{side.name}</div>
              {location.pathname === side.link && (
                <span className="absolute translate-y-1/2 transform bottom-1/2 -right-4 text-4xl">
                  <GoTriangleLeft />
                </span>
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DeptSideHeader;
